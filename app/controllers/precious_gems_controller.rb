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
    User.first.payment_processor.charge(gem.price_cents)
  end

  private

  def user_params
    params.expect(user: [ :name, :email, :document ])
  end
end
