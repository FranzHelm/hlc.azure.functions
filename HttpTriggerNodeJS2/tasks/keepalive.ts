// import * as request from "request";
import * as http from "http";
import {IAzureFunctionContext, IAzureFunctionRequest} from "../../interfaces/iazurefunction";

// import {IAzureFunctionContext, IAzureFunctionRequest} from "../interfaces/iazurefunction";
//  const Promise = require('NodeJs');
// const http = require('http');
// const net = require('net');
// const url = require('url');

// interface ICountry { APP_IsoCode: string; }
// interface ICustomer { APP_CompanyName: string; }


export interface IKeepAliveInput {
    url: string;
} 
export interface IKeepAliveOutput {
    statusCode: number;
    statusMessage: string;
} 

export class KeepAlive {


    // private _context: IAzureFunctionContext;
    private _log: any;



    // async function main() {
    //  await pingAsync();
    // }

    // public async pingAsync(inpput: any) {
    //   console.log("pingAsync start");
    //   await this.pingPromise();
    //   console.log("pingAsync end");
    // }

    public pingPromise(input: IKeepAliveInput): Promise<IKeepAliveOutput> {


        if (input == null) {
            throw "input is null";
        }

        if (this._log == null) {
            throw "_log is null";
        }

        // this._context.log("pingPromise(req)");

        // var url: string = (req.query && req.query.name) ||
        //     (req.body && req.body.name);
            
            var url = input.url;

        if (url == null || url.length == 0) {
            throw "url is missing";
        }

        // return new Promise<string>((resolve, _) =>
        //     http.get({
        //         hostname: 'www.orf.at',
        //         port: 80,
        //         path: '/',
        //         agent: false  // create a new agent just for this one request
        //     }, (res) => {
        //         // Do stuff with response
        //         console.log("pingPromise end");
        //         resolve(res.statusMessage)
        //     }));


        return new Promise<IKeepAliveOutput>((resolve, _) =>
            http.get(url, (res) => {
                
                var output : IKeepAliveOutput = {
                    statusCode: res.statusCode,
                    statusMessage: res.statusMessage
                }; 
                
                resolve(output);
                console.log("pingPromise end");
                
            }));

        // http.get(
        //     `${tcBaseUrl}token`,
        //     { username: tcUser, password: tcPassword, auth: "Basic" },
        //     (_, resp, __) => resolve(resp.body)));
    }





    // public ping(req: any): any {

    //     if (this._context == null) {
    //         throw "_context is null";
    //     }

    //     if (this._arguments == null) {
    //         throw "_arguments is null";
    //     }

    //     this._context.log("ping(req)");

    //         // return "OK";



    //            var self = this;
    //     //    $.ajax(url, {
    //     //       success: function(data) {
    //     //          self._context.log("ping() ajax success: data: " + data);
    //     //       },
    //     //       error: function() {
    //     //          self._context.log("ping() An error occurred");
    //     //       }
    //     //    });
    //     //    needle.get(
    //     //             url, 
    //     //             {  },
    //     //             (_, resp, __) => self._context.log(resp.body.value));



    //     // var stream = needle.get(url);
    //     // stream.on('header', function (statusCode, headers) {
    //     //     self._context.log((JSON.stringify(headers)));
    //     //     if (statusCode != 200) {
    //     //     }
    //     //     var res;
    //     //     if (req.query.name || (req.body && req.body.name)) {
    //     //         res = {
    //     //             // status: 200, /* Defaults to 200 */
    //     //             body: "Hello from ping " + (req.query.name || req.body.name)
    //     //         };
    //     //     }
    //     //     else {
    //     //         res = {
    //     //             status: 400,
    //     //             body: "Please pass a name on the query string or in the request body"
    //     //         };
    //     //     }
    //     //     return res;
    //     // });



    //     var url = (req.query && req.query.name) || 
    //               (req.body && req.body.name); 


    //     var stream = request.get({
    //         url: url,
    //         headers: {

    //         },
    //         json: true //,
    //         // body: {}
    //     }, function (err, res, body) {

    //         self._context.log("Response from service (err, res, body)");
    //         self._context.log(JSON.stringify(err, null, " "));
    //         self._context.log(JSON.stringify(res, null, " "));
    //         self._context.log(JSON.stringify(body, null, " "));

    //         var ret;
    //         if (err || res.statusCode != 200) {
    //             ret = {
    //                 status: 500,
    //                 body: err
    //             };
    //         } else {
    //             ret = {
    //                 body: body
    //             };                
    //         }
    //         return ret;
    //     });


    // }




    // public setContext(context: any) {
    //     this._context = context;
    // }

    public setLog(log: any) {
        this._log = log;
    }


}