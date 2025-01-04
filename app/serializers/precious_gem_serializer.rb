class PreciousGemSerializer < ApplicationSerializer
  attributes :id, :name, :quantity, :price_cents, :price, :photo_url

  def photo_url
    object.photo_url
  end

  def price
    object.price
  end
end
