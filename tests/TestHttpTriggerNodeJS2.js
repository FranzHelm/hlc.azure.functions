"use strict";
const keepalive_1 = require("../HttpTriggerNodeJS2/tasks/keepalive");
// import {IAzureFunctionContext, IAzureFunctionRequest} from "../interfaces/iazurefunction";
const AzureFunctionContextSimulator_1 = require("./AzureFunctionContextSimulator");
class TestHttpTriggerNodeJS2 {
    static main() {
        var context = new AzureFunctionContextSimulator_1.AzureFunctionContextSimulator();
        var req = {
            body: { name: "http://www.orf.at" }
        };
        var keepAlive = new keepalive_1.KeepAlive();
        // keepAlive.setContext(context);
        // keepAlive.setArguments(arguments);
        keepAlive.setLog(context.log);
        let input = { url: req.body.name };
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
        // var ret = keepAlive.ping(req);
        // var ret = keepAlive.pingAsync(req);
    }
}
TestHttpTriggerNodeJS2.main();
//# sourceMappingURL=TestHttpTriggerNodeJS2.js.map