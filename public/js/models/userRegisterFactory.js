app.factory("userRegisterFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      createAccount(userDetails) {
        let defer = $q.defer();
        $http.post("/account/register", userDetails).then(
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
