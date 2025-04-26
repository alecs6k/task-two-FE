import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NzMessageService} from "ng-zorro-antd/message";
import {ImageCropperLibraryModule} from "./components/image-cropper-library/image-cropper-library.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageCropperLibraryModule
  ],
  providers: [NzMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
