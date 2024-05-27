package library;

import java.util.Date;

public class NewsPaper extends Publication {

    private Date date;

    public NewsPaper(
            String ISBN,
            String name,
            int year,
            String author,
            Date date) {

        super(ISBN, name, year, author);
        this.date = date;

    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

}
