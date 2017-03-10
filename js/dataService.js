angular.module('myApp').service('dataService', function ($window) {

    var profile;
    var currentProfile;

    this.storeProfile = function (name, profile) {
        $window.localStorage[name] = JSON.stringify(profile);
        currentProfile = name;
    };

    this.pullProfile = function (name) {
       profile = JSON.parse($window.localStorage[name]);
        return profile;
    };

    this.getCurrent = function () {
        return currentProfile;
    }
});
