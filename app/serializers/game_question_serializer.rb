class GameQuestionSerializer < ActiveModel::Serializer
  attributes :id, :text, :correct_answers, :incorrect_answers
end
