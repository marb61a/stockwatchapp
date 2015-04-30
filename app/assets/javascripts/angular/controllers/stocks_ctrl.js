/*app.controller('StocksCtrl', ['$scope', '$resource', function($scope, $resource) {
  var Stocks = $resource('/api/stocks');
  $scope.stocks = Stocks.query();
}]);*/

// Better than above as it allows for easier extension by stock.js modification 
app.controller('StocksCtrl', ['$scope', 'Stock', function($scope, Stock) {
  $scope.stocks = Stock.all();
  
  $scope.deleteStock = function(id, idx) {
    $scope.stocks.splice(idx, 1);
    return Stock.delete(id);
  };
  
}]);

