import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AuthLoginComponent } from './auth-login/auth-login.component';

@NgModule({
  declarations: [AppComponent, AuthLoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventsModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
