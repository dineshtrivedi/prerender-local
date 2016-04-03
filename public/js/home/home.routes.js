(function(){
	'use strict';
	angular.module('prerender-tutorial.home').config(config);

	function config($routeProvider){
		$routeProvider.when('/', { 
	    	templateUrl : 'js/home/templates/home.template.html', 
	    	controller: 'HomeController',
	  	});
	}
})();