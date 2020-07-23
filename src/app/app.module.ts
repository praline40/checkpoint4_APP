import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnonceViewComponent } from './pages/annonce/annonce-view/annonce-view/annonce-view.component';
import { AnnonceFilterComponent } from './pages/annonce/annonce-view/components/annonce-filter/annonce-filter.component';
import { AnnonceResultComponent } from './pages/annonce/annonce-view/components/annonce-result/annonce-result.component';
import { AnnonceResearchComponent } from './pages/annonce/annonce-view/components/annonce-research/annonce-research.component';
import { GroupViewComponent } from './pages/group/group-view/group-view.component';
import { GroupEditComponent } from './pages/group/group-edit/group-edit.component';
import { MusicianViewComponent } from './pages/musician/musician-view/musician-view.component';
import { MusicianEditComponent } from './pages/musician/musician-edit/musician-edit.component';
import { ConcertViewComponent } from './pages/concert/concert-view/concert-view.component';
import { ConcertFilterComponent } from './pages/concert/concert-view/concert-filter/concert-filter.component';
import { ConcertResultComponent } from './pages/concert/concert-view/concert-result/concert-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnonceViewComponent,
    AnnonceFilterComponent,
    AnnonceResultComponent,
    AnnonceResearchComponent,
    GroupViewComponent,
    GroupEditComponent,
    MusicianViewComponent,
    MusicianEditComponent,
    ConcertViewComponent,
    ConcertFilterComponent,
    ConcertResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
