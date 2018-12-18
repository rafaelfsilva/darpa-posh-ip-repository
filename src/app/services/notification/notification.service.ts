import {Injectable} from '@angular/core';
import {ToastrService, ToastrConfig, ToastrPositionEnum} from 'pb-ngx-toast/dist';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private config: ToastrConfig;

  constructor(private toastrService: ToastrService) {
    console.log("------------- NOTIFICATION");
    this.config = new ToastrConfig();
    this.setOptions();
  }

  private setOptions(): void {
    this.config.progressBar = true;
    this.config.position = ToastrPositionEnum.BOTTOM_RIGHT;
  }

  /**
   * Show Success notification
   * @param message Body of the popup
   * @param title Title of the popup
   * @param options Sets the timeOut,the positionClass and other values for the popup
   */
  showSuccess(message: string, title?: string, options?: ToastrConfig): void {
    if (options) {
      this.config = options;
    }
    title = (title) ? title : 'Success';
    this.toastrService.success(message, title, this.config);
  }

  /**
   * Show Error notification
   * @param message Body of the popup
   * @param title Title of the popup
   * @param options Sets the timeOut, the positionClass and other values for the popup
   */
  showError(message: string, title?: string, options?: ToastrConfig): void {
    if (options) {
      this.config = options;
    }
    title = (title) ? title : 'Error';
    this.toastrService.error(message, title, this.config);
  }

  /**
   * Show Warning notification
   * @param message Body of the popup
   * @param title Title of the popup
   * @param options Sets the timeOut, the positionClass and other values for the popup
   */
  showWarning(message: string, title?: string, options?: ToastrConfig): void {
    if (options) {
      this.config = options;
    }
    title = (title) ? title : 'Warning';
    this.toastrService.warning(message, title, this.config);
  }

  /**
   * Show the Information notification
   * @param message Body of the popup
   * @param title Title of the popup
   * @param options Sets the timeOut, the positionClass and other values for the popup
   */
  showInfo(message: string, title?: string, options?: ToastrConfig) {
    if (options) {
      this.config = options;
    }
    title = (title) ? title : 'Information';
    this.toastrService.info(message, title, this.config);
  }
}
