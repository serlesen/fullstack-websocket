import { Component } from '@angular/core';

import {WebSocketService} from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state: string = 'disconnected';

  constructor(private webSocket: WebSocketService) {}

  connect(): void {
    this.webSocket.connect();
    this.state = "connected";
  }

  disconnect(): void {
    this.webSocket.disconnect();
    this.state = "disconnected";
  }
}
