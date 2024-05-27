package com.experian.proyecto.model;

public class Model {


    public static void main(String[] args) {
        Object objectOne = new Book("12345", "TITLE");

        Book bookOne;

        Magazine magazine;

        String isbn = ""; // se debe declarar e inicializar todas las variables en java

        System.out.println(objectOne.getClass().toString());

        bookOne = (Book) objectOne;

        if( objectOne instanceof Magazine) {

            magazine = (Magazine) objectOne;
            isbn = magazine.getIsbn();

        } else if (objectOne instanceof Book) {

            bookOne = (Book) objectOne;
            isbn = bookOne.getIsbn();

        }

        System.out.println(isbn);
    }
}
