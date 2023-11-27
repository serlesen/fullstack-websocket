import { Component } from '@angular/core';

import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  receivedMessages: string[] = [];

  constructor(private webSocket: WebSocketService) { }

  ngOnInit() {
    //this.webSocket.onReceive().subscribe('/topic/receiver', (message: any) => {
    //    this.receivedMessages.push(message.body);
    //});
  }

  onSendMessage() {
    const message = `Message generated at ${new Date()}`;
    this.webSocket.send(message);
  }
}
