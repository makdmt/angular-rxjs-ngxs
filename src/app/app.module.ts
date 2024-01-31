import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesState } from './heroes/store/heroes.state';
import { HeroesComponent } from './heroes/components/heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { UserState } from './auth/store/user.state';
import { RadioHighlightComponent } from './shared/components/radio-highlight/radio-highlight.component';
import { HighlightDirective } from './shared/directives/highlight/highlight.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedState } from './shared/store/shared.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    RadioHighlightComponent,
    HighlightDirective
  ],
  imports: [
    NgxsModule.forRoot([UserState, HeroesState, SharedState],{developmentMode: true}),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: false}),
    NgxsStoragePluginModule.forRoot({key: [SharedState]}),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
