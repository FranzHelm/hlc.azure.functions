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
        return "OK";
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