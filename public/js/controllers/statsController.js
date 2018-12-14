app.controller("statsController", [
  "$scope",
  "$location",
  "statsFactory",
  ($scope, $location, statsFactory) => {
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
