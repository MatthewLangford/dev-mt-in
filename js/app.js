angular.module('myApp', ['ui.router'])

.config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.when('', '/home');

    $stateProvider
        .state('home',{
            templateUrl: 'views/home.html',
            url: '/home'
        })
        .state('land',{
            templateUrl: 'views/landingView.html',
            url: '/land'
        })
        .state('friendsView',{
            templateUrl: 'views/friendsView.html',
            url: '/friends'
        })
        .state('friendProfile',{
            templateUrl: 'views/friendProfileView.html',
            url: '/friendPro'
        })
        .state('search',{
            templateUrl: 'views/searchView.html',
            url: 'search'
        })
        .state('update',{
            templateUrl: 'views/updateView.html',
            url: 'update'
        })

});
