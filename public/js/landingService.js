angular.module('friends').service('landingService', function ($http) {



    this.storeProfile = function (user) {
        return $http.post('/users', {user: user});
    };

    this.pullProfile = function (name) {
       profile = JSON.parse($window.localStorage[name]);
        return profile;
    };

    this.getCurrent = function () {
        return currentProfile;
    }
});
