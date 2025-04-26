import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ImageCropperLibraryComponent} from "./image-cropper-library.component";
import {NzMessageService} from "ng-zorro-antd/message";
import {HttpClientModule} from "@angular/common/http";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzIconModule} from "ng-zorro-antd/icon";
import {ImageCropperModule} from "ngx-image-cropper";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzImageModule} from "ng-zorro-antd/experimental/image";
import {NzTypographyModule} from "ng-zorro-antd/typography";

@NgModule({
  declarations: [ImageCropperLibraryComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NzUploadModule,
    NzIconModule,
    NzButtonModule,
    NzTypographyModule,
    NzImageModule,
    ImageCropperModule,
    BrowserAnimationsModule,
    NzImageModule
  ],
  exports: [ImageCropperLibraryComponent],
  providers: [NzMessageService]
})
export class ImageCropperLibraryModule {
}
