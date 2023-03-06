class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :password, :email, :photo, :bio, :first_name, :last_name
end
