angular.module('friends').controller('landingController', function ($scope, landingService) {



    $scope.pullProfile = landingService.pullProfile;
    $scope.profile = $scope.pullProfile(landingService.getCurrent());

});
