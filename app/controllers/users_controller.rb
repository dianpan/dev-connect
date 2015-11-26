class UsersController < ApplicationController
  def show
    @user = User.fidn(params[:id])
  end
end
