import { ListService } from './list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule.forRoot()
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
