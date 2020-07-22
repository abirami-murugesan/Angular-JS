describe("Sample test", function () {
  it("Condition is true", function () {
    expect("AngularJS").toBe("AngularJS");
  });
});

describe("Unit Test For Login", function () {
  beforeEach(module("mainApp"));

  var $scope, $controller, $rootScope;

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(function () {
    $scope = $rootScope.$new();
    $controller = $controller("loginController", { $scope: $scope });
  });

  it("TO Check login funtion works for correct values", function () {
    $scope.userName = "test";
    $scope.password = "test";

    $scope.login();

    expect($scope.isLoggedIn).toBe("true");
  });

  it("TO Check login funtion works for Negative values", function () {
    $scope.userName = "test1";
    $scope.password = "test";

    $scope.login();

    expect($scope.isLoggedIn).toBe("false");
  });

});

describe("Unit Test For main-controller", function () {
  beforeEach(module("mainApp"));

  var $scope, $controller, $rootScope;

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(function () {
    $scope = $rootScope.$new();
    $controller = $controller("main-controller", { $scope: $scope });
  });

  it("Should be name same name test", function () {
    expect($scope.name).toBe("Abirami");
  });

  it("name negative test", function () {
    expect($scope.name).toBe("Abirami");
  });

});

describe("Unit Test For Service", function () {
  beforeEach(module("mainApp"));

  var $scope, $controller, $rootScope, $service;

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(function () {
    $scope = $rootScope.$new();
    $controller = $controller("main-controller", { $scope: $scope });
    inject(function($injector) {
      $service = $injector.get('userService');
    });
  });

  it("Service test length should be zero", function () {
    $scope.msgs = [];
    var length = $service.getLength($scope.msgs);
    expect(length).toBe(0);
  });

  it("Service test value to be addedin array", function () {
    $scope.msgs = [];
    $service.add($scope.msgs,'abc');
    $service.add($scope.msgs,'abcd');
    $service.add($scope.msgs,'ABCD');
    var length = $service.getLength($scope.msgs);
    expect(length).toBe(3);
    expect($scope.msgs[1]).toBe('abcd');
  });

});


