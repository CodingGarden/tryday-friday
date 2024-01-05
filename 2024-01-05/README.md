# Rust

* What do you already know about it?
  * Low Level Programming Language
    * C, C++
    * Go
  * Compiled code runs natively
    * No "runtime"
  * Memory "Safe"
    * Memory errors are typically caught at compile time
      * Borrow checking?
    * Other LL languages require manual memory management
    * Other LL languages have a "garbage collector"
  * Low Level programming people like it!
  * Used for CLI tools and Build tools in the JS ecosystem
  * Blazingly fast!
* What is it?
  * Low Level Programming Language
  * The Rust programming language helps you write faster, more reliable software
  * Rust gives the ability to do low level programming (systems programming, native programming, bare metal) in a similar style to high level languages
  * Less hassle than traditional Low Level programming languages
* How to Learn
  * [Book](https://doc.rust-lang.org/book/)
  * [Rustlings Course](https://github.com/rust-lang/rustlings/)
  * [Rust by Example](https://doc.rust-lang.org/rust-by-example/)
  * [Learn X In Y Minutes](https://learnxinyminutes.com/docs/rust/)
* Why would we use it?
  * Speed
    * Speed of Developer Experience
    * Speed of running code
  * Stability
    * Compiler checked when new features are added to the lang
  * From the Rust Book:
    * Overall, Rust’s greatest ambition is to eliminate the trade-offs that programmers have accepted for decades by providing safety and productivity, speed and ergonomics. 
* How do we get started?
  * Cargo
    * Dependency Manager
    * Build Tool
  * Rustfmt
    * Built in formatter
    * Sensible defaults every Rust developer uses
  * Rust Language Server
    * IDE integration / error messages
  * Install:  
    * https://www.rust-lang.org/tools/install
  * Use Cargo to generate a project / library
* Things I like
  * cargo run
    * Compiler errors are REALLY helpful
* Hello World
  * https://doc.rust-lang.org/rust-by-example/hello.html
* Key Concepts
  * Ownership
    * I think
      * Compiler level garbage collection?
        * No runtime...
        * But the compiler can keep track of where a value is used and free it up automatically
      * Kinda like smart pointers?
    * Rules
      * Each value in Rust has an owner.
      * There can only be one owner at a time.
      * When the owner goes out of scope, the value will be dropped.

* Build a CLI git repo cloner
  * Create a package
    * https://doc.rust-lang.org/rust-by-example/cargo.html
  * Add a dependency
    * cargo add <dependency-name>
      * https://doc.rust-lang.org/cargo/commands/cargo-add.html
  * Tests
* Overall impressions
  * Docs are amazing
  * Crates we needed existed
  * Community is nice
  * Compiler errors are really good!
  * Code wasn't too crazy
  * Cargo is full featured!
    * Project setup
    * Linting / Formatting
    