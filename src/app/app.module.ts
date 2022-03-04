import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { DateComponent } from './date/date.component';
import { EmailComponent } from './email/email.component';
import { TimeComponent } from './time/time.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    DateComponent,
    EmailComponent,
    TimeComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
