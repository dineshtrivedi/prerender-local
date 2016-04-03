(function(){
	'use strict';
	angular.module('prerender-tutorial.about').controller('AboutController', AboutController);

	function AboutController($scope) { 
		$scope.$parent.seo = { 
			pageTitle : 'About', 
			pageDescripton: 'We are a content heavy website so we need to be indexed.' 
		}; 
	}
})();