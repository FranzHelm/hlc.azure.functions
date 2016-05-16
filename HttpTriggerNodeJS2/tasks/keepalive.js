"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
// import * as request from "request";
const http = require("http");
class KeepAlive {
    // async function main() {
    //  await pingAsync();
    // }
    pingAsync(input) {
        return __awaiter(this, void 0, Promise, function* () {
            this._log("pingAsync start");
            var output = yield this.pingPromise(input);
            this._log("pingAsync end");
            return output;
        });
    }
    pingPromise(input) {
        this._log("pingPromise start");
        let promise = null;
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
        promise = new Promise((resolve, reject) => {
            http.get(url, (res) => {
                var output = {
                    statusCode: res.statusCode,
                    statusMessage: res.statusMessage
                };
                resolve(output);
                this._log("pingPromise end");
            }).on('error', (e) => {
                this._log(`Error: ${e.message}`);
                reject(e.message);
            });
        });
        // http.get(
        //     `${tcBaseUrl}token`,
        //     { username: tcUser, password: tcPassword, auth: "Basic" },
        //     (_, resp, __) => resolve(resp.body)));
        return promise;
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
    setLog(log) {
        this._log = log;
    }
}
exports.KeepAlive = KeepAlive;
//# sourceMappingURL=keepalive.js.map