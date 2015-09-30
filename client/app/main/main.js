'use strict';

angular.module('angularMssqlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
    .state('dashboard.home', {
        url: '/home',
        templateUrl: 'app/main/home.html',
        controller: 'MainCtrl'
      })
    .state('dashboard.customers', {
        url: '/customers',
        templateUrl: 'app/customers/customers.html',
        controller: 'MainCtrl'
      })
    .state('dashboard.invoices', {
        url: '/invoices',
        templateUrl: 'app/invoices/invoices.html',
        controller: 'MainCtrl'
      });
  });