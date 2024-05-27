package com.experian.exceptionmanager;

public class Main {
    public static void main(String[] args) {
        try {
            System.out.println("Hello world!");
            dividir(0, 0);

        } catch (Exception e) {
            // TODO: handle exception
            System.out.println("error " + e.getMessage());
            e.printStackTrace();
        }
    }

    public static int dividir(int numeroUno, int numeroDos)
            throws ExceptionClass {

        if (numeroDos == 0) {

            throw new ExceptionClass("Division invalida");
        }

        return numeroUno / numeroDos;
    }

}