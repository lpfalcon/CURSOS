package com.experian.proyecto.fruteria;

// LISTADO DE CONSTANTES
public enum Operador {
    CONST_SUMA("ADD", "+"),
    CONST_RESTA("SUBSTRACT","*");

    private String englishName;
    private String character;
    
    Operador( String englishName, String character){
        this.englishName = englishName;
        this.character = character;
    }

    public String getEnglishName(){

        return this.englishName;
    }

    
    public String getCharacter(){

        return this.character;
    }
}
