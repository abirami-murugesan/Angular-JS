angular.module("mainApp").controller(
  "loginController",

  function ($scope, $location, $rootScope) {
    var userName = "test";
    var password = "test";
    $scope.isLoggedIn = "false";

    $scope.login = function (Username,password) {
      console.log($scope.userName,$scope.password);
      // if (userName == $scope.userName) {
      //   if (password === $scope.password) {
      //     $rootScope.$broadcast("profileUpdate", {
      //       userName: $scope.userName,
      //     });

      //     $scope.isLoggedIn = "true";
      //     $location.path("/user");

      //     $rootScope.$broadcast("loginUpdated", {
      //       isLoggedIn: $scope.isLoggedIn,
      //     });

      //     console.log("login successfully");
      //   } else {
      //     alert("Incorrect Password");
      //   }
      // } else {
      //   alert("Incorrect Username");
      // }

      if (userName == Username) {
        if (password === password) {
          $rootScope.$broadcast("profileUpdate", {
            userName: userName,
          });

          $scope.isLoggedIn = "true";
          $location.path("/user");

          $rootScope.$broadcast("loginUpdated", {
            isLoggedIn: $scope.isLoggedIn,
          });

          console.log("login successfully");
        } else {
          alert("Incorrect Password");
        }
      } else {
        alert("Incorrect Username");
      }
    };

    $scope.$on("logoutUpdated", function (event, args) {
      $scope.isLoggedIn = args.isLoggedIn;
    });
  }
);
