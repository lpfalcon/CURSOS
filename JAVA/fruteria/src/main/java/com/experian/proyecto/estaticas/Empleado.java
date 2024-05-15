package com.experian.proyecto.estaticas;

public class Empleado extends Persona  implements Comparable  {

    public Empleado(long cedula, String primerNombre, int edad) {
        super(cedula, primerNombre, edad);
        // TODO Auto-generated constructor stub
    }

    @Override
    public int compareTo(Object object) {
        Empleado otroEmpleado;
        otroEmpleado = (Empleado) object;

        if (this.code < otroEmpleado.code) {
            return -1;
        }

        if (this.code > otroEmpleado.code) {
            return 1;
        }

        return 0;

    }

    private long code;

    public long getCode() {
        return code;
    }

    public void setCode(long code) {
        this.code = code;
    }

    private double salary;

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    private String position;

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

}
