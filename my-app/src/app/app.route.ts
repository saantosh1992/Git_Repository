import {Routes} from '@angular/router';
import {LoginComponent} from './login/app.login';
import {RegistrationComponent} from './registration/app.registration';

export const routes:Routes = [
    {path:'login', component: LoginComponent},
    {path:'register', component: RegistrationComponent}
]