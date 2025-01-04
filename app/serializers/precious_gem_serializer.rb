class PreciousGemSerializer < Panko::Serializer
  attributes :id, :name, :quantity, :price_cents, :price, :photo_url

  def price
    object.price_cents / 100.0
  end
end
