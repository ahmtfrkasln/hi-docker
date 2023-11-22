package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@CrossOrigin
@RequestMapping("demo")
@RestController
public class DemoController {
    @GetMapping("/1")
    public ResponseEntity<HashMap<String, String>> getDemo1(){
        HashMap<String, String> map = new HashMap<>();
        map.put("qwer", "1234");
        map.put("asdf", "2345");
        map.put("yxcv", "3456");
        return ResponseEntity.ok(map);
    }
}
