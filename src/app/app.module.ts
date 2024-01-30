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

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([UserState, HeroesState],{developmentMode: true}),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
