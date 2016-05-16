"use strict";
const keepalive_1 = require("./tasks/keepalive");
class A {
    static myfunction(context, req) {
        context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);
        if (context == null) {
            throw "context is null";
        }
        if (arguments == null) {
            throw "arguments are null";
        }
        var contextLog = context.log;
        var url = (req.query && req.query.name) ||
            (req.body && req.body.name);
        var keepAlive = new keepalive_1.KeepAlive();
        keepAlive.setLog(contextLog);
        // keepAlive.setArguments(arguments);
        let input = { url: url };
        var ret = keepAlive.pingPromise(input).then(output => {
            console.log("output: " + JSON.stringify(output, null, 2));
            if (output.statusCode == 200) {
                context.res = {
                    // status: 200, /* Defaults to 200 */
                    body: "OK"
                };
            }
            else {
                context.res = {
                    status: 400,
                    body: output.statusMessage
                };
            }
            context.done();
        });
    }
    ;
}
exports.A = A;
module.exports = A.myfunction;
//# sourceMappingURL=index.js.map