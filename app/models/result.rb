class Result < ApplicationRecord
    belongs_to :user 
    belongs_to :game_question 
end
