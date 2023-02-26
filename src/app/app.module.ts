import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { EntryService } from './services/entry.service';

@NgModule({
  declarations: [AppComponent, EntryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [EntryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
