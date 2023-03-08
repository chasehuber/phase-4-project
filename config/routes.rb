Rails.application.routes.draw do

  resources :posts, only: [:index, :show, :create, :destroy]
  resources :users, except: [:new, :edit]

  get '/auth', to: 'users#find_current_user'

  get '/posts/:post_id/replies', to: 'replies#show_all'
  post '/posts/:post_id/replies', to: 'replies#create'
  delete '/posts/:post_id/replies/:id', to: 'replies#destroy'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
