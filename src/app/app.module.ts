import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordCrudService } from './service/word-crud.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [WordCrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}
