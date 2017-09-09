import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {EditorComponent} from './editor/editor.component';
import {PreviewComponent} from './preview/preview.component';
import {KeysPipe} from "./common/key.pipe";
import {CommonService} from "./common/common.service";
import { StyleSetterComponent } from './editor/style-setter/style-setter.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    PreviewComponent,
    KeysPipe,
    StyleSetterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'edit',
        component: EditorComponent
      },
      {
        path: 'preview',
        component: PreviewComponent
      }
    ])
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
