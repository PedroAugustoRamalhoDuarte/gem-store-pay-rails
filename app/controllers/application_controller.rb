class ApplicationController < ActionController::Base
  include Authentication
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  private

  def serialize(resource, serializer = nil)
    if resource.respond_to?(:each)
      Panko::ArraySerializer.new(resource, each_serializer: serializer || "#{resource.klass}Serializer".constantize).to_a
    else
      (serializer || "#{resource.class}Serializer".constantize).new.serialize(resource)
    end
  end
end
