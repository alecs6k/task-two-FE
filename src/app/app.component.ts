import {Component, ViewEncapsulation} from '@angular/core';
import {ImageCroppedEvent} from "ngx-image-cropper";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzUploadFile} from "ng-zorro-antd/upload";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  name = 'Angular';
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(private msg: NzMessageService) {}

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  beforeUpload(file: any): boolean {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      this.msg.error('Solo se permiten imágenes');
    }
    return isImage;
  }

  onImageSelected(event: any): void {
    if (event.type === 'start') {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(event.file.originFileObj);
      const fileList = dataTransfer.files;

      const fakeEvent = {
        target: {
          files: fileList
        }
      } as Event & { target: { files: FileList } };

      this.imageChangedEvent = fakeEvent;
    }
  }
}
