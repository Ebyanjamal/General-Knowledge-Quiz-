Rails.application.routes.draw do
  resources :game_questions, only: [:index]
  resources :answers
  resources :users

  post "/signup", to: "users#create"
  
  get "/authorized", to: "users#show"

end
