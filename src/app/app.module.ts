import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzSliderModule} from "ng-zorro-antd/slider";
import {ImageCropperModule} from 'ngx-image-cropper';
import {ImageCropperLibraryModule} from "./components/image-cropper-library/image-cropper-library.module";
import {HttpClientModule} from "@angular/common/http";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzIconModule} from "ng-zorro-antd/icon";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ImageCropperModule,
    NzButtonModule,
    NzUploadModule,
    NzSliderModule,
    NzModalModule,
    NzIconModule,
    ImageCropperLibraryModule
  ],
  providers: [NzMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
