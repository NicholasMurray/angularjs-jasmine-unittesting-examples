app.controller('subredditCtrl', function($scope, subredditService) {

	var defaultSubreddit = "bicycling";
	var selectedSubreddit = defaultSubreddit;
	var callSubredditService = function() {
		subredditService.getSubredditPostsTitles(selectedSubreddit).then(function(postsTitles) {
			$scope.postsTitles = postsTitles;
		});
	}

	// onchange
	$scope.changed = function() {
			selectedSubreddit = $scope.subreddits;
			callSubredditService();
	}

	// default
	callSubredditService();

})
