class User < ApplicationRecord
    has_many :results
    has_many :game_question, through: :results
    has_secure_password

    validates :name, presence: true, uniqueness: true, length: {minimum:1}
end
