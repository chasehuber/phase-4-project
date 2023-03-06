class User < ApplicationRecord
    has_many :replies
    has_many :threads, through: :replies

    validates :user_name, :email, :password, presence: true
    validates :user_name, :email, uniqueness: true
    validates :email, length: { minimum: 4, maximum: 253 }
    validates :user_name, length: { minimum: 2}
    validates :bio, length: { maximum: 500 }
    validates :password, { in: 6..20 }

    # Possible email formatting, won't deploy with this in.
    # format: { with: /^(.+)@(.+)$/, message: "Email invalid"  },
end
