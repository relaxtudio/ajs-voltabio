angular.module('web-controllers', ['ngAnimate'])

    .controller('WebCtrl', function($scope, $state, $ionicLoading, $ws) {
        $scope.test = "TEST";
    })

    .controller('ProfileCtrl', function($scope) {
        $scope.init = function () {
            $scope.test = "TEST";
        }
        $scope.init();
        $scope.$on('$ionicView.enter', function (e) {
        })
    })

;
