import { EventEmitter, Injectable } from '@angular/core';

export const ALERT_TIMEOUT = 4000;

export type Notification = {
    type: string;
    content: string;
    dismissed?: boolean;
};

@Injectable()
export class NotificationService {
    private emitter: EventEmitter<Notification> = new EventEmitter();

    success(content: string): void {
        this.show({ type: 'success', content });
    }

    error(content: string): void {
        this.show({ type: 'danger', content });
    }

    subscribe(callback: (...args: any[]) => void) {
        this.emitter.subscribe(callback);
    }

    private show(notification: Notification): void {
        this.emitter.emit(notification);
    }
}
