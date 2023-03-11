class GameQuestion < ApplicationRecord
    has_many :results
    has_many :results, through: :users 
end
