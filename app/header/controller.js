angular
  .module("mainApp")
  .controller("main-controller", function ($scope, $location, $rootScope) {

    $scope.name = "Abirami";
    $scope.logout = function () {
      console.log($scope.isLoggedIn);
      $scope.isLoggedIn = false;
      console.log($scope.isLoggedIn);

      $rootScope.$broadcast("logoutUpdated", {
        isLoggedIn: $scope.isLoggedIn,
      });
      $location.path("/home");
    };

    $scope.$on("loginUpdated", function (event, args) {
      $scope.isLoggedIn = args.isLoggedIn;
    });
  });
