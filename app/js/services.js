'use strict';

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
        url: 'https://api.themoviedb.org/3/collection/1241?api_key=' + apiKey + '&callback=JSON_CALLBACK'
        //url: 'https://api.themoviedb.org/3/collection/10?api_key=' + apiKey + '&callback=JSON_CALLBACK'
        //url: 'https://api.themoviedb.org/3/collection/528?api_key=' + apiKey + '&callback=JSON_CALLBACK'

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

  