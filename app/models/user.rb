class User < ApplicationRecord
    has_secure_password

    has_many :replies
    has_many :posts, through: :replies
    has_many :creator_posts
    has_many :posts, through: :creator_posts

    validates :user_name, presence: true, uniqueness: true, length: { minimum: 2}
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :bio, length: { maximum: 500 }
    VALID_EMAIL_REGEX= /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i
    validates :email , presence: true, uniqueness:{case_sensetive:false},
    format:{with:VALID_EMAIL_REGEX,multiline:true}
    validates :password, presence: true, length: { in: 6..20 }

    # Possible email formatting, won't deploy with this in.
    # format: { with: /^(.+)@(.+)$/, message: "Email invalid"  },
end
