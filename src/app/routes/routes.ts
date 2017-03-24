import {Routes} from "@angular/router";
import {AdminAuthGuardService} from "../services/admin-auth-gurad.service";
import {AdminHomePageComponent} from "../components/pages/admin/home-page/home-page.component";
import {ManufacturesPageComponent} from "../components/pages/admin/manufactures-page/manufactures-page.component";
import {UsersPageComponent} from "../components/pages/admin/users-page/users-page.component";
import {ProductsPageComponent} from "../components/pages/admin/products-page/products-page.component";

/**
 * Created by Python on 1/17/2017.
 */

export const ADMIN_PATH_GROUP  =  {path:'admin',canActivate:[AdminAuthGuardService], children:[
  {path:'home', component:AdminHomePageComponent, children:[
    {path:'manufactures', component:ManufacturesPageComponent},
    {path:'users', component:UsersPageComponent},
    {path:'products', component:ProductsPageComponent},
    //Add any other children in the same way
  ]},

]};

export const APP_ROUTES:Routes = [
     // The default route localhost:4200/ you should choose where it should  point.
     { path: '',   redirectTo: '/admin/home', pathMatch: 'full'} ,

    // Admin routes , Home, and its children, and any others.
      ADMIN_PATH_GROUP,

  // Here, add the your groups for the other users

];

