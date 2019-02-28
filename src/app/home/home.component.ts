import { Component } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  hidden: boolean = false;

  constructor(
    private notifications: NotificationsService
  ) { }

  public resume(): void {
    this.notifications.openSnackBar('Please see my LinkedIn profile');
  }

  public sidebar(): void {
    this.hidden = !this.hidden;
  }

}
