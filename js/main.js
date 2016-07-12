(function() {
    'use strict';
    angular
        .module('shopSite', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

	  	$urlRouterProvider.otherwise("/");

	  	$stateProvider
	    .state('home', {
      	url: '/',
      	views: {
      		'main': {
		        templateUrl: '../views/home.html',
		        controller: 'MainController',
		        controllerAs: 'controller'
		      },
		      'nav': {
		        templateUrl: '../views/partials/nav.html',
		      },
		      'search': {
		        templateUrl: '../views/partials/search.html',
		      },
		  },
	    })
	    .state('category', {
      	url: '/category',
      	views: {
      		'main': {
		        templateUrl: '../views/category.html',
		        controller: 'CategoryController',
		        controllerAs: 'controller'
		      },
		      'nav': {
		        templateUrl: '../views/partials/nav.html',
		      },
		  },
	    })
	    .state('list', {
      	url: '/list',
      	views: {
      		'main': {
		        templateUrl: '../views/list.html',
		        controller: 'ListController',
		        controllerAs: 'controller'
		      },
		      'nav': {
		        templateUrl: '../views/partials/nav.html',
		      },
		  },
	    })
	    .state('detail', {
      	url: '/detail',
      	views: {
      		'main': {
		        templateUrl: '../views/detail.html',
		        controller: 'DetailController',
		        controllerAs: 'controller'
		      },
		      'nav': {
		        templateUrl: '../views/partials/nav.html',
		      },
		  },
	    });
	});
})();


