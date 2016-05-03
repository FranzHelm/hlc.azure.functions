// import * as needle from "needle";
//import * as chalk from "chalk";
//import * as jquery from "jquery";
//import $ = require('jquery');
"use strict";
var needle = require("needle");
//import * as jquery from "../lib/jquery.js";
// import {$} from "jquery";
// Some constants for configuration
var url = "http://www.orf.com/";
var KeepAlive = (function () {
    function KeepAlive() {
    }
    // // Note how we wrap the needle.get calls in the following two helper functions using a Promise
    // // (see also https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)
    // function getTokenAsync() {
    //     return new Promise<string>((resolve, _) =>
    //         needle.get(
    //             `${tcBaseUrl}token`,
    //             { username: tcUser, password: tcPassword, auth: "Basic" },
    //             (_, resp, __) => resolve(resp.body)));
    // }
    // function queryTimeCockpitAsync<T>(odataPath: string, token: string) {
    //     var headers = { accept: "application/json", Authorization: `Bearer ${token}` };
    //     return new Promise<T[]>((resolve, _) =>
    //         needle.get(
    //             `${tcBaseUrl}odata/${odataPath}`, 
    //             { headers: headers },
    //             (_, resp, __) => resolve(resp.body.value)));
    // }
    // // The next function demonstrates the power of async/await in TypeScript.
    // // As you can see, the function is written as it would be synchronous.
    // // The "await" keyword is caring for all the magic necessary for async processing.
    // async function getCustomersPerCountry() {
    //     var token = await getTokenAsync();
    //     var countries = await queryTimeCockpitAsync<ICountry>("APP_Country?$select=APP_IsoCode", token);
    //     for(var i = 0; i< countries.length; i++) {
    //         var country = countries[i];
    //         console.log(chalk.bgGreen.white(country.APP_IsoCode));
    //         var customers = await queryTimeCockpitAsync<ICustomer>(
    //             `APP_Customer?$filter=APP_Country/APP_IsoCode eq '${country.APP_IsoCode}'&$select=APP_CompanyName`,
    //             token);
    //         customers.forEach(c => console.log(c.APP_CompanyName));
    //     }
    // }
    // getCustomersPerCountry();
    KeepAlive.prototype.ping = function (req) {
        if (this._context == null) {
            throw "_context is null";
        }
        if (this._arguments == null) {
            throw "_arguments is null";
        }
        this._context.log("ping(req)");
        // this._context.log("ping() req: " + JSON.stringify(req));
        // this._context.log("ping() this._arguments: " + JSON.stringify(this._arguments));
        var self = this;
        //    $.ajax(url, {
        //       success: function(data) {
        //          self._context.log("ping() ajax success: data: " + data);
        //       },
        //       error: function() {
        //          self._context.log("ping() An error occurred");
        //       }
        //    });
        //    needle.get(
        //             url, 
        //             {  },
        //             (_, resp, __) => self._context.log(resp.body.value));
        var stream = needle.get(url);
        stream.on('header', function (statusCode, headers) {
            self._context.log((JSON.stringify(headers)));
            if (statusCode != 200) {
            }
            var res;
            if (req.query.name || (req.body && req.body.name)) {
                res = {
                    // status: 200, /* Defaults to 200 */
                    body: "Hello from ping " + (req.query.name || req.body.name)
                };
            }
            else {
                res = {
                    status: 400,
                    body: "Please pass a name on the query string or in the request body"
                };
            }
            return res;
        });
    };
    KeepAlive.prototype.setContext = function (context) {
        this._context = context;
    };
    KeepAlive.prototype.setArguments = function (arguments1) {
        this._arguments = arguments1;
    };
    return KeepAlive;
}());
exports.KeepAlive = KeepAlive;
//# sourceMappingURL=keepalive.js.map