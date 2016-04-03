(function(){
	'use strict';

	var dependencies = [
		'ngRoute', 
		'prerender-tutorial.home', 
		'prerender-tutorial.about',
		'prerender-tutorial.features',
	];

	angular.module('prerender-tutorial', dependencies).config(config);

	function config($routeProvider, $locationProvider){
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true).hashPrefix('!');
	};	
})();