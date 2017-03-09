angular.module('myApp').controller('landingController', function ($scope, dataService) {



    $scope.pullProfile = dataService.pullProfile;
    $scope.profile = $scope.pullProfile(dataService.getCurrent());

});
