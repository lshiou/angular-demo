'use strict';

/**
 * @ngdoc directive
 * @name services
 * @description service for accessing the movie API
 */

angular.module('MovieApp', [
  'MovieApp.controllers',
  'MovieApp.services',
  'ngRoute'
]).

/* setting routes */
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when('/movies', {templateUrl: 'partials/welcome.html'}).  
	when('/movies/:id', {templateUrl: 'partials/movie.html', controller: 'movieController'}).
	otherwise({redirectTo: '/movies'});
}]);

;'use strict';

/**
 * @description   controllers module
 */
angular.module('MovieApp.controllers', []).

/**
 * @description   movies controller 
 */
controller('moviesController', function($scope, movieAPIservice) {
  $scope.moviesList = [];

  movieAPIservice.getMovies().success(function (response){
    console.log('get movies success');
  	$scope.moviesList = response.parts;
  });
}).

/**
 * @description   movie controller 
 */
controller('movieController', 
	function($scope, $routeParams, movieAPIservice) {
	//injected 'routeParams' service, for accessing url parameters

  $scope.id = $routeParams.id;
  $scope.credits = [];
  $scope.movie = null;
  $scope.baseUrl = movieAPIservice.getBaseUrl();
  $scope.suffixUrl = '&apikey=' + movieAPIservice.getKey();

  movieAPIservice.getMovieDetails($scope.id).success(function (response) {
      $scope.movie = response;
  });

  movieAPIservice.getMovieCredits($scope.id).success(function (response) {
      $scope.credits = response.cast; 
  }); 

  //construct the imgage path for profile picture of selected character
  $scope.openCast = function(path) {
    console.log('entered opencast.  path: '+ path);
    $scope.profilePic = $scope.baseUrl + path + $scope.suffixUrl;
  }
});






;'use strict';

/**
 * 
 * @description   service for accessing the movie API
 */
angular.module('MovieApp.services', []).
  factory('movieAPIservice', function($http) {

    var movieAPI = {};
    var apiKey = '939a3346ba15aa366521cb3895a528fd';

    /**
    * get list of movies of the specific collection
    */
    movieAPI.getMovies = function() {
      return $http({
        method: 'JSONP', 
        url: 'https://api.themoviedb.org/3/collection/528?api_key=' + apiKey + '&callback=JSON_CALLBACK'
      });
    }

    /**
    * get detail info of specific movie
    * @param {string} id    The id of the movie 
    */
    movieAPI.getMovieDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'https://api.themoviedb.org/3/movie/'+ id +'?api_key=' + apiKey + '&callback=JSON_CALLBACK'
      });
    }

    /**
    * get credit info of specific movie
    * @param {string} id    The id of the movie 
    */
    movieAPI.getMovieCredits = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'https://api.themoviedb.org/3/movie/'+ id +'/credits?api_key=' + apiKey + '&callback=JSON_CALLBACK'
      });
    }

    movieAPI.getKey = function(){
      return apiKey;
    }

    movieAPI.getBaseUrl = function(){
      return 'http://image.tmdb.org/t/p/w500';
    }

    return movieAPI;
  });

  