class ReplySerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :thread_id
end
