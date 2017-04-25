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
			params: {
				page: null
			},
			views: {
				'content': {
					templateUrl: 'templates/voltabio.html',
					controller: 'VoltabioCtrl'
				}
			}
		})
		.state('service', {
			url: '/service',
			params: {
				page: null
			},
			views: {
				'content': {
					templateUrl: 'templates/service.html',
					controller: 'ServiceCtrl'
				}
			}
		})
		.state('client', {
			url: '/client',
			views: {
				'content': {
					templateUrl: 'templates/client.html',
					controller: 'ClientCtrl'
				}
			}
		})
})
