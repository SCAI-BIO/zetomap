"use strict";
exports.__esModule = true;
exports.getAllPeople = void 0;
var axios_1 = require("axios");
axios_1["default"].defaults.baseURL = 'https://ndd-knowledge-space.scai.fraunhofer.de/api';
var getAllPeople = function () { return axios_1["default"].get('/query/people/'); };
exports.getAllPeople = getAllPeople;
