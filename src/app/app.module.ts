import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { SpellingComponent } from './pages/spelling/spelling.component';
import { RateWritingComponent } from './pages/rate-writing/rate-writing.component';
import { HttpClientModule } from '@angular/common/http';
import { EssayOfWeekComponent } from './pages/essay-of-week/essay-of-week.component';
import { EssayDetailComponent } from './pages/essay-detail/essay-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    PrivacyComponent,
    SpellingComponent,
    RateWritingComponent,
    EssayOfWeekComponent,
    EssayDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
