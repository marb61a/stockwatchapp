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
  
  return new Stock;
}]);


 