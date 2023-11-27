import { Injectable } from '@angular/core';

import { Client } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  stompClient: any = null;

  constructor() { }

  connect(): void {
    this.stompClient = new Client({
        brokerURL: 'ws://localhost:8080/gs-guide-websocket'
    });

    this.stompClient.onConnect = (frame: any) => {
        console.log('Connected: ' + frame);
        //stompClient.subscribe('/topic/receiver', (greeting) => {
        //    showGreeting(JSON.parse(greeting.body).message);
        //});
    };

    this.stompClient.onWebSocketError = (error: any) => {
        console.error('Error with websocket', error);
    };

    this.stompClient.onStompError = (frame: any) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
    };

    this.stompClient.activate();
  }

  disconnect(): void {
    this.stompClient.deactivate();
  }

  send(message: string): void {
    this.stompClient.publish({
         destination: "/app/messages",
         body: JSON.stringify({'message': message})
     });
  }

  onReceive(): any {
    return this.stompClient
  }
}
