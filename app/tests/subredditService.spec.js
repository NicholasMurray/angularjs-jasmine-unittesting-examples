"use strict";

describe("subreddit api service", function () {

  var subredditService, httpBackend;

  beforeEach(module("app"));

  beforeEach(inject(function (_subredditService_, _$httpBackend_) {
    subredditService = _subredditService_;
    httpBackend = _$httpBackend_;
  }));

  it("should do something", function () {
    httpBackend.whenGET("http://www.reddit.com/r/testing/.json").respond({
        data: {
          children: [
            {
              data: {
                "title":"Testing with Jasmine",
              }
            },
            {
              data: {
                "title":"Testing with QUnit",
              }
            },
            {
              data: {
                "title":"Testing with Mocha",
              }
            }
          ]
        }
    });
    subredditService.getSubredditPostsTitles("testing").then(function(postsTitles) {
      expect(postsTitles).toEqual(["Testing with Jasmine", "Testing with QUnit", "Testing with Mocha"]);
    });
    httpBackend.flush();
  });

});
