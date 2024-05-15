package com.experian.proyecto.estaticas;

import java.sql.Date;

public class Persona {
    private long cedula;
    private String primerNombre;
    private String segundoNombre;
    private String apellido;
    private String segungoApellido;
    private int edad;
    private Date birthdate;
    private boolean tall;

    public Persona(
        long cedula,
        String primerNombre,
        int edad
    ) {

        this.cedula = cedula;
        this.primerNombre = primerNombre;
        this.edad = edad;
        this.segundoNombre = "";
        this.apellido = "";
        this.segungoApellido = "";
    }

    public boolean isTall() {
        return tall;
    }

    public void setTall(boolean tall) {
        this.tall = tall;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public long getCedula() {

        return this.cedula;
    }

    public void setCedula(long cedula) {

      this.cedula = cedula;
    }

    public String getPrimerNombre() {

        return this.primerNombre;
    }

    public void setPrimerNombre(String primerNombre) {

      this.primerNombre = primerNombre;
    }

    public String getSegundoNombre() {

        return this.segundoNombre;
    }

    public void setSegundoNombre(String segundoNombre) {

      this.segundoNombre = segundoNombre;
    }

    public String getApellido() {
        return apellido;
    }
    
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getSegungoApellido() {
        return segungoApellido;
    }

    public void setSegungoApellido(String segungoApellido) {
        this.segungoApellido = segungoApellido;
    }

    public int getEdad() {
        return edad;
    }
    
    public void setEdad(int edad) {
        this.edad = edad;
    }
}
