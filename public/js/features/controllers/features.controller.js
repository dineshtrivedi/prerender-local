(function(){
	'use strict';
	angular.module('prerender-tutorial.features').controller('FeaturesController', FeaturesController);

	function FeaturesController($scope) { 
		$scope.$parent.seo = { 
			pageTitle : 'Features', 
			pageDescripton: 'Check out some of our awesome features!' 
		}; 
	}
})();