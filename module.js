'use strict';

var app = angular.module('myApp', ['ui.router']);

// localStorage.ngProductsList = [{'name': 'andy'}, {'yo': 'dd'}];
// console.log('ddd: ', JSON.parse(localStorage.ngProductsList));

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './home.html',
            controller: 'homeCtrl'
        })
        .state('list', {
            url: '/list',
            templateUrl: './list.html',
            controller: 'listCtrl'
        })
        .state('detail', {
            url: '/detail/:id',
            templateUrl: './detail.html',
            controller: 'detailCtrl'
        })
        .state('summary', {
            url: '/summary/',
            templateUrl: './summary.html',
            controller: 'summaryCtrl'
        })

    $urlRouterProvider.otherwise('/');

});
