app.controller("addContactController", [
  "$scope",
  "addContactFactory",
  ($scope, addContactFactory) => {
    $scope.contactDetails = {};
    $scope.addNewContact = () => {
      let promise = addContactFactory.addNewContact($scope.contactDetails);
      promise.then(
        data => {
          if (data.data == "New Contact Added") {
            $scope.contactDetails = {};
            $scope.errInfo = "";
            $scope.msgInfo = "New Contact Added Successfully!";
          }
        },
        err => {}
      );
    };
  }
]);
