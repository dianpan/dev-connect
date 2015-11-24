class ProfilesController < ApplicationController
  def new
    @user = User.find(params[:user_id])
# we can use the build_profile method because the association has been created btwn users and profiles
    @profile = @user.build_profile
  end
end
