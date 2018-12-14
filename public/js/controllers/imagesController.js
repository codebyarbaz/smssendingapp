app.controller("imagesController", [
  "$scope",
  "imagesFactory",
  ($scope, imagesFactory) => {
    $scope.deleteImage = (imageID, imagePath) => {
      imagesFactory.deleteImage(imageID, imagePath).then(
        data => {
          if (data.data == "Error in deleting image.") {
            $scope.msgInfo = "";
            $scope.errInfo = data.data;
          }
          if (data.data == "Done") {
            $scope.msgInfo = "";
            $scope.errInfo = "";
            window.location.reload();
          }
        },
        err => {}
      );
    };
  }
]);
