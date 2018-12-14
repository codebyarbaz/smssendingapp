app.controller("sendMessageController", [
  "$scope",
  "sendMessageFactory",
  ($scope, sendMessageFactory) => {
    $scope.OTP = Math.floor(100000 + Math.random() * 900000);
    $scope.sendMessage = (fname, lname, number, message) => {
      let promsie = sendMessageFactory.sendMessage(
        fname,
        lname,
        number,
        message
      );
      promsie.then(
        data => {
          if (data.data == "sent") {
            $scope.number = "";
            $scope.message = "";
            $scope.errInfo = "";
            $scope.msgInfo = "Message Successfully Sent!";
          } else if (data.data == "Please add number to the naxmo dashboard.") {
            $scope.msgInfo = "";
            $scope.errInfo =
              "Note: As you know, I am using free SMS API of Nexmo and free version only allows us to send message only on these numbers which are added to Nexmo account, So if you want to check this application i am giving you my Nexmo Account details so you can add your own mobile number and test it on your own. email: arbaztyagi123@gmail.com & password: #Dafa@840 and after that you can send message on your mobile number too, as it is working to my number.";
          } else {
            $scope.msgInfo = "";
            $scope.errInfo = "Failed to send message on this number.";
          }
        },
        err => {}
      );
    };
  }
]);
