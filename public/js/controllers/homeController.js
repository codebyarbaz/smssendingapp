app.controller("homeController", [
  "$scope",
  "homeFactory",
  ($scope, homeFactory) => {
    $scope.arbaz = "Hello! My name is Arbaz";
  }
]);
