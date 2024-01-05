use std::fs;
use std::path::PathBuf;
use std::process::Command;

use clap::Parser;
use colored::Colorize;

mod error_messages;

// Idiomatic Rust uses const strings instead...
// enum ErrorMessages {
//     CloneError,
//     InstallError,
// }

// impl ErrorMessages {
//     fn as_str(&self) -> &'static str {
//         match self {
//             ErrorMessages::CloneError => "Failed to clone template.",
//             ErrorMessages::InstallError => "Failed to install dependencies.",
//         }
//     }
// }

/// Simple program to greet a person
#[derive(Parser, Debug)]
#[command(author, version, about, long_about = None)]
struct Args {
    #[arg(short, long)]
    directory: String,

    #[arg(short, long)]
    typescript: bool,
}

fn main() {
    let args = Args::parse();
    let repo_url = if args.typescript {
        "https://github.com/w3cj/express-api-starter-ts"
    } else {
        "https://github.com/w3cj/express-api-starter"
    };

    let clone_result = Command::new("git")
        .args(["clone", "--depth", "1", repo_url, &args.directory])
        .status()
        .expect(error_messages::CLONE_ERROR);

    if clone_result.success() {
        let mut git_path = PathBuf::from(&args.directory);
        git_path.push(".git");

        if fs::remove_dir_all(git_path).is_err() {
            println!("{}", error_messages::REMOVE_GIT_ERROR);
        }

        let install_result = Command::new("npm")
            .arg("install")
            .current_dir(&args.directory)
            .status()
            .expect(error_messages::INSTALL_ERROR);

        if install_result.success() {
            println!("{}", "Done! 🏁".cyan());
            println!();
            println!("{}", "To get started:".white());
            println!("{} {}", "cd".cyan(), args.directory);
            println!("{}", "npm run dev".cyan());
        } else {
            println!("{}", error_messages::INSTALL_ERROR.red());
        }
    } else {
        println!("{}", error_messages::CLONE_ERROR.red());
        std::process::exit(1);
    }
}
