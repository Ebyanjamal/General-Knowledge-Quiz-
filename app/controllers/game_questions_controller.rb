class GameQuestionsController < ApplicationController
    # before_action :authorized_user, only: [:create, :update, :destroy]

    def index
        render json: GameQuestion.all
    end

    def show 
        question = GameQuestion.find(params[:id])
        render json: question, status: :ok
    end

    def create
        question = GameQuestion.create!(question_params)
        render json: question, status: :created
    end

    def update
        question = GameQuestion.find(params[:id])
        question.update!(question_params)
        render json: question, status: :ok
    end

    def destroy
        question = GameQuestion.find(params[:id])
        question.destroy
        head :no_content
    end
 


    private 

    def question_params
        params.permit(:text, :incorrect_answers, :correct_answers)
    end
end
