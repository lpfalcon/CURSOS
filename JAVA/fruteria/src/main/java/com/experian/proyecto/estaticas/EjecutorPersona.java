package com.experian.proyecto.estaticas;

public class EjecutorPersona {

    public static void main(String[] args) {
        
        Persona persona, persona2;
    
        persona = new Persona(223674933, "Pepito", 10);
        persona2 = new Persona(223674933, "Pepito", 10);
        // comparacion con el igual compara si es el mismo, si ocupa el 
        // mismo espacio en memoria
        System.out.println(persona == persona2 );
        System.out.println(persona.equals(persona2));
    }
}
