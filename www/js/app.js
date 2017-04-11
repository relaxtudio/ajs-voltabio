
angular.module('web', ['ionic', 'web-config', 'web-controllers', 'web-services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('web', {
            url: '/web',
            abstract: true,
            templateUrl: 'templates/web.html',
            controller: 'WebCtrl'
        })

        .state('web.profile', {
            url: '/profile',
            views: {
                'menuContent': {
                    templateUrl: 'templates/profile.html',
                    controller: 'ProfileCtrl'
                }
            }
        });

  $urlRouterProvider.otherwise('/web/profile');

});
