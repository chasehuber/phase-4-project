class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts, status: :ok
    end

    def show
        post = find_post
        render json: post, status: :ok
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def destroy
        post = find_post
        post.destroy!
        head :no_content
    end


    private
    
    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:title, :body, :tags, :creator_id)
    end
end