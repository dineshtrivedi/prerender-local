(function(){
	'use strict';

	angular.module('prerender-tutorial').controller('MainController', MainController);

	function MainController($scope) { 
		$scope.seo = { 
			pageTitle : '', pageDescription : '' 
		}; 
	}
})();