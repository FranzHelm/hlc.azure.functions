"use strict";
class AzureFunctionContextSimulator {
    // log(...parameter: any[]){
    //     console.log(parameter);
    // }
    log(message) {
        console.log(message);
    }
    // {
    //         status?: number;
    //         body?: string;
    // }
    done(err, propertyBag) {
    }
}
exports.AzureFunctionContextSimulator = AzureFunctionContextSimulator;
//# sourceMappingURL=AzureFunctionContextSimulator.js.map