import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ImageCropperLibraryComponent} from "./image-cropper-library.component";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzSliderModule} from "ng-zorro-antd/slider";
import {ImageCropperModule} from "ngx-image-cropper";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ImageCropperLibraryComponent],
  imports: [CommonModule, NzUploadModule, NzModalModule, NzSliderModule, ImageCropperModule, FormsModule],
  exports: [ImageCropperLibraryComponent]
})
export class ImageCropperLibraryModule {}
