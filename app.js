angular.module('myApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        })
        .state('library', {
            url: "/library",
            templateUrl: 'partials/library.html',
            controller: 'LibraryController'
        })
        .state('librarian', {
            url: "/librarian",
            templateUrl: 'partials/librarian.html',
            controller: 'LibraryController'
        })
    $urlRouterProvider.otherwise('/login');
});
