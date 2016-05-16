"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const keepalive_1 = require("../HttpTriggerNodeJS2/tasks/keepalive");
// import {IAzureFunctionContext, IAzureFunctionRequest} from "../interfaces/iazurefunction";
const AzureFunctionContextSimulator_1 = require("./AzureFunctionContextSimulator");
class TestHttpTriggerNodeJS2 {
    static main() {
        return __awaiter(this, void 0, void 0, function* () {
            var context = new AzureFunctionContextSimulator_1.AzureFunctionContextSimulator();
            var req = {
                // body: { name: "http://www.orf.at" }
                body: { name: "http://www.orf-unbekannt.at" }
            };
            var keepAlive = new keepalive_1.KeepAlive();
            // keepAlive.setContext(context);
            // keepAlive.setArguments(arguments);
            keepAlive.setLog(context.log);
            let input = { url: req.body.name };
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
            // var ret = keepAlive.ping(req);
            // var ret = keepAlive.pingAsync(req);
        });
    }
}
TestHttpTriggerNodeJS2.main();
//# sourceMappingURL=TestHttpTriggerNodeJS2.js.map