angular.module('OlxModule')
    .controller('locationController', function($scope) {
		$scope.mapOptions = {
          center: new google.maps.LatLng(35.784, -78.670),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        /*$scope.items = ["car", "Mobile"];
        $scope.changeItem = function(item) {
            var length = $scope.items.length;
            while(length-- ) {
                $scope.items[length].isCurrent = false;
            }
            $scope.currentItem = item;
            $scope.items.indexOf(item).isCurrent = false;
        }*/
    });