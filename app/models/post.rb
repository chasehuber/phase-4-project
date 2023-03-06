class Thread < ApplicationRecord
   has_many :replies
   has_many :users, through: :replies

   validates :title, :body, presence: true
   validates :title, length: {maximum: 100}
   validates :body, length: {minimum: 1}
end
