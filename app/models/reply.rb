class Reply < ApplicationRecord
    belongs_to :user
    belongs_to :post

    validates :content, :user_id, :post_id, presence: true
end
