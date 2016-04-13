'use strict';
var config = require('./config.js');
var models = require(config.model_include_path);
var dummyjson = require('dummy-json');
var templates = require('./templates');

const restaurantNum = 100;
const dishNum       = 1000;
const memberNum     = 200;

for (let i = 0; i < restaurantNum; i++) {
    let result = dummyjson.parse(templates.restaurant);
    result = JSON.parse(result);

    models
        .Restaurant
        .create(result)
        .then();
}

for (let i = 0; i < memberNum; i++) {
    let result = dummyjson.parse(templates.member);
    result = JSON.parse(result);

    models
        .Member
        .create(result)
        .then();
}

for (let i = 0; i < dishNum; i++) {
    let result = dummyjson.parse(templates.dish);
    result = JSON.parse(result);

    models
        .Dish
        .create(result)
        .then();
}

