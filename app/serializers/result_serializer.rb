class ResultSerializer < ActiveModel::Serializer
  attributes :id, :question_id, :user_id, :points
end
