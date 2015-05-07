app.directive("myChart", function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$watch('showStockChart', function() {
        if (scope.showStockChart == true) {
          // show chart
          element.highcharts({
            chart: {
              type: 'area'
            },
            series: [{
              name: 'John',
              data: [5, 3, 4, 7, 2]
            }, {
              name: 'Jane',
              data: [2, -2, -3 , 2, 1]
            }, {
              name: 'Joe',
              data: [3, 4, 4, -2, 5]
            }]
          });
        } else {
          // delete chart
        }
      });
    }
  };
});