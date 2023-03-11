class SessionsController < ApplicationController
    

    def create 
        user = User.create!(user_params)
        if user.valid?
         session[:user_id] = user.id
           render json: user, status: :created
        else
         render json: {error: "Invalid Username and/or Password"}, status: :unauthorized
     end
     

    def destroy
        session.delete :user_id
        head :no_content
    end
end