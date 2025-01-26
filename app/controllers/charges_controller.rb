class ChargesController < ApplicationController
  def index
    charges = Current.user.payment_processor.charges
    render inertia: "Charges/Index", props: {
      charges: serialize(charges, ChargeSerializer)
    }
  end
end
