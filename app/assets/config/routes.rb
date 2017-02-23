Rails.application.routes.draw do
   # get '/api/v1/items.json'

   # root '/api/v1/items.json'

 namespace :api do
 namespace :v1 do
get resources :items, only: [:index, :create, :destroy, :update]
end
end
end
# Rails.application.routes.draw do
#   get 'welcome/index'

#   root 'welcome#index'
# end
# Rails.application.routes.draw do
#   api_version(module: 'V1', header: { name: 'Accept', value: 'application/hasl+json; version=1', default: true }) do
#     resources :feedbacks, only: [:create]
#   end
# end
