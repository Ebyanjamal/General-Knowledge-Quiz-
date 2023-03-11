class UsersController < ApplicationController
# skip_before_action :authenticated, only: [:new, :create]

def index 
render json: User.all
end

def show 
user = User.find( id: session[:user_id])
if user 
render json: user, status: :ok 
else
    render json: {error: "Not Authorized"}, state: :unauthorized
end


def create 
   user = User.create!(user_params)
   render json: user, status: :created
   
end


private 

    def user_params 
        params.permit( :name, :email, :password)
    end
end
