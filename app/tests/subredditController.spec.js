"use strict";

describe("subreddit controller", function () {

  var $controller, $scope, subredditService, q, deferred;

  beforeEach(function() {

    subredditService = {
      getSubredditPostsTitles: function(subredditName) {
        deferred = q.defer();
        deferred.resolve(["Testing with Jasmine", "Testing with QUnit", "Testing with Mocha"]);
        return deferred.promise;
      }
    }
  });

  beforeEach(module("app"));

  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope, $q, _subredditService_) {

    // Create a new scope that's a child of the $rootScope
    $scope = $rootScope.$new();
    q = $q;

    // Create the controller
    $controller('subredditCtrl', {
      $scope: $scope,
      subredditService: subredditService
    });
  }));

  it('should create $scope.postsTitles when called',
    function() {
      $scope.$apply();
      expect($scope.postsTitles).toEqual(["Testing with Jasmine", "Testing with QUnit", "Testing with Mocha"]);
  });

});
