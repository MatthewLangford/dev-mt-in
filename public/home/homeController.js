angular.module('friends').controller('homeController', function ($scope, landingService) {

    $scope.storeProfile = (user)=>{
        landingService.storeProfile(user);
    }

});
