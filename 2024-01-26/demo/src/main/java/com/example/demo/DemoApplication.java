package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
      return String.format("Hello %s!", name);
    }

		@GetMapping("/person")
    public Person person() {
      return new Person("CJ");
    }

		@GetMapping("/add")
    public int add(
			@RequestParam(value = "a", defaultValue = "0") int a,
			@RequestParam(value = "b", defaultValue = "0") int b) {
      return a + b;
    }

		@GetMapping("/ping")
		public String ping() {
			return "pong";
		}
		

}
