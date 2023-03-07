class Post < ApplicationRecord
   has_many :replies, dependent: :destroy
   has_many :users, through: :replies
   has_one :creator_post, dependent: :destroy
   has_one :user, through: :creator_post

   validates :title, :body, :breed, :creator_id, presence: true
   validates :title, length: {maximum: 100}
end
