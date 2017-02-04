import {Component} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import {MyCustomHttpService} from "./MyCustomHttpService.service";


@Component({
    selector: "datadriven",
    templateUrl: 'datadriven.component.html',
})

export class DataDriven {

    myForm: FormGroup;
    userObject = {name: "default", email:"default", post:"default"};

    constructor(fb: FormBuilder, private httpService: MyCustomHttpService){
        this.myForm = fb.group({
            'name' : ['Asaad Saad', Validators.required],
            'email': ['asaad@mum.edu', Validators.required],
            'post': ['Nice post panpa', [Validators.required, Validators.pattern("(.|\\n){10,}")]] 
        })
    }

    onSubmit(): void{
        this.userObject.name = this.myForm.controls['name'].value;
        this.userObject.email = this.myForm.controls['email'].value;
        this.userObject.post = this.myForm.controls['post'].value;
        console.log(this.userObject);
    }

    getData(){
        this.httpService.getData(this.myForm);
    }

}