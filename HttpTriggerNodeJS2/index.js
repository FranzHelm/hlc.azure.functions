"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const keepalive_1 = require("./tasks/keepalive");
class A {
    static myfunction(context, req) {
        return __awaiter(this, arguments, void 0, function* () {
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
            try {
                var output = yield keepAlive.pingAsync(input);
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
            }
            catch (e) {
                context.res = {
                    status: 400,
                    body: "Exception occurred " + e
                };
            }
            context.done();
            // var ret = keepAlive.pingPromise(input).then(output => {
            //     console.log("output: " + JSON.stringify(output, null, 2));
            //     if (output.statusCode == 200) {
            //         context.res = {
            //             // status: 200, /* Defaults to 200 */
            //             body: "OK"
            //         };
            //     }
            //     else {
            //         context.res = {
            //             status: 400,
            //             body: output.statusMessage
            //         };
            //     }
            //     context.done();
            // });
        });
    }
    ;
}
exports.A = A;
module.exports = A.myfunction;
//# sourceMappingURL=index.js.map