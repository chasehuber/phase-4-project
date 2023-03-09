class UsersController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    skip_before_action :authorized, only: :create
    def index
        users = User.all
        render json: users, status: :ok
    end

    def find_current_user
        current_user = User.find(session[:user_id])
        render json: current_user, status: :ok
    end

    def show
        user = find_user
        render json: user, serializer: ProfileSerializer, status: :ok
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        user = find_user
        user.destroy!
        head :no_content
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user, status: :accepted
    end


    private
    
    def find_user
        User.find_by!(id: params[:id])
    end

    def user_params
        params.permit(:user_name, :first_name, :last_name, :full_name, :email, :password, :bio, :password_confirmation)
    end

    # def render_not_found_response(error)
    #     render json: { errors:  {error.model => "Incorrect username or password"} }, status: :not_found
    # end

    # def render_unprocessable_entity_response(error)
    #     render json: { errors: {error.model => "hey there"} }, status: :unprocessable_entity
    # end
end
