app.service("subredditService",
 function($http) {
  return {
    getSubredditPostsTitles: function(subredditName) {
      return $http.get("http://www.reddit.com/r/" +  subredditName + "/.json").then(function(response) {
        var posts;
        var postsTitles = [];
        posts = response.data.data.children;

        for (var i = 0; i < posts.length; i++) {
          postsTitles.push(posts[i].data.title);
        }
        
        return postsTitles;
      });
    }
  };
});
