class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :password, :email, :bio, :first_name, :last_name
  
  has_many :posts, through: :creator_posts
end
