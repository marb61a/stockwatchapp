class DerivativesController < ApplicationController
  respond_to :json

 def index
    res = Derivative.where('name like ?', "%#{params[:q]}%").map { |r| {id: r.id, text: r.name, symbol: r.symbol} }
    respond_with res
 end

end