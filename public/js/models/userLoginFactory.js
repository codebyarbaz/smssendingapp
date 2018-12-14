app.factory("userLoginFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      loginAccount(userDetails) {
        let defer = $q.defer();
        $http.post("/account/login", userDetails).then(
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
