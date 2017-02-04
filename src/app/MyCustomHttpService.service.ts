import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable()
export class MyCustomHttpService {
    data: Object;
    loading: boolean;

    constructor(public http: Http, private fb: FormBuilder){

    }

    getData(myForm: FormGroup){
        
        this.loading = true;
        this.http.request('http://jsonplaceholder.typicode.com/users/1').subscribe(
            (res: Response) => {
                this.data = res.json(); 
                this.loading = false;   
                myForm.patchValue({name: this.data['name'],
                                   email: this.data['email']});
                this.getDataPost(myForm);    
            }
        );
    }
    
    getDataPost(myForm: FormGroup){
        this.http.request("http://jsonplaceholder.typicode.com/posts?userId=1").subscribe(
            (res:Response) => {
                this.data = res.json();
                myForm.patchValue({post: this.data[0]['body']});
                
            }
        );
    }
}