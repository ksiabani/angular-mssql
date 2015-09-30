'use strict';

angular.module('angularMssqlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('customers', {
        url: '/customers',
        templateUrl: 'app/customers/customers.html',
        controller: 'MainCtrl'
      });
  });