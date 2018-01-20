import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})

export class RegisterPage{
    agreeTerms: boolean = false;

    constructor(public navCtrl:NavController){
    }

    updateAgreeTerms(){
        this.agreeTerms = true;
    }
}