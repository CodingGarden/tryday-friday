package com.example.demo;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Person {
  @JsonProperty("firstName")
  public String first_name;

  Person(String first_name) {
    this.first_name = first_name;
  }
}
