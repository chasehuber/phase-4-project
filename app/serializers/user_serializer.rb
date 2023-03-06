class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :photo, :bio
end
