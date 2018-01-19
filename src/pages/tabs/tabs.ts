import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { HomePage} from '../home/home';

@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage {
    tab1Root = LoginPage;
    tab2Root = RegisterPage;
    tab3Root = HomePage;

    constructor() {

    }
}
