angular.module('friends').controller('landingController', function ($scope, landingService) {

    landingService.getCurrentUser().then(response =>{
        console.log(response);
        $scope.currentProfile = response.data;
    })

});
