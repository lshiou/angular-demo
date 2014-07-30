'use strict';

/* moviesController unit test */
describe('Controller: moviesController', function () {

  // load the app's module
  beforeEach(module('MovieApp'));

  // Then we create some variables we're going to use
  var moviesController, scope;
  var apikey = '939a3346ba15aa366521cb3895a528fd';

  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {

    // create a mock scope variable, to replace the actual $scope variable
    // the controller would take as parameter
    scope = $rootScope.$new();

    // create an $httpBackend instance.
    var httpMock = $httpBackend;

    // set the httpBackend standard reponse to the URL the controller is
    // supposed to retrieve from the API

    httpMock.expectJSONP(
    "https://api.themoviedb.org/3/collection/1241?api_key=" + apikey + "&callback=JSON_CALLBACK").respond(
      {
         "id":1241,
         "name":"Harry Potter Collection",
         "overview":"The Harry Potter films are a fantasy series based on the series of seven Harry Potter novels by British writer J. K. Rowling.",
         "poster_path":"/fuWOg0iLKPRGTlg7lq4tWDBt5tu.jpg",
         "backdrop_path":"/tpDcuXZGqEoU6CxuJ7e4S2NTIoS.jpg",
         "parts":[
            {
               "title":"Harry Potter and the Philosopher's Stone",
               "id":671,
               "release_date":"2001-11-14",
               "poster_path":"/uLGaJ9FgPWf7EUgwjp9RTmHemw8.jpg",
               "backdrop_path":"/uD93T339xX1k3fnDUaeopZBiajY.jpg"
            },
            {
               "title":"Harry Potter and the Chamber of Secrets",
               "id":672,
               "release_date":"2002-11-03",
               "poster_path":"/xyWKIBq7EVSIXEdxLi9hJWopz4J.jpg",
               "backdrop_path":"/avqzwKn89VetTEvAlBePt3Us6Al.jpg"
            },
            {
               "title":"Harry Potter and the Goblet of Fire",
               "id":674,
               "release_date":"2005-11-05",
               "poster_path":"/6sASqcdrEHXxUhA3nFpjrRecPD2.jpg",
               "backdrop_path":"/gzKW3emulMxIHzuXxZoyDB1lei9.jpg"
            },
            {
               "title":"Harry Potter and the Half-Blood Prince",
               "id":767,
               "release_date":"2009-07-07",
               "poster_path":"/bFXys2nhALwDvpkF3dP3Vvdfn8b.jpg",
               "backdrop_path":"/mjBjhotXUWc0EFZ5sswu7cu12Sp.jpg"
            },
            {
               "title":"Harry Potter and the Deathly Hallows: Part 2",
               "id":12445,
               "release_date":"2011-07-07",
               "poster_path":"/7xmtxRc9nQnCuWINuTT4SMP5NJc.jpg",
               "backdrop_path":"/oPmZDHPkdmhuvxYGmwtKcQefeNr.jpg"
            },
            {
               "title":"Harry Potter and the Prisoner of Azkaban",
               "id":673,
               "release_date":"2004-05-31",
               "poster_path":"/qMn0YCWKxt7xg8nqRnRj2Ei9qgx.jpg",
               "backdrop_path":"/wWdlIBxn9xCmySxnSWtI2BjZZkF.jpg"
            },
            {
               "title":"Harry Potter and the Order of the Phoenix",
               "id":675,
               "release_date":"2007-07-03",
               "poster_path":"/lmYmoXVzVrTadfXHZ3v1ySqA1fn.jpg",
               "backdrop_path":"/gGt4ePOhD8ilxd3FYhKB06L2CyG.jpg"
            },
            {
               "title":"Harry Potter and the Deathly Hallows: Part 1",
               "id":12444,
               "release_date":"2010-11-19",
               "poster_path":"/6aEW544qOWoW2h3eQm2zqEzPISO.jpg",
               "backdrop_path":"/8YA36faYlkpfp6aozcGsqq68pZ9.jpg"
            }
         ]
      }
    );

/*

    httpMock.expectJSONP(
    "https://api.themoviedb.org/3/collection/528?api_key=" + apikey + "&callback=JSON_CALLBACK").respond(
      {  
         "id":528,
         "name":"The Terminator Collection",
         "overview":"The Terminator Collection includes the theatrically released science-fiction films about the futuristic conflict between the humans led by John Connor and the cyborgs that are made and controlled by Skynet, a self-aware super computer that started Armageddon and may indeed end humanity for good.  Films included are the original Terminator series (1-3) starring Arnold Schwarzenegger and the fourth installment, 2009's Terminator Salvation starring Christian Bale as an adult John Connor.",
         "poster_path":"/xsRbnABGAPJafKR479ppTHJfB9N.jpg",
         "backdrop_path":"/tP1SCFnlYTHSMqp1yuFDVTQeLUD.jpg",
         "parts":[  
            {  
               "title":"The Terminator",
               "id":218,
               "release_date":"1984-10-26",
               "poster_path":"/q8ffBuxQlYOHrvPniLgCbmKK4Lv.jpg",
               "backdrop_path":"/6yFoLNQgFdVbA8TZMdfgVpszOla.jpg"
            },
            {  
               "title":"Terminator 2: Judgment Day",
               "id":280,
               "release_date":"1991-07-01",
               "poster_path":"/2y4dmgWYRMYXdD1UyJVcn2HSd1D.jpg",
               "backdrop_path":"/d9AqtruwS8nljKjL5aYzM42hQJr.jpg"
            },
            {  
               "title":"Terminator 3: Rise of the Machines",
               "id":296,
               "release_date":"2003-06-30",
               "poster_path":"/lz4xYdF1n09lyiCfZWtWT44SZiG.jpg",
               "backdrop_path":"/3rzNUtYuFzN5qmiIMswDGz4RJfz.jpg"
            },
            {  
               "title":"Terminator Salvation",
               "id":534,
               "release_date":"2009-05-20",
               "poster_path":"/hxDfhavtxA2Ayx7O9BsQMcZRdG0.jpg",
               "backdrop_path":"/lr125x2Fy5O4AN07NGxyJlp5LC8.jpg"
            },
            {  
               "title":"Terminator: Genesis",
               "id":87101,
               "release_date":"2015-07-01",
               "poster_path":"/gYgDtbb8Suh8UBHLmbl6Z92iij7.jpg",
               "backdrop_path":null
            }
         ]
      }
    );
*/

    //initialize our controller, passing the mock scope as parameter
    moviesController = $controller('moviesController', {
      $scope: scope
    });

    //flush httpBackend 
    httpMock.flush();

  }));


  // Test if the controller is actually retrieving the movie list
/*  it('should return a list with 5 movies', function () {
    expect(scope.moviesList.length).toBe(5);
  });
*/
  it('should return a list with 8 movies', function () {
    expect(scope.moviesList.length).toBe(8);
  });

  // Test if the title attributes match against the expected values
/*  
  it('should retrieve the title of the movies', function () {
    expect(scope.moviesList[0].title).toBe("The Terminator");
    expect(scope.moviesList[1].title).toBe("Terminator 2: Judgment Day");
    expect(scope.moviesList[2].title).toBe("Terminator 3: Rise of the Machines");
  });
*/

  it('should retrieve the title of the movies', function () {
    expect(scope.moviesList[0].title).toBe("Harry Potter and the Philosopher's Stone");
    expect(scope.moviesList[1].title).toBe("Harry Potter and the Chamber of Secrets");
    expect(scope.moviesList[2].title).toBe("Harry Potter and the Goblet of Fire");
  });

});







