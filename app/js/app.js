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

