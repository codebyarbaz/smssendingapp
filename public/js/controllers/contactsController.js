app.controller("contactsController", [
  "$scope",
  "$location",
  "contactsFactory",
  ($scope, $location, contactsFactory) => {
    $scope.deleteText = "Delete Contact";
    $scope.deleteContact = contactID => {
      let promise = contactsFactory.deleteContact(contactID);
      promise.then(
        data => {
          if (data.data == "Deleted") {
            window.location.reload();
          }
        },
        err => {}
      );
    };
    $scope.nextPage = currentPage => {
      let Pages = $location.search();
      if (Pages.page) {
        $location.search("page", ++currentPage);
        window.location.reload();
      } else {
        $location.search("page", ++currentPage);
        window.location.reload();
      }
    };
    $scope.previousPage = currentPage => {
      let Pages = $location.search();
      if (Pages.page && Pages.page > 0) {
        $location.search("page", --currentPage);
        window.location.reload();
      } else {
        $location.search("page", --currentPage);
        window.location.reload();
      }
    };
  }
]);
