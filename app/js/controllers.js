'use strict';

/**
 * @description   controllers module
 */
angular.module('MovieApp.controllers', []).

/**
 * @description   movies controller 
 */
controller('moviesController', function($scope, movieAPIservice) {
  $scope.moviesList = [];
  $scope.baseUrl = movieAPIservice.getBaseUrl();
  $scope.suffixUrl = '&apikey=' + movieAPIservice.getKey();

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






