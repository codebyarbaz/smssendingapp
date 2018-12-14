app.factory("contactsFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      deleteContact(contactID) {
        let defer = $q.defer();
        $http.post("/contacts/delete", { contactID }).then(
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
