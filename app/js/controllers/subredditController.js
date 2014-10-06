app.controller('subredditCtrl', function($scope, subredditService) {

	subredditService.getSubredditPostsTitles("bicycling").then(function(postsTitles) {
	  $scope.postsTitles = postsTitles;
	});

})
