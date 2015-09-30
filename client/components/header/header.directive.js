'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('angularMssqlApp')
	.directive('header',function(){
		return {
        templateUrl:'components/header/header.directive.html',
        restrict: 'E',
        replace: true,
    	}
	});

