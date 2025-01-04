class ChargeSerializer < ApplicationSerializer
  attributes :id, :amount, :currency, :created_at, :status
end