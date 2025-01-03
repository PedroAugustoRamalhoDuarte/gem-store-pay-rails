class PreciousGemsController < ApplicationController
  def index
    gems = PreciousGem.all
    render inertia: 'Gems/Index', props: {
      gems: gems.as_json(methods: [:price], include: :photo)
    }
  end

  def show
    gem = PreciousGem.find(params[:id])
    render inertia: 'Gems/Show', props: {
      gem: gem.as_json(methods: [:price], include: :photo)
    }
  end
end
