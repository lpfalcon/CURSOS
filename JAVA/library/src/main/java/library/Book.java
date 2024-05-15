package library;

public class Book extends Publication {

    private float price;

      public Book(String ISBN, String name, int year, String author, float price) {
        super(ISBN, name, year, author);
        this.price = price;
        //TODO Auto-generated constructor stub
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }


}
