package dev.scutiproject.gameserverservice.controller;

import net.minidev.json.JSONObject;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class CatalogController {
    @MessageMapping("/openCatalog")
    @SendTo("/socket/catalog")
    public String openCatalog(String message) {
        message = String.valueOf(new JSONObject()
                .put("canOpenCatalog", "true")
        );
        return message;
    }
}
