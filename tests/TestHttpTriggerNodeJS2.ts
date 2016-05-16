import {KeepAlive} from "../HttpTriggerNodeJS2/tasks/keepalive";
// import {IAzureFunctionContext, IAzureFunctionRequest} from "../interfaces/iazurefunction";
import {AzureFunctionContextSimulator} from "./AzureFunctionContextSimulator";

class TestHttpTriggerNodeJS2 {
    public static main(): void {


        var context = new AzureFunctionContextSimulator();

        var req = { // : IAzureFunctionRequest = {
            body: { name: "http://www.orf.at" }
        };

        var keepAlive = new KeepAlive();
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