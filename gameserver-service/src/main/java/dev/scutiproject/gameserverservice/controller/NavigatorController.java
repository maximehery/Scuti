package dev.scutiproject.gameserverservice.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class NavigatorController {
    @MessageMapping("/openNavigator")
    @SendTo("/socket/navigator")
    public String openNavigator(String message) {
        return message;
    }
}
