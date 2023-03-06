Rails.application.routes.draw do
  resources :threads, only: [:index, :show, :create, :destroy]
  resources :replies, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create, :update, :destroy]

end
