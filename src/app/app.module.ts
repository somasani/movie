import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
export class SidebarComponent implements OnInit {
import {SidebarComponent} from './layout/sidebar/sidebar.component'
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import {LanguageComponent} from './util/language/language.component';
import {MountainsComponent} from './util/mountains/mountains.component';
import {ReverseComponent} from './util/reverse/reverse.component';
import{StatesComponent} from './util/states/states.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    LanguageComponent,
    MountainsComponent,
    ReverseComponent,
    StatesComponent,
    SidebarComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 