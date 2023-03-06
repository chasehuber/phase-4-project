class User < ApplicationRecord
    has_many :replies
    has_many :threads, through: :replies

    validates :user_name, :email, :password, presence: true
    validates :user_name, :email, uniqueness: true
    validates :email, format: { with: /^(.+)@(.+)$/, message: "Email invalid"  },
        length: { minimum: 4, maximum: 254 }
    validates :user_name, length: { minimum: 2}
    validates :bio, lenth: { maximum: 500 }
    validates :password, { in: 6..20 }
end
