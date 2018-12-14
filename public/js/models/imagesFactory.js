app.factory("imagesFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      deleteImage(imageID, imagePath) {
        let defer = $q.defer();
        $http.post("/upload/deleteImage", { imageID, imagePath }).then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      }
    };
    return object;
  }
]);
