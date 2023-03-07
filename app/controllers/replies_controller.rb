class RepliesController < ApplicationController

    def show
        reply = find_reply
        render json: reply, status: :ok
    end

    def show_all
        post = Post.find_by!(id: params[:post_id])
        render json: post.replies, status: :ok
    end

    def create
        reply = Reply.create!(reply_params)
        render json: reply, status: :created
    end

    def destroy
        reply = find_reply
        reply.destroy!
        head :no_content
    end

    private

    def find_reply
        Reply.find(params[:id])
    end

    def reply_params
        params.permit(:content, :user_id, :post_id)
    end

end
