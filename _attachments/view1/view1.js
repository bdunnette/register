'use strict';

angular.module('myApp.view1', ['ui.router', 'CornerCouch'])

.config(function($stateProvider) {
  $stateProvider
    .state('view1', {
      url: "/view1",
      templateUrl: "view1/view1.html",
      controller: function($scope, $rootScope, cornercouch) {
        $scope.server = cornercouch();
        $scope.server.session();
        $scope.db = $scope.server.getDB('fgtc');
        $scope.newentry = $scope.db.newDoc();
        $scope.newentry.date = new Date().getTime();
        $scope.newentry.type = 'transaction';
        console.log($scope.newentry);
        $scope.db.query("register", "transactions");
        console.log($scope.db);

        $scope.submitEntry = function() {
          $scope.newentry.save().success(function() {
            $scope.newentry = $scope.db.newDoc();
            $scope.db.query("register", "transactions");
          });
        };
      }
    })
})
