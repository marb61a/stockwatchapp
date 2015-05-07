app.directive("myChart", function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$watch('showStockChart', function() {
        if (scope.showStockChart == true) {
          scope.loadingChart = true;
          var ohlc = [];
          scope.requestOHLC(scope.$eval(attrs.stockid)).$promise.then(function(res){
            ohlc = res.ohlc;
            angular.forEach(ohlc, function(value, index) {
              ohlc[index][0] = Date.parse(value[0]);
            });
            element.highcharts('StockChart', {
              rangeSelector: {
                selected: 2
              },
              title: {
                text: scope.$eval(attrs.stockname)
              },
              xAxis: {
                type: 'datetime'
              },
              series: [{
                type: 'candlestick',
                name: scope.$eval(attrs.stocksymbol),
                data: ohlc,
                dataGrouping: {
                  units: [[
                         'day',
                         [1]
                  ], [
                         'week',
                         [1]
                  ], [
                         'month',
                         [1,2,3,4,6]
                  ]]
                }
              }]
            });
          });
          scope.loadingChart = false;
        }
      });
    }
  };
});