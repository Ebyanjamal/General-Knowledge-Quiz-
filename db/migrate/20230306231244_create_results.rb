class CreateResults < ActiveRecord::Migration[7.0]
  def change
    create_table :results do |t|
      t.integer :question_id
      t.integer :user_id
      t.integer :points

      t.timestamps
    end
  end
end
