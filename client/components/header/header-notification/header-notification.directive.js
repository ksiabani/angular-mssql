'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('angularMssqlApp')
	.directive('headerNotification',function(){
		return {
        templateUrl:'components/header/header-notification/header-notification.directive.html',
        restrict: 'E',
        replace: true,
    	}
	});

