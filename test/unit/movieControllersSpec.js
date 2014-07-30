'use strict';

/* movieController unit test */
describe('Controller: movieController', function () {

  // load the app's module
  beforeEach(module('MovieApp'));

  // Then we create some variables we're going to use
  var movieController, scope;
  var apikey = '939a3346ba15aa366521cb3895a528fd';

  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $routeParams) {

    // create a mock scope variable, to replace the actual $scope variable
    // the controller would take as parameter
    scope = $rootScope.$new();

    var routeParams = $routeParams;
    routeParams.id = "296";

    // create an $httpBackend instance.
    var httpMock = $httpBackend;

    // set the httpBackend standard reponse to the URL the controller is
    // supposed to retrieve from the API
    httpMock.expectJSONP(
    "https://api.themoviedb.org/3/movie/296?api_key=939a3346ba15aa366521cb3895a528fd&callback=JSON_CALLBACK").respond(
      {
         "adult":false,
         "backdrop_path":"/3rzNUtYuFzN5qmiIMswDGz4RJfz.jpg",
         "belongs_to_collection":{
            "id":528,
            "name":"The Terminator Collection",
            "poster_path":"/xsRbnABGAPJafKR479ppTHJfB9N.jpg",
            "backdrop_path":"/tP1SCFnlYTHSMqp1yuFDVTQeLUD.jpg"
         },
         "budget":200000000,
         "genres":[
            {
               "id":28,
               "name":"Action"
            },
            {
               "id":878,
               "name":"Science Fiction"
            },
            {
               "id":53,
               "name":"Thriller"
            }
         ],
         "homepage":"http://www.terminator-3.de/",
         "id":296,
         "imdb_id":"tt0181852",
         "original_title":"Terminator 3: Rise of the Machines",
         "overview":"It's been 10 years since John Connor saved Earth from Judgment Day, and he's now living under the radar, steering clear of using anything Skynet can trace. That is, until he encounters T-X, a robotic assassin ordered to finish what T-1000 started. Good thing Connor's former nemesis, the Terminator, is back to aid the now-adult Connor … just like he promised.",
         "popularity":8.92075042507234,
         "poster_path":"/lz4xYdF1n09lyiCfZWtWT44SZiG.jpg",
         "production_companies":[
            {
               "name":"Intermedia Films",
               "id":763
            },
            {
               "name":"IMF Internationale Medien und Film GmbH & Co. 3. Produktions KG",
               "id":19116
            },
            {
               "name":"C-2 Pictures",
               "id":7340
            },
            {
               "name":"Mostow/Lieberman Productions",
               "id":23636
            }
         ],
         "production_countries":[
            {
               "iso_3166_1":"DE",
               "name":"Germany"
            },
            {
               "iso_3166_1":"GB",
               "name":"United Kingdom"
            },
            {
               "iso_3166_1":"US",
               "name":"United States of America"
            }
         ],
         "release_date":"2003-06-30",
         "revenue":435000000,
         "runtime":109,
         "spoken_languages":[
            {
               "iso_639_1":"en",
               "name":"English"
            }
         ],
         "status":"Released",
         "tagline":"The Machines Will Rise.",
         "title":"Terminator 3: Rise of the Machines",
         "vote_average":5.7,
         "vote_count":558
      }
    );


    httpMock.expectJSONP(
      "https://api.themoviedb.org/3/movie/296/credits?api_key=939a3346ba15aa366521cb3895a528fd&callback=JSON_CALLBACK").respond(      
  {
   "id":296,
   "cast":[
      {
         "cast_id":6,
         "character":"Terminator",
         "credit_id":"52fe4233c3a36847f800bca9",
         "id":1100,
         "name":"Arnold Schwarzenegger",
         "order":0,
         "profile_path":"/dulCsiwzZihFGmjtGA6p0yDWEN1.jpg"
      },
      {
         "cast_id":7,
         "character":"John Connor",
         "credit_id":"52fe4233c3a36847f800bcad",
         "id":6408,
         "name":"Nick Stahl",
         "order":1,
         "profile_path":"/2QYVx2D71lY2MfRbluC8PPyLMlH.jpg"
      },
      {
         "cast_id":8,
         "character":"Kate Brewster",
         "credit_id":"52fe4234c3a36847f800bcb1",
         "id":6194,
         "name":"Claire Danes",
         "order":2,
         "profile_path":"/lz16Z3yR8JFwt9nCJP2JJE2o3zq.jpg"
      },
      {
         "cast_id":9,
         "character":"T-X",
         "credit_id":"52fe4234c3a36847f800bcb5",
         "id":7218,
         "name":"Kristanna Loken",
         "order":3,
         "profile_path":"/rxeYONGXlnNYOn50KjjiwgLxiGX.jpg"
      },
      {
         "cast_id":10,
         "character":"Robert Brewster",
         "credit_id":"52fe4234c3a36847f800bcb9",
         "id":7219,
         "name":"David Andrews",
         "order":4,
         "profile_path":"/pxmxn29UHW9r6uvLrd7bEwLswlQ.jpg"
      },
      {
         "cast_id":11,
         "character":"Scott Petersen",
         "credit_id":"52fe4234c3a36847f800bcbd",
         "id":7220,
         "name":"Mark Famiglietti",
         "order":5,
         "profile_path":"/7Ypq73G7xZzVHLzN8nDi76bEBSP.jpg"
      },
      {
         "cast_id":12,
         "character":"Dr. Peter Silberman",
         "credit_id":"52fe4234c3a36847f800bcc1",
         "id":2716,
         "name":"Earl Boen",
         "order":6,
         "profile_path":"/haOeh8ZWSjD9PgQvWqvQIHfXK5A.jpg"
      },
      {
         "cast_id":13,
         "character":"Betsy",
         "credit_id":"52fe4234c3a36847f800bcc5",
         "id":7221,
         "name":"Moira Harris",
         "order":7,
         "profile_path":"/nhtDA9vLKqg2KnEjw9UgOuz2tMO.jpg"
      },
      {
         "cast_id":14,
         "character":"Chief Engineer",
         "credit_id":"52fe4234c3a36847f800bcc9",
         "id":7222,
         "name":"Chopper Bernet",
         "order":8,
         "profile_path":"/hu7LbfGGZlEyOfRC2X9ieaejkH9.jpg"
      },
      {
         "cast_id":15,
         "character":"Brewser's Aide",
         "credit_id":"52fe4234c3a36847f800bccd",
         "id":7223,
         "name":"Christopher Lawford",
         "order":9,
         "profile_path":"/xxc1WjJAajXWJog51i2Uh7MvlIN.jpg"
      },
      {
         "cast_id":16,
         "character":"Bill's Girlfriend",
         "credit_id":"52fe4234c3a36847f800bcd1",
         "id":7226,
         "name":"Alana Curry",
         "order":10,
         "profile_path":"/aVauHVaeq7etScIzH4dhkA8cxbc.jpg"
      }
   ],
   "crew":[
      {
         "credit_id":"537b1c300e0a267ff7001330",
         "department":"Costume & Make-Up",
         "id":3995,
         "job":"Makeup Department Head",
         "name":"Jeff Dawn",
         "profile_path":null
      },
      {
         "credit_id":"537b1c5a0e0a267ff7001333",
         "department":"Costume & Make-Up",
         "id":1319193,
         "job":"Costume Supervisor",
         "name":"Donna Marcione Pollack",
         "profile_path":null
      },
      {
         "credit_id":"537b1cb9c3a3685e41001597",
         "department":"Costume & Make-Up",
         "id":6924,
         "job":"Costume Supervisor",
         "name":"Dan Moore",
         "profile_path":null
      },
      {
         "credit_id":"52fe4233c3a36847f800bc99",
         "department":"Directing",
         "id":7213,
         "job":"Director",
         "name":"Jonathan Mostow",
         "profile_path":"/gwB4cFuPm2y4sjaRG1Su8keKzu.jpg"
      },
      {
         "credit_id":"52fe4233c3a36847f800bc9f",
         "department":"Writing",
         "id":7214,
         "job":"Screenplay",
         "name":"John D. Brancato",
         "profile_path":null
      },
      {
         "credit_id":"52fe4233c3a36847f800bca5",
         "department":"Writing",
         "id":7215,
         "job":"Screenplay",
         "name":"Michael Ferris",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bcd7",
         "department":"Production",
         "id":7227,
         "job":"Producer",
         "name":"Hal Lieberman",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bcdd",
         "department":"Production",
         "id":7228,
         "job":"Producer",
         "name":"Joel B. Michaels",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bce3",
         "department":"Production",
         "id":3986,
         "job":"Producer",
         "name":"Mario Kassar",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bce9",
         "department":"Sound",
         "id":7229,
         "job":"Original Music Composer",
         "name":"Marco Beltrami",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bcef",
         "department":"Camera",
         "id":36,
         "job":"Director of Photography",
         "name":"Don Burgess",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bcf5",
         "department":"Editing",
         "id":7230,
         "job":"Editor",
         "name":"Nicolas De Toth",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bcfb",
         "department":"Editing",
         "id":7231,
         "job":"Editor",
         "name":"Neil Travis",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd01",
         "department":"Production",
         "id":7232,
         "job":"Casting",
         "name":"Sarah Finn",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd07",
         "department":"Art",
         "id":7233,
         "job":"Production Design",
         "name":"Jeff Mann",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd0d",
         "department":"Art",
         "id":7234,
         "job":"Art Direction",
         "name":"Shepherd Frankel",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd13",
         "department":"Art",
         "id":7235,
         "job":"Art Direction",
         "name":"Beat Frutiger",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd19",
         "department":"Art",
         "id":7236,
         "job":"Art Direction",
         "name":"Andrew Menzies",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd1f",
         "department":"Art",
         "id":7237,
         "job":"Set Decoration",
         "name":"Jay Hart",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd25",
         "department":"Costume & Make-Up",
         "id":7238,
         "job":"Costume Design",
         "name":"April Ferry",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd2b",
         "department":"Sound",
         "id":1305,
         "job":"Music Editor",
         "name":"Bill Abbott",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd31",
         "department":"Sound",
         "id":7239,
         "job":"Sound Effects Editor",
         "name":"Peter Brown",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd37",
         "department":"Sound",
         "id":7240,
         "job":"Boom Operator",
         "name":"Cary Weitz",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd3d",
         "department":"Production",
         "id":56967,
         "job":"Producer",
         "name":"Andrew G. Vajna",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd43",
         "department":"Production",
         "id":1282435,
         "job":"Producer",
         "name":"Colin Wilson",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd49",
         "department":"Writing",
         "id":7214,
         "job":"Story",
         "name":"John D. Brancato",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd4f",
         "department":"Writing",
         "id":7215,
         "job":"Story",
         "name":"Michael Ferris",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd55",
         "department":"Writing",
         "id":7217,
         "job":"Story",
         "name":"Tedi Sarafian",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd5b",
         "department":"Writing",
         "id":2710,
         "job":"Characters",
         "name":"James Cameron",
         "profile_path":"/6Zk8h1XsPGKUM8M8cKUHAnmnc8O.jpg"
      },
      {
         "credit_id":"52fe4234c3a36847f800bd61",
         "department":"Writing",
         "id":869,
         "job":"Characters",
         "name":"Gale Anne Hurd",
         "profile_path":"/oRWGpXdIm2lu870aaKpgO3wy19n.jpg"
      },
      {
         "credit_id":"52fe4234c3a36847f800bd67",
         "department":"Crew",
         "id":60261,
         "job":"Makeup Effects",
         "name":"Stan Winston",
         "profile_path":"/bs8iaDGeDg0vHw4GLcT7A2nAJbb.jpg"
      },
      {
         "credit_id":"52fe4234c3a36847f800bd6d",
         "department":"Crew",
         "id":1287739,
         "job":"Makeup Effects",
         "name":"John Rosengrant",
         "profile_path":null
      },
      {
         "credit_id":"52fe4234c3a36847f800bd73",
         "department":"Crew",
         "id":229811,
         "job":"Makeup Effects",
         "name":"Arjen Tuiten",
         "profile_path":null
      }
   ]
}
    );

    //initialize our controller, passing the mock scope as parameter
    movieController = $controller('movieController', {
      $scope: scope,
      $routeParams : routeParams
    });

    //flush httpBackend 
    httpMock.flush();

  }));


  // Test if the controller is actually retrieving the correct movie title
  it('should return the correct title', function () {
    expect(scope.movie.original_title).toBe("Terminator 3: Rise of the Machines");
  });

  // Test if the title attributes match against the expected values
  it('should retrieve correct actor', function () {
    expect(scope.credits[0].name).toBe("Arnold Schwarzenegger");
  });

});







