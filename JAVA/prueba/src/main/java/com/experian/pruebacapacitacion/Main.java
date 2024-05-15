package com.experian.pruebacapacitacion;

/**
 * NIVELES DE ACCESO
 * public
 * private
 * protected
 * 
 * 
 * RETORNO
 * void -> no retorna valor
 * 
 * PRIMITIVAS
 * byte
 * short(ENTEROS)
 * int (ENTEROS)
 * long (ENTEROS)
 * float (PUNTO FLOTANTE)
 * double (PUNTO FLOTANTE)
 * char (CARACTERES)
 * boolean (Booleanos)
 * 
 * CLASE WRAPPER
 * String
 * Integer
 * Float
 * Double
 * Boolean
 * Byte
 * Character
 */
public class Main {
    protected int variable = 0;
     private static Integer suma(Integer numberOne, Integer numberTwo){
        return numberOne + numberTwo;

     }
    public static void main(String[] args) {
        Integer numberOne, numberTwo, result;

        numberOne = 2;
        numberTwo = 3;
        result =  suma(numberOne, numberTwo);

        System.out.println("El resultado de la suma de " + numberOne + " + " + numberTwo + " = " + result);

    }
}