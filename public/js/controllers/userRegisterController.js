app.controller("userRegisterController", [
  "$scope",
  "userRegisterFactory",
  ($scope, userRegisterFactory) => {
    $scope.userDetails = {};
    $scope.createAccount = () => {
      let promise = userRegisterFactory.createAccount($scope.userDetails);
      promise.then(
        data => {
          if (data.data == "exist") {
            $scope.errInfo = "Username already exist!";
          } else if (data.data == "Account Created!") {
            $scope.userDetails = {};
            $scope.errInfo = "";
            $scope.info = data.data;
          } else {
            throw new Error("Something found wrong, please try again later!");
          }
        },
        err => {
          $scope.info = err;
        }
      );
    };
  }
]);
