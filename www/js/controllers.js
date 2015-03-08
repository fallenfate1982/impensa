angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $scope.modal.hide();

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
  };
})

.controller('ReceiptsCtrl', function($scope) {
  $scope.receipts = [
    { title: 'Receipt 1', id: 1 },
    { title: 'Receipt 2', id: 2 },
    { title: 'Receipt 3', id: 3 },
    { title: 'Receipt 4', id: 4 },
    { title: 'Receipt 5', id: 5 },
    { title: 'Receipt 6', id: 6 }
  ];
})

.controller('ReceiptCtrl', function($scope, $stateParams) {
})

.controller('SnapCtrl', function($scope, Camera, $ionicHistory, $state) {
    $scope.getPhoto = function() {
        console.log('Getting camera');
        Camera.getPicture().then(function(imageURI) {
          console.log(imageURI);
          $scope.lastPhoto = imageURI;
        }, function(err) {
          console.err(err);
        }, {
          quality: 75,
          targetWidth: 320,
          targetHeight: 320,
          saveToPhotoAlbum: true
        });
        /*
        navigator.camera.getPicture(function(imageURI) {
          console.log(imageURI);
        }, function(err) {
        }, {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL
        });
        */
    };

    $scope.extractData = function() {
      alert($scope.lastPhoto);
    };

    $scope.cancel = function() {
      $ionicHistory.nextViewOptions({
        disableBack: true
      });

      $state.go('app.receipts');
    };


});


