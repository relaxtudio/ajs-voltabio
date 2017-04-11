angular.module('web-controllers', ['ngAnimate'])

    .controller('WebCtrl', function($scope, $state, $ionicLoading, $ws) {
        $scope.test = "TEST";
        var scale = function() {
            var width = window.innerWidth;
            if (width < 980) {
                document.body.style.zoom = width / 980;
            } else {
                document.body.style.zoom = 1;
            }
        };
        window.onresize = function () {
            scale();
        }
        scale();
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
