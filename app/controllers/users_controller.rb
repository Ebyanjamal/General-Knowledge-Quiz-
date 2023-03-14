class UsersController < ApplicationController
# skip_before_action :authenticated, only: [:new, :create]

def index 
render json: User.all
end

def show
  user = User.find(params[:id])
  render json: user, status: :ok 
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
