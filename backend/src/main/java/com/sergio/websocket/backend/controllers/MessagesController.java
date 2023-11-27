package com.sergio.websocket.backend.controllers;

import com.sergio.websocket.backend.dtos.MessageDto;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MessagesController {

    @MessageMapping("/messages")
    @SendTo("/topic/receiver")
    public MessageDto sendMessage(MessageDto messageDto) throws InterruptedException {
        Thread.sleep(1000);
        return messageDto;
    }
}
