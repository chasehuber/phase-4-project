class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :password, :email, :bio, :first_name, :last_name

end
