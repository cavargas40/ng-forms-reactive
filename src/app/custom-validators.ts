import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";

export class CustomValidators {
    static invalidProjectName(control: FormControl): { [s: string]: boolean } {
        if(String(control.value).toLowerCase() === 'test'){
            return { 'invalidProjectName': true };
        }
        return null;
    }

    static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject)=> {
            setTimeout(()=>{
                if(String(control.value).toLowerCase() === 'testproject'){
                    resolve({ 'invalidProjectName': true });
                }
                resolve(null);
            },2000);
        });

        return promise;
    }
}