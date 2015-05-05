/*app.controller('StocksCtrl', ['$scope', '$resource', function($scope, $resource) {
  var Stocks = $resource('/api/stocks');
  $scope.stocks = Stocks.query();
}]);*/

// Better than above as it allows for easier extension by stock.js modification 
app.controller('StocksCtrl', ['$scope', 'Stock', '$filter', '$http', function($scope, Stock, $filter, $http) {
  $scope.stocks = Stock.all();
  $scope.error = false;
  
  $scope.select2Options = {
    // add options here
  };
  
  $scope.stocklist = [{symbol: "AAPL", name: "Apple Inc"},
                      {symbol: "MSFT", name: "Microsoft Inc"}]
  
  $scope.$watch('newCompany', function() {
    if ($scope.newCompany != "" && $scope.newCompany != null) {
      $scope.createStock();
    }
  });

  $scope.createStock = function(){
    var attr = {};
    attr.symbol = $filter('uppercase')($scope.newSymbol);
    $http({ethod: 'GET', url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20WHERE%20symbol%3D" + "'"     + attr.symbol + "'" + "&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"}).success(function(data,           status, headers, config){
       $scope.error = false;
       attr.name = data.query.results.quote["Name"];
       attr.bid = data.query.results.quote["Bid"];
       attr.ask = data.query.results.quote["Ask"];
       attr.year_low = data.query.results.quote["YearLow"];
       attr.year_high = data.query.results.quote["YearHigh"];
       var newStock = Stock.create(attr);
       $scope.stocks.push(newStock);
       $scope.newCompany = "";
       $scope.newSymbol = "";
    }).error(function(data, status, headers, config){
        $scope.error = true;
        $scope.loading = false;
    });
  };
  
  $scope.deleteStock = function(id, idx) {
    $scope.stocks.splice(idx, 1);
    return Stock.delete(id);
  };
  
}]);

  
 
