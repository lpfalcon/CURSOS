package com.experian.proyecto.figura;

import java.io.Serializable;

// no existe posiblidad de declarar los metodos estaticos
// porque el area debe obtenerse segun una figura especifica
// esta utilizando atributos de clase
// public class Cuadrado implements Serializable {

//     private static final long serialVersionUID = 1L;
//     private double lado;

//     public Cuadrado( int lado ) {
//         this.lado = lado;

//     }

//     public double getLado() {
//         return lado;
//     }

//     public void setLado(double lado) {
//         this.lado = lado;
//     }
    
//     public double obtenerArea() {
//         return Math.pow(this.lado, 2);
//     }

//     public double obtenerPerimetro() {
//         return 4 * this.lado;
//     }
// }


/**
 * Cuadrado POLIMORFISMO
 */
public class Square extends Figure {
    private double side;

    Square(double side){
        this.side = side;

    }
    
    public double getSide() {
        return side;
    }

    public void setSide(double side) {
        this.side = side;
    }

    @Override
    public double getArea() {
        // TODO Auto-generated method stub
        return Math.pow(this.side,2);
    }

    @Override
    public double getPerimetro() {
        // TODO Auto-generated method stub
        return this.side * 4;
    }

    
}