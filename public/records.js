'use strict';

var app = angular.module('myApp');

app.service('recordsService', function() {

    this.getAll = [{
        "date": "2016-03-30",
        "description": "minim",
        "debits": 51.74,
        "credits": 323.38,
        "notes": "esse labore laborum"
    }, {
        "date": "2015-01-19",
        "description": "sunt",
        "debits": 333.61,
        "credits": 50.15,
        "notes": "cupidatat aute laborum"
    }, {
        "date": "2015-08-11",
        "description": "ad",
        "debits": 488.67,
        "credits": 276.4,
        "notes": "labore elit cupidatat"
    }, {
        "date": "2014-07-11",
        "description": "minim",
        "debits": 82.9,
        "credits": 444.31,
        "notes": "incididunt dolor enim"
    }, {
        "date": "2015-09-25",
        "description": "ea",
        "debits": 440.05,
        "credits": 317.09,
        "notes": "quis pariatur pariatur"
    }, {
        "date": "2016-03-15",
        "description": "ea",
        "debits": 224.69,
        "credits": 443.56,
        "notes": "id commodo ad"
    }, {
        "date": "2015-08-03",
        "description": "cillum",
        "debits": 113.92,
        "credits": 208.37,
        "notes": "cillum ullamco proident"
    }, {
        "date": "2015-05-17",
        "description": "laborum",
        "debits": 93.95,
        "credits": 267.49,
        "notes": "incididunt sit laborum"
    }, {
        "date": "2014-06-11",
        "description": "aute",
        "debits": 407.61,
        "credits": 4.28,
        "notes": "mollit officia ullamco"
    }, {
        "date": "2014-03-12",
        "description": "qui",
        "debits": 439.5,
        "credits": 372.54,
        "notes": "eu incididunt irure"
    }, {
        "date": "2015-06-03",
        "description": "amet",
        "debits": 405.77,
        "credits": 338.53,
        "notes": "dolore dolore cupidatat"
    }, {
        "date": "2014-12-09",
        "description": "do",
        "debits": 16.09,
        "credits": 426.54,
        "notes": "adipisicing voluptate non"
    }, {
        "date": "2014-03-26",
        "description": "eu",
        "debits": 345.36,
        "credits": 152.12,
        "notes": "duis dolore fugiat"
    }, {
        "date": "2015-02-25",
        "description": "ex",
        "debits": 409.83,
        "credits": 372.21,
        "notes": "commodo ex duis"
    }];
})
