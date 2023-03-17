import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListModule } from './modules/list/list.module';
import { ListaContactoComponent } from './components/lista-contacto/lista-contacto.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactoComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
