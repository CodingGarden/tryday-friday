package coding.garden.books;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Book {

  private @Id @GeneratedValue Long id;

  @NotBlank(message = "Title must no be blank.")
  private String title;
  private String author;
  private String isbn;
  private String genre;
  private String description;
  @Column(name = "publish_year")
  private int publishYear;
  private int price;

  public Long getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public String getIsbn() {
    return isbn;
  }

  public void setIsbn(String isbn) {
    this.isbn = isbn;
  }

  public String getGenre() {
    return genre;
  }

  public void setGenre(String genre) {
    this.genre = genre;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public int getPublishYear() {
    return publishYear;
  }

  public void setPublishYear(int publishYear) {
    this.publishYear = publishYear;
  }

  public int getPrice() {
    return price;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  public Book() {}

  public Book(String title, String author, String isbn, String genre, String description, int publishYear,
      int price) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.genre = genre;
    this.description = description;
    this.publishYear = publishYear;
    this.price = price;
  }

  @Override
  public String toString() {
    return "Book{" + "title=" + this.title + "}";
  }

}
