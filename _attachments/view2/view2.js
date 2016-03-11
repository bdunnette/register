'use strict';

angular.module('myApp.view2', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('view2', {
      url: "/view2",
      templateUrl: "view2/view2.html",
      controller: function(appConfig) {
        console.log(appConfig);
      }
    })
})
