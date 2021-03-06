import {KeepAlive, IKeepAliveInput, IKeepAliveOutput} from "./tasks/keepalive";


export class A {
    static async myfunction(context, req) {
        context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);
        
        
        
        if (context == null) {
            throw "context is null";
        }

        if (arguments == null) {
            throw "arguments are null";
        }

        var contextLog = context.log;

        var url: string = (req.query && req.query.name) ||
            (req.body && req.body.name);
            
            
            
        

        var keepAlive = new KeepAlive();
        keepAlive.setLog(contextLog);
        // keepAlive.setArguments(arguments);

       
        
        let input = { url: url };
        
        
        try {

            var output = await keepAlive.pingAsync(input);
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


    };
}



module.exports = A.myfunction; 
