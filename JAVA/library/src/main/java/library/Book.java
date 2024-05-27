package library;

public class Book extends Publication {

    private String prize;

    public Book(String ISBN,
            String name,
            int year,
            String author,
            String prize) {
        super(ISBN, name, year, author);
        this.prize = prize;
    }

    public String getPrice() {
        return prize;
    }

    public void setPrice(String prize) {
        this.prize = prize;
    }

}
