export interface IAzureFunctionRequest{
    query?: {name: string};
    body?: {name: string};
    originalUrl?: string;
}

export interface IAzureFunctionResult{
    status?: number;
    body?: string;
}

export interface IAzureFunctionContext{
    log: IAzureFunctionContextLog;
    res: IAzureFunctionResult;
    done: IAzureFunctionContextDone;
    bindings: any;
}

export interface IAzureFunctionContextDone{
    (err?: {}, ...propertyBag: any[]): void;
}

export interface IAzureFunctionContextLog{
    (...parameter: any[]): void;
}
