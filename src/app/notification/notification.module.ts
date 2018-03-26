import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertConfig } from 'ngx-bootstrap/alert/alert.config';

import { NotificationComponent } from './notification.component';
import { ALERT_TIMEOUT, NotificationService } from './notification.service';

@NgModule({
    imports: [
        CommonModule,
        AlertModule.forRoot()
    ],
    declarations: [NotificationComponent],
    providers: [
        NotificationService,
        {
            provide: AlertConfig,
            useValue: {
                dismissOnTimeout: ALERT_TIMEOUT + 1000
            }
        }
    ],
    exports: [NotificationComponent]
})
export class NotificationModule { }
