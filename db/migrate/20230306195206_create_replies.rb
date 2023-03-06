class CreateReplies < ActiveRecord::Migration[7.0]
  def change
    create_table :replies do |t|
      t.text :content
      t.integer :user_id
      t.integer :thread_id

      t.timestamps
    end
  end
end