import {IAzureFunctionContext, IAzureFunctionRequest, IAzureFunctionResult} from "../interfaces/iazurefunction";


export class AzureFunctionContextSimulator implements IAzureFunctionContext {
    
    // log(...parameter: any[]){
    //     console.log(parameter);
    // }

   public log(message){
        console.log(message);
    }
    
    public res: IAzureFunctionResult; 
    // {
    //         status?: number;
    //         body?: string;
    // }
    
    public done(err?: {}, propertyBag?: any[]){
        
    }
    
    public bindings : any;
    // log: IAzureFunctionContextLog;
    // res: IAzureFunctionResult;
    // done: IAzureFunctionContextDone;
    // bindings: any;


    
}