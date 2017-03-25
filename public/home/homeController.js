angular.module('friends').controller('homeController', function ($scope, landingService) {

    $scope.storeProfile = landingService.storeProfile;

});
