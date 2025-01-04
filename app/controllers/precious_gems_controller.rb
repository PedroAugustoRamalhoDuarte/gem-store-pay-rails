class PreciousGemsController < ApplicationController
  def index
    gems = PreciousGem.all
    render inertia: 'Gems/Index', props: {
      gems: serialize(gems)
    }
  end

  def show
    gem = PreciousGem.find(params[:id])
    render inertia: 'Gems/Show', props: {
      gem: serialize(gem)
    }
  end

  def checkout
    gem = PreciousGem.find(params[:id])
    render inertia: 'Gems/Checkout', props: {
      gem: serialize(gem)
    }
  end
end
