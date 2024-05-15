package com.experian.proyecto.calculadora;

import com.experian.proyecto.fruteria.IExampleIterface;
import com.experian.proyecto.fruteria.Operador;

public class CalculadoraAvanzada implements IExampleIterface {

    @Override
    public int sumar(int firstNumber, int secondNumber) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'sumar'");
    }

    @Override
    public int restar(int firstNumber, int secondNumber) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'restar'");
    }

    @Override
    public int multiplicar(int firstNumber, int secondNumber) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'multiplicar'");
    }

    private int operacion (Operador operador, int firstElement, int secondElement){

        if(operador.equals(Operador.CONST_SUMA)){
            return firstElement + secondElement;
        }

        if(operador.equals(Operador.CONST_SUMA)){
            return firstElement - secondElement;
        }

        return 0;
    }

}
