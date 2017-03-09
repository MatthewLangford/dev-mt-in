angular.module('myApp').controller('homeController', function ($scope, dataService) {

    $scope.storeProfile = dataService.storeProfile;

});
