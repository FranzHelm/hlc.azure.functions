"use strict";
var keepalive_1 = require("../tasks/keepalive");
var A = (function () {
    function A() {
    }
    A.myfunction = function (context, req) {
        context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);
        var keepAlive = new keepalive_1.KeepAlive();
        keepAlive.setContext(context);
        keepAlive.setArguments(arguments);
        context.res = keepAlive.ping(req);
        // if (req.query.name || (req.body && req.body.name)) {
        //     context.res = {
        //         // status: 200, /* Defaults to 200 */
        //         body: "Hello ABC " + (req.query.name || req.body.name)
        //     };
        // }
        // else {
        //     context.res = {
        //         status: 400,
        //         body: "Please pass a name on the query string or in the request body"
        //     };
        // }
        context.done();
    };
    ;
    return A;
}());
exports.A = A;
module.exports = A.myfunction;
//# sourceMappingURL=index.js.map