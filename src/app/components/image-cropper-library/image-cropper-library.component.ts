import {Component, ViewEncapsulation} from '@angular/core';
import {ImageCroppedEvent} from "ngx-image-cropper";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-image-cropper-library',
  templateUrl: './image-cropper-library.component.html',
  styleUrls: ['./image-cropper-library.component.scss']
})
export class ImageCropperLibraryComponent {
  public imageChangedEvent!: Event;
  public croppedImage!: string;

  constructor(private msg: NzMessageService) {
  }

  public imageCropped(event: ImageCroppedEvent) {
    if (event.base64) {
      this.croppedImage = event.base64;
    }
  }

  public beforeUpload(file: any): boolean {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      this.msg.error('Solo se permiten imágenes');
    }
    return isImage;
  }

  public onImageSelected(event: any): void {
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
