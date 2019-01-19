import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services
import { AccountantService} from './services/accountant.service';

//Components 
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountantComponent } from './components/accountant/accountant.component';
import { SocietyComponent } from './components/society/society.component';
import { HomeComponent } from './components/home/home.component';
import { AccountantsComponent } from './components/accountants/accountants.component';
import { SocietiesComponent } from './components/societies/societies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AccountantComponent,
    SocietyComponent,
    HomeComponent,
    AccountantsComponent,
    SocietiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AccountantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
