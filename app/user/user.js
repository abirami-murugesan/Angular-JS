angular
  .module("mainApp")
  .controller("postController", function ($scope, $location, $rootScope) {
    $scope.posts = [
      {
        about: "Angular Js",
        description:
          "AngularJS is a structural framework for dynamic web apps. With AngularJS, designers can use HTML as the template language and it allows for the extension of HTML's syntax to convey the application's components effortlessly. Angular makes much of the code you would otherwise have to write completely redundant.",
      },
      {
        about: "Gulp",
        description:
          "Gulp is a cross-platform, streaming task runner that lets developers automate many development tasks. At a high level, gulp reads files as streams and pipes the streams to different tasks. These tasks are code-based and use plugins. The tasks modify the files, building source files into production files",
      },
      {
        about: "Bootstrap",
        description:
          "Bootstrap is a framework to help you design websites faster and easier. It includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels, etc. It also gives you support for JavaScript plugins.",
      },
      {
        about: "Karma",
        description:
          " Karma is a task runner for our tests. It uses a configuration file in order to set the startup file, the reporters, the testing framework, the browser among other things.",
      },
    ];
  });

angular
  .module("mainApp")
  .controller("profileController", function (
    $scope,
    $location,
    $rootScope,
    userService
  ) {
    $scope.msgs = ["Abi"];

    $scope.addMsg = function (message) {
      $scope.msgs = userService.add($scope.msgs, message);
    };

    $scope.getLength = function () {
      $scope.lengthValue =  userService.getLength($scope.msgs);
    };
  });
