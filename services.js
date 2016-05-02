'use strict';

var app = angular.module('myApp');

app.service('Items', function() {



    this.getAll = () => {
        return items;
    }
    this.getOneById = (id) => {
        return $http.get(`http://pokeapi.co/api/v2/pokemon/${id}/`);
    }


    var items = [{
        "name": "Higgins",
        "desc": "sit pariatur aliqua nulla veniam",
        "cate": "aute",
        "price": 57.43
    }, {
        "name": "Pacheco",
        "desc": "velit labore quis sit eu",
        "cate": "amet",
        "price": 33.83
    }, {
        "name": "Sloan",
        "desc": "proident nisi quis Lorem amet",
        "cate": "qui",
        "price": 39.74
    }, {
        "name": "Cross",
        "desc": "voluptate excepteur dolor ad labore",
        "cate": "id",
        "price": 49.58
    }, {
        "name": "Dale",
        "desc": "proident occaecat officia irure magna",
        "cate": "deserunt",
        "price": 4.24
    }, {
        "name": "Fuentes",
        "desc": "consequat sunt qui anim sit",
        "cate": "et",
        "price": 45.63
    }, {
        "name": "Schwartz",
        "desc": "voluptate id reprehenderit reprehenderit sint",
        "cate": "ea",
        "price": 66.4
    }, {
        "name": "Petersen",
        "desc": "ad dolore do dolore Lorem",
        "cate": "ut",
        "price": 64.68
    }]

});
