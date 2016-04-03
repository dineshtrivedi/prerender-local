(function(){
	'use strict';
	angular.module('prerender-tutorial.about').config(config);

	function config($routeProvider){
		$routeProvider.when('/about', { 
	    	templateUrl : 'js/about/templates/about.template.html', 
	    	controller: 'AboutController' 
	  	});
	}	
})();