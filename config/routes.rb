Rails.application.routes.draw do
root to: 'site#index' do
namespace :api, constraints: {format: 'json'} do
namespace :v1 do
resources :items, only: [:index, :create, :destroy, :update]
end
end
end
end
