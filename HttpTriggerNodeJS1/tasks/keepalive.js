"use strict";
var KeepAlive = (function () {
    function KeepAlive() {
    }
    KeepAlive.prototype.ping = function () {
        if (this._context == null) {
            throw "_context is null";
        }
        this._context.log("ping()");
    };
    KeepAlive.prototype.setContext = function (context) {
        this._context = context;
    };
    return KeepAlive;
}());
exports.KeepAlive = KeepAlive;
//# sourceMappingURL=keepalive.js.map