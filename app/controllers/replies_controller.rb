class RepliesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

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
        params.permit(:content, :user_id, :post_id).with_defaults(user_id: session[:user_id])
    end

    def render_unprocessable_entity_response(error)
        render json: { errors: "Please type your reply before submitting." }, status: :unprocessable_entity
    end

end
