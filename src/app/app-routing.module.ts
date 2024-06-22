import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { SpellingComponent } from './pages/spelling/spelling.component';
import { RateWritingComponent } from './pages/rate-writing/rate-writing.component';
import { EssayOfWeekComponent } from './pages/essay-of-week/essay-of-week.component';
import { EssayDetailComponent } from './pages/essay-detail/essay-detail.component';

const routes: Routes = [
  { path: '', component: SpellingComponent },
  { path: 'rate-writing', component: RateWritingComponent },
  { path: 'essay-of-week', component: EssayOfWeekComponent },
  { path: 'essay/:id', component: EssayDetailComponent },
  { path: 'privacy', component: PrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
