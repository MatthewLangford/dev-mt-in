angular.module('friends').service('landingService', function ($http) {



    this.storeProfile = (user) => {
        return $http.post('/users', {user: user});
    };

    this.getCurrentUser = () =>{
            return $http.get('/users/current');
    };

    this.pullProfile = (id) => {
        return $http.get('/users/' + id);
    };

    this.getFriends = () => {
        return $http.get('/users');
    }
});
