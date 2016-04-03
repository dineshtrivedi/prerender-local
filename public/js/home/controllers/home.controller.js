(function(){
	'use strict'; 
	
	angular.module('prerender-tutorial.home').controller('HomeController', HomeController);

	function HomeController($scope) { 
		$scope.$parent.seo = { 
			pageTitle : 'AngularJS SEO Tutorial', 
			pageDescripton: 'Welcome to our tutorial on getting your AngularJS websites and apps indexed by Google.' 
		}; 
	}
})();