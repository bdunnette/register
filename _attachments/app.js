'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'ngResource',
    'CornerCouch',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/view1");
  })
  .constant('appConfig', {
    db: 'http://127.0.0.1:5984/fgtc'
  })
  .run(function($rootScope, cornercouch) {
    $rootScope.server = cornercouch();
    $rootScope.server.session();
    $rootScope.db = $rootScope.server.getDB('fgtc');
  });
