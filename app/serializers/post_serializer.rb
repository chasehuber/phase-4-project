class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :tags, :user_id
end
