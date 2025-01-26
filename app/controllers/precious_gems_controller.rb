class PreciousGemsController < ApplicationController
  def index
    gems = PreciousGem.all
    render inertia: "Gems/Index", props: {
      gems: serialize(gems)
    }
  end

  def show
    gem = PreciousGem.find(params[:id])
    render inertia: "Gems/Show", props: {
      gem: serialize(gem)
    }
  end

  def checkout
    gem = PreciousGem.find(params[:id])
    current_user.payment_processor.charge(gem.price_cents, {
      metadata: {
        record_type: "PreciousGem",
        record_id: gem.id
      }
    })

    redirect_to charges_path
  end

  def stripe_checkout
    gem = PreciousGem.find(params[:id])

    current_user.set_payment_processor(:stripe)
    checkout_session = current_user.payment_processor.checkout(
      mode:  "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: gem.price_cents,
            product_data: {
              name: gem.name
            }
          },
          quantity: 1
        }
      ]
    )

    inertia_location checkout_session.url
  end

  private

  def current_user
    User.first
  end

  def user_params
    params.expect(user: [ :name, :email, :document ])
  end
end
