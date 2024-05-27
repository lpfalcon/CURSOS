package com.experian.proyecto.model;

public class Magazine {
    
    private String isbn;
    private String title;

    
    public Magazine(String isbn, String title) {
        this.isbn = isbn;
        this.title = title;
    }
    public String getIsbn() {
        return isbn;
    }
    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
}
