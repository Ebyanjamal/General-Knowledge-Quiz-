Rails.application.routes.draw do
  resources :game_questions, only: [:index, :show, :create, :update, :destroy]
  resources :answers
  resources :users




  post "/signup", to: "users#create"

  post '/login', to: 'sessions#create'

  delete 'logout', to: 'sessions#destroy'

  get "/me", to: "users#show"

  get "/authorized", to: "users#show"

end
