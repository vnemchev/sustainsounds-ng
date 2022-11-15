import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';

@NgModule({
  declarations: [AppComponent ],
  providers: [],
  imports: [EventsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
