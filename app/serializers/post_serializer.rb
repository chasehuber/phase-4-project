class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :breed, :creator_id

  has_many :replies
end
