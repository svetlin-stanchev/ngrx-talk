import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducerMap, metaReducers } from './store';
import { environment } from '../environments/environment';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    /**
     * Initial registration of the store. No need to be in the app.module
     * can be in core.module instead.
     * If you do not have reducerMap you can just provide the reducer for your state just like
     * in the movies.module for the movieReducer
     */
    StoreModule.forRoot(reducerMap, { metaReducers }),
    /**
     * To use effects in features you need to register EffectsModule.forRoot([])
     * even if there are no effects used in the root module.
     */
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    /**
     * Connect router to the store
     */
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
