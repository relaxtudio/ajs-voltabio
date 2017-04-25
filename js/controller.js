var test = function (a) {
	console.log(a);
}

ajs.controller('HomeCtrl', ['$scope', 'video', '$interval', '$rootScope', function($scope, video, $interval, $rootScope) {
	$scope.$parent.select = 0;
	video.addSource('mp4', 'content/final.mp4');
	$scope.counter = 1;
	$scope.addImg = function (n) {
		$scope.showImg($scope.counter += n);
	};
	$scope.showImg = function (n) {
		var slides = document.getElementsByClassName("slideImg");
		if (n > slides.length) {$scope.counter = 1} 
		if (n < 1) {$scope.counter = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slides[$scope.counter-1].style.display = "block";
	};
	$scope.showImg($scope.counter);
	$scope.reload = $interval(function () {
			$scope.addImg(1);
		}, 3000);
	var dereg = $rootScope.$on('$locationChangeSuccess', function() {
		$interval.cancel($scope.reload);
		console.log('pindah');
		dereg();
	});
}])

ajs.controller('ProfileCtrl', function($scope, $interval, $rootScope) {
	$scope.$parent.select = 1;
	$scope.content = 'default';
})

ajs.controller('LegalCtrl', function($scope) {
	$scope.$parent.select = 2;
})

ajs.controller('VoltabioCtrl', function($scope) {
	$scope.$parent.select = 3;
})

ajs.controller('ServiceCtrl', function($scope) {
	$scope.$parent.select = 4;
	$scope.content = 'default';
})

ajs.controller('ClientCtrl', function($scope) {
	$scope.$parent.select = 5;
})