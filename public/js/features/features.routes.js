(function(){
	'use strict';

	angular.module('prerender-tutorial.features').config(config);

	function config($routeProvider){
		$routeProvider.when('/features', { 
	    	templateUrl : 'js/features/templates/features.template.html', 
	    	controller: 'FeaturesController' 
	  	});
	}	
})();