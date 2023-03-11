class GameQuestionsController < ApplicationController
    
    def index
        render json: GameQuestion.all
    end
end
