// angular.module('Login',[]);

var app = angular.module("mainApp", ["ngRoute"]);

 angular.element(function() {
      angular.bootstrap(document, ['mainApp']);
    });

app.factory("userService", function () {
  var addUser = {};
  addUser.add = function (msgs, message) {
    msgs.push(message);
    return msgs;
  };

  addUser.getLength = function (msgs) {
    return msgs.length;
  };
  return addUser;
});

app.config(function ($routeProvider, $locationProvider) {
  //  $locationProvider.html5Mode(true);

  $routeProvider
    .when("/", {
      //controller:'homeController',
      templateUrl: "./header/header.html",
    })
    .when("/login", {
      controller: "loginController",
      templateUrl: "./login/login.html",
    })
    .when("/home", {
      templateUrl: "./header/home.html",
      // controller:'homecontroller'
    })
    .when("/user", {
      templateUrl: "./user/views/user.html",
      // controller:'homecontroller'
    })
    .when("/profile", {
      templateUrl: "./user/views/profile.html",
      // controller:'profileCtrl'
    })
    .when("/post", {
      templateUrl: "./user/views/userPosts.html",
      controller: "postController",
    })
    // .when("/post1", {
    //   templateUrl: "./app/user/views/posts.html",
    //    controller:'post1Controller'
    // })
    .otherwise({
      redirectTo: "/",
    });
});

app.controller("profileController", function ($scope, $rootScope) {
  $scope.$on("loginUpdated", function (event, args) {
    console.log(args.userName);

    $scope.isLoggedIn = args.isLoggedIn;
  });
});

app.controller("myCntrl", function ($scope) {
  $scope.techStacks = [
    "Angular Js",
    "Gulp",
    "Bootstrap",
    "Karma",
    "Bower",
    "Protractor",
  ];
  $scope.canShow = false;

  $scope.showList = function () {
    $scope.canShow = true;
  };

  $scope.hideList = function () {
    $scope.canShow = false;
  };

  // $scope.showList();
});
