class GemsController < ApplicationController
  def index
    gems = Gem.all
    render inertia: 'Gems/Index', props: {
      gems: gems.as_json(include: :photo)
    }
  end

  def show
    gem = Gem.find(params[:id])
    render inertia: 'Gems/Show', props: {
      gem: gem.as_json(include: :photo)
    }
  end
end
