app.factory("sendMessageFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      sendMessage(fname, lname, number, message) {
        let defer = $q.defer();
        $http.post("/send", { fname, lname, number, message }).then(
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
