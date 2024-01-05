fn main() {
  let greeting = greet();
  println!("{}", greeting);
}

// &str string pointer?
// Different from String??
// Borrowing... what does it mean?

// String::from("")
// "Wow".to_string()
// "Wow".to_owned()

// borrowing
  // String -> Owned
  // &str -> Borrowed
  // stack
  // heap
// macros
  // compiler checked code reuse
  // like inheritance... without caveats of OOP
// derive
// mutable
  // TODO: learn this

// fn greet() -> String {
//     "Hello World!".to_string()
// }

fn greet() -> String {
  // 7ijme - @codinggarden when you have “hello world” without to_string, the type is &str, which means it’s a reference to the actual characters in your code
  // let greeting = String::from("Hello World!");
  // String literal "" is only accessible in the current scope / function / stack
  // We use to_string() to put it on the heap so it can borrowed by other functions
  let greeting = "Hello World!".to_string();
  greeting
}

#[cfg(test)] // macro that checks if we are in test, if not, remove test code
mod tests {
  // Note this useful idiom: importing names from outer (for mod tests) scope.
  use super::*;

  // macro??

  #[test]
  fn test_greet() {
      assert_eq!(greet(), "Hello World!");
  }
}