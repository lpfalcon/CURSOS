package com.experian.proyecto.fruteria;

public class Principal {
 public static void main(String[] args) {
    int contador;

    contador = 1;

    while (contador < 10) {
        if(contador == 4){
            contador ++;
            continue;
        }
        System.out.println(contador + ", ");
        contador ++;
    }
 }
}
