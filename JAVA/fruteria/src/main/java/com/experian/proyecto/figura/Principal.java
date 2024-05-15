package com.experian.proyecto.figura;

public class Principal {

    public static void main(String[] args) {
        Figure figure;

        figure = new Square(4);

        figureToString(figure);

        figure = new Circle(3.14);

        figureToString(figure);


        System.out.println(((Circle) figure).getRatio());

    }

    public static void figureToString(Figure figure) {

        System.out.println("Area " + figure.getArea());
        System.out.println("Perimetro " + figure.getArea());

        if (figure instanceof Circle) {

            System.out.println("Soy un circulo");
        } else {

            System.out.println("Soy un cuadrado");
        }


    }

}
