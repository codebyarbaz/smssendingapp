app.factory("addContactFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      addNewContact(contactDetails) {
        let defer = $q.defer();
        $http.post("/contacts/add-contact", contactDetails).then(
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
