package com.experian.proyecto.figura;

public class Circle extends Figure{

    private double ratio;

    Circle( double ratio )
    {
        this.ratio = ratio;

    }
    public double getRatio() {
        return ratio;
    }

    public void setRatio(double ratio) {
        this.ratio = ratio;
    }

    @Override
    public double getArea() {
        return Math.PI * Math.pow(this.ratio, 2);
    }

    @Override
    public double getPerimetro() {
        return 2 * Math.PI * this.ratio;
    }

}
