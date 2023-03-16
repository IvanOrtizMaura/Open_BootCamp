import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListModule } from './modules/list/list.module';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
