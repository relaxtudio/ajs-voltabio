var ajs = angular.module('ajs', ['ngAnimate', 'ui.router', 'ngVideo']);

ajs.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			views: {
				'content': {
					templateUrl: 'templates/home.html',
					controller: 'HomeCtrl'
				}
			}
		})
		.state('profile', {
			url: '/profile',
			views: {
				'content': {
					templateUrl: 'templates/profile.html',
					controller: 'ProfileCtrl'
				}
			}
		})
		.state('legal', {
			url: '/legal',
			views: {
				'content': {
					templateUrl: 'templates/legal.html',
					controller: 'LegalCtrl'
				}
			}
		})
		.state('voltabio', {
			url: '/voltabio',
			views: {
				'content': {
					templateUrl: 'templates/voltabio.html',
					controller: 'VoltabioCtrl'
				}
			}
		})
		.state('service', {
			url: '/service',
			views: {
				'content': {
					templateUrl: 'templates/service.html',
					controller: 'ServiceCtrl'
				}
			}
		})
		.state('corporate', {
			url: '/corporate',
			views: {
				'content': {
					templateUrl: 'templates/corporate.html',
					controller: 'CorporateCtrl'
				}
			}
		})
})
