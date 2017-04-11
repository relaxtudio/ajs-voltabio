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

    .controller('LegalCtrl', function($scope) {
        $scope.init = function() {

        };
        $scope.init();
        $scope.$on('$ionicView.enter', function (e) {

        })
    })
    .controller('VoltaCtrl', function($scope) {
        $scope.init = function() {

        };
        $scope.init();
        $scope.$on('$ionicView.enter', function (e) {

        })
    })
    .controller('ServiceCtrl', function($scope) {
        $scope.init = function() {

        };
        $scope.init();
        $scope.$on('$ionicView.enter', function (e) {

        })
    })
    .controller('CorporateCtrl', function($scope) {
        $scope.init = function() {

        };
        $scope.init();
        $scope.$on('$ionicView.enter', function (e) {

        })
    })
;
