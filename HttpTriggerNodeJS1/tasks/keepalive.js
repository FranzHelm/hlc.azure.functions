"use strict";
var KeepAlive = (function () {
    function KeepAlive() {
    }
    KeepAlive.prototype.ping = function (req) {
        if (this._context == null) {
            throw "_context is null";
        }
        if (this._arguments == null) {
            throw "_arguments is null";
        }
        this._context.log("ping(req)");
        this._context.log("ping() req: " + JSON.stringify(req));
        this._context.log("ping() this._arguments: " + JSON.stringify(this._arguments));
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