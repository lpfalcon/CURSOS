package com.experian.proyecto.fruteria;

import java.io.Serializable;

public class Calculadora implements IExampleIterface, Serializable {
    public static String staticVariable = "Static variable";
    public static final String CONST_SUMA = "+"; // CONSTANTES
    public static final String CONST_RESTA= "-"; 


    @Override
    public int sumar (int firstNumber, int secondNumber){
        System.out.println(CONST_SUMA);
        return firstNumber + secondNumber;
    }
    @Override // esto es una anotacion 
    public int restar (int firstNumber, int secondNumber){

        return firstNumber - secondNumber;
    }
    @Override
    public int multiplicar (int firstNumber, int secondNumber){

        return firstNumber * secondNumber;
    }
}
