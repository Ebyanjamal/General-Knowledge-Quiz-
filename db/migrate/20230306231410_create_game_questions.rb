class CreateGameQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :game_questions do |t|
      t.string :text
      t.string :correct_answers
      t.string :incorrect_answers

      t.timestamps
    end
  end
end
