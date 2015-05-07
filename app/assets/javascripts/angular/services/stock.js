app.factory('Stock', ['$resource', function($resource) {
  function Stock() {
    this.service = $resource('/api/stocks/:stockId', {stockId: '@id'}, {'update': { method: 'PUT' }});
  };
  
  Stock.prototype.all = function() {
    return this.service.query();
  };
  
  Stock.prototype.delete = function(stId) {
    return this.service.remove({stockId: stId});
  };
  
  Stock.prototype.create = function(attr){
    return this.service.save(attr);
  }
  
  Stock.prototype.update = function(attr) {
    return this.service.update(attr);
  };
  
  Stock.prototype.ohlc = function(stId) {
    return $resource('/api/stocks/:stockId/ohlc', {stockId: '@id'}).get({stockId: stId});
  }
  
  return new Stock;
}]);


 