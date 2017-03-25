angular.module('friends', ['ui.router'])

.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.when('', '/home');

    $stateProvider
        .state('home',{
            templateUrl: 'home/home.html',
            url: '/home',
            controller: 'homeController'
        })
        .state('land',{
            templateUrl: 'landing/landingView.html',
            url: '/land',
            controller: 'landingController'
        })
        .state('friendsView',{
            templateUrl: 'friends/friendsView.html',
            url: '/friends',
            controller: 'landingController'
        })
        .state('friendProfile',{
            templateUrl: 'friends/friendProfileView.html',
            url: '/friendPro'
        })
        .state('search',{
            templateUrl: 'search/searchView.html',
            url: 'search'
        })
        .state('update',{
            templateUrl: 'update/updateView.html',
            url: 'update'
        })

});
