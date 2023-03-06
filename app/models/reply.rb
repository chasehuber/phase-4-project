class Reply < ApplicationRecord
    belongs_to :user
    belongs_to :thread

    validates :content, presence: true
end
