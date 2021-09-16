import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WcardComponent } from './components/wcard/wcard.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { SeparadorComponent } from './components/separador/separador.component';
import { CarrupoetryComponent } from './components/carrupoetry/carrupoetry.component';
import { CarruurbanComponent } from './components/carruurban/carruurban.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WcardComponent,
    PrincipalComponent,
    SobremiComponent,
    SeparadorComponent,
    CarrupoetryComponent,
    CarruurbanComponent,
    ContactoComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
