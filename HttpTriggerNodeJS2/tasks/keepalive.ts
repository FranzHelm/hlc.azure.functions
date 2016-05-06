

interface ICountry { APP_IsoCode: string; }
interface ICustomer { APP_CompanyName: string; }




export class KeepAlive {


    private _context: any;
    private _arguments: any;



    public ping(req: any): any {

        if (this._context == null) {
            throw "_context is null";
        }

        if (this._arguments == null) {
            throw "_arguments is null";
        }

        this._context.log("ping(req)");
    
            return "OK";

    }




    public setContext(context: any) {
        this._context = context;
    }

    public setArguments(arguments1: any) {
        this._arguments = arguments1;
    }


}