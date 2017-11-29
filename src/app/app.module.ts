import { ListService } from './list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListCompleteComponent } from './list-complete/list-complete.component';
import { ListIncompleteComponent } from './list-incomplete/list-incomplete.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListCompleteComponent,
    ListIncompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { delay: 0, dataEncapsulation: false }
    )
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
