Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  resource :session, only: [ :new, :create, :destroy ]
  resources :passwords, param: :token, only: [ :new, :create, :edit, :update ]
  resources :precious_gems, only: [ :index, :show ] do
    member do
      post "checkout"
      post "stripe_checkout"
    end
  end
  resources :charges, only: [ :index ]

  root to: "precious_gems#index"
end
