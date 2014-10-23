
app.directive('subredditHeader', function() {
    return {
      restrict: 'E',
      scope: {
        text: '@'
      },
      templateUrl: 'app/templates/cycleRelatedSubredditHeaderTmpl.html'
    }
  });



// angular.module('components', [])
// 	.directive('sayHi', function() {
// 		return {
// 			restrict: 'E',
// 			scope: {
// 				name: '@'
// 			},
// 			templateUrl: 'templates/tmplSayHi.html'
// 		}
// 	})
