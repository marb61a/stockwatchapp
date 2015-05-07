require 'net/http'
require 'cs'

class StocksController < ApplicationController
  respond_to :json
  
  def index
    respond_with Stock.all
  end
  
  def create
    respond_with Stock.create(stock_params)
  end
  
  def update
    respond_with Stock.find(params[:id]).update_attributes(stock_params)
  end
  
  def destroy
    respond_with Stock.destroy(params[:id])
  end
  
  def ohlc
    stock = Stock.find(params[:stock_id])
    url = URI::parse "http://ichart.finance.yahoo.com/table.csv?s=" + stock.symbol + "&c=1962"
    req = Net::HTTP::get(url).gsub /"/, ''
    csv_format = CSV.parse(req, {converters: :numeric})
    csv_format = csv_format.drop(1)
    data = []
    csv_format.reverse.each do |entry|
      adjusted_ohlc_factor = entry[6].to_f / entry[4]
      data.push([entry[0],
                 adjusted_ohlc_factor * entry[1],
                 adjusted_ohlc_factor * entry[2],
                 adjusted_ohlc_factor * entry[3],
                 entry[6]
      ])
    end
    result = { "ohlc" => data }
    respond_with result
  end
    
  end
  
  private
  def stock_params
    params.require(:stock).permit(:symbol, :name, :bid, :ask, :year_low, :year_high)
  end
end


