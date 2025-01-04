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
    render inertia: "Gems/Checkout", props: {
      gem: serialize(gem)
    }
  end

  def buy
    gem = PreciousGem.find(params[:id])

    # TODO: Create a user after that
    User.first.payment_processor.charge(gem.price_cents)

    redirect_to root_path
  end

  private

  def user_params
    params.expect(user: [ :name, :email, :document ])
  end
end
