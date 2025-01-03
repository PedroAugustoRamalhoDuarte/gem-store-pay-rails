class PreciousGem < ApplicationRecord
  has_one_attached :photo

  validates :name, presence: true
  validates :quantity, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :price_cents, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  def price
    price_cents / 100.0
  end
end