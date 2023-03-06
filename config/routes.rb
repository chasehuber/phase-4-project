Rails.application.routes.draw do
  resources :posts, only: [:index, :show, :create, :destroy]
  resources :replies, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create, :update, :destroy]

  get '/hello', to: 'application#hello_world'
end
