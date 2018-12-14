app.controller("uploadFileController", [
  "$scope",
  "uploadFileFactory",
  ($scope, uploadFileFactory) => {
    $scope.show = () => {
      console.log("change");
    };
  }
]);
