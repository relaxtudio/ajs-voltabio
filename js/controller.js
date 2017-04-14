var test = function (a) {
	console.log(a);
}

ajs.controller('HomeCtrl', ['$scope', 'video', function($scope, video) {
	$scope.$parent.select = 0;
	video.addSource('mp4', 'content/final.mp4');
}])

ajs.controller('ProfileCtrl', function($scope) {
	$scope.$parent.select = 1;
})

ajs.controller('LegalCtrl', function($scope) {
	$scope.$parent.select = 2;
})

ajs.controller('VoltabioCtrl', function($scope) {
	$scope.$parent.select = 3;
})

ajs.controller('ServiceCtrl', function($scope) {
	$scope.$parent.select = 4;
})

ajs.controller('CorporateCtrl', function($scope) {
	$scope.$parent.select = 5;
})