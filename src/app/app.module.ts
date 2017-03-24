import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./routes/routes";
import { AdminHomePageComponent } from './components/pages/admin/home-page/home-page.component';
import {Service} from "./services/service";
import {HttpClient} from "./services/http-client.service";
import {AdminAuthGuardService} from "./services/admin-auth-gurad.service";
import { ManufacturesPageComponent } from './components/pages/admin/manufactures-page/manufactures-page.component';
import { ProductsPageComponent } from './components/pages/admin/products-page/products-page.component';
import { UsersPageComponent } from './components/pages/admin/users-page/users-page.component';
import {FakeService} from "./services/fake.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminHomePageComponent,
    ManufacturesPageComponent,
    ProductsPageComponent,
    UsersPageComponent,
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  //All services should be registered here
  providers: [
    Service,
    HttpClient , //should be replaced with AuthHttp if you are using jwt-auth
    AdminAuthGuardService,
    FakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
