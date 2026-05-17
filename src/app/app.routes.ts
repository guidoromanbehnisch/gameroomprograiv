import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Home } from './components/pages/home/home';
import { Login } from './components/pages/login/login';
import { Register } from './components/pages/register/register';
import { Whoami } from './components/pages/whoami/whoami';



export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children:[
            {path:'home',component: Home},
            {path:'login',component: Login},
            {path:'register',component: Register},
            {path:'whoami',component: Whoami},
            {path:'',redirectTo:'home', pathMatch:'full'},
            {path:'**',redirectTo:'home', pathMatch:'full'},
        ]
        
    }
  
    
];
