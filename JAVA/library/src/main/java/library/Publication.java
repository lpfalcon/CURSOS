package library;

public class Publication {

    private String ISBN;
    private String name;
    private int year;
    private String author;
        
    public Publication(String ISBN, String name, int year, String author) {
        this.ISBN = ISBN;
        this.name = name;
        this.year = year;
        this.author = author;
    }
    
    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
    public String getISBN() {
        return ISBN;
    }
    
    public void setISBN(String iSBN) {
        ISBN = iSBN;
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String toString(){

        return  this.ISBN + " " 
                + this.name + " " 
                + this.author + " "
                + this.year;
    }
    
}
