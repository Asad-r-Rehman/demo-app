Rails.application.routes.draw do

  get '/activities', to: 'activity#new', as: 'activity'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
