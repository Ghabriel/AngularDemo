import { Component, OnInit } from '@angular/core';

import { ALERT_TIMEOUT, NotificationService } from './notification.service';

@Component({
    selector: 'notification-container',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

    notifications: Notification[] = [];

    constructor(private service: NotificationService) { }

    ngOnInit() {
        this.service
            .subscribe(notification => {
                this.notifications.push(notification);
                setTimeout(() => {
                    notification.dismissed = true;
                }, ALERT_TIMEOUT);
            });
    }

}
