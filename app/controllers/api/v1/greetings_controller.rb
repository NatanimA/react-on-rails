class Api::V1::GreetingsController < ApplicationController
  def index
    count = Greeting.count
    random_offset = rand(count)
    @random_greetings = Greeting.offset(random_offset).first
    render json: {message:"Success",data:@random_greetings,status:200}
  end
end
