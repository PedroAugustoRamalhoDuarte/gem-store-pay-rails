class User < ApplicationRecord
  pay_customer default_payment_processor: :asaas

  has_secure_password

  has_many :sessions, dependent: :destroy

  normalizes :email, with: ->(e) { e.strip.downcase }
end
