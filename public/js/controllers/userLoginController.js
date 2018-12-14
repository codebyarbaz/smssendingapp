app.controller("userLoginController", [
  "$scope",
  "userLoginFactory",
  ($scope, userLoginFactory) => {
    $scope.userDetails = {};
    $scope.loginAccount = () => {
      let promise = userLoginFactory.loginAccount($scope.userDetails);
      promise.then(
        data => {
          if (data.data == "Username doesn't exists!") {
            $scope.msgInfo = "";
            $scope.errInfo = data.data;
          }
          if (data.data == "LoginSuccess") {
            window.location.assign("/");
          }
          if (data.data == "Password is incorrect!") {
            $scope.userDetails.password = "";
            $scope.msgInfo = "";
            $scope.errInfo = data.data;
          }
        },
        err => {
          console.log(err);
        }
      );
    };
  }
]);
