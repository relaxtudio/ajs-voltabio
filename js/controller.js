var test = function (a) {
	console.log(a);
}

ajs.controller('HomeCtrl', ['$scope', 'video', '$interval', '$rootScope', '$state', function($scope, video, $interval, $rootScope, $state) {
	$scope.$parent.select = 0;
	video.addSource('mp4', 'content/final.mp4');
	$scope.counter = 1;
	$scope.goTo = function (call, param) {
		$state.go(call, {page: param});
	};
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

ajs.controller('VoltabioCtrl', function($scope, $state) {
	$scope.$parent.select = 3;
	$scope.content = 'default';
	var page = $state.params.page;
	if (page == 'technology') {
		$scope.content = 'technology';
	}
})

ajs.controller('ServiceCtrl', function($scope, $state) {
	$scope.$parent.select = 4;
	$scope.mainContent = 'service';
	var page = $state.params.page;
	if (page == 'product') {
		$scope.mainContent = 'product';
	}
	$scope.content = 'gilingan';
})

ajs.controller('ClientCtrl', function($scope) {
	$scope.$parent.select = 5;
})