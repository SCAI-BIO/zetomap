"use strict";
exports.__esModule = true;
exports.makeServer = void 0;
var miragejs_1 = require("miragejs");
var data_1 = require("../data");
function makeServer(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.environment, environment = _c === void 0 ? 'development' : _c;
    var mirageServer = new miragejs_1.Server({
        environment: environment,
        routes: function () {
            this.urlPrefix = "".concat(process.env.REACT_APP_API_URL);
            this.namespace = '/query';
            this.get('/base/', function (schema, request) {
                return data_1.base;
            });
            this.get('/neighbors/:id', function (schema, request) {
                var id = request.params.id;
                if (id === 'generic_2')
                    return data_1.generic_2;
                if (id === 'question_1')
                    return data_1.question_1;
                return [];
            });
            this.get('/search/:id', function (schema, request) {
                var id = request.params.id;
                if (id.toLowerCase() === 'knowledge')
                    return data_1.knowledge;
                if (id.toLowerCase() === 'question')
                    return data_1.question;
                return [];
            });
            // this.passthrough('http://api.nddks.k8s.bio.scai.fraunhofer.de/**');
            this.passthrough('https://www.scai.fraunhofer.de/**');
            this.passthrough('https://localhost:3001/**');
        }
    });
    return mirageServer;
}
exports.makeServer = makeServer;
