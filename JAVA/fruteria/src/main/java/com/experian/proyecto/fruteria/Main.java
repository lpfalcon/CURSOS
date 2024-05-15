package com.experian.proyecto.fruteria;

public class Main {

    public static void main(String[] args) {
        int number, acumNumber, value;
        int count = 0;
        boolean condition, isEven;
        String[] strings = {"Value1", "Value 2", "Value 3"};
        double[] numbers = new double[10];
        numbers[0] = 5;
        numbers[1] = 10;
        numbers[2] = 10.5;
        numbers[3] = 10;
        numbers[4] = 1;
        numbers[5] = 10;
        numbers[6] = 13.4;
        numbers[7] = 15;
        numbers[8] = 19;
        numbers[9] = 20;

        condition = true;
        number = 18;
        /**
         * +, -, *,/, %
         * Y: &&
         * O: ||
         * Comparaciones: >=, >,<, <=, ==, !=
         * Negation: !
         * -- : Disminuye en uno el valor entero
         * ++: Aumenta en uno el valor entero
         * +=: Aumenta en una catidad el valor numerico
         * -=, *=, /= 
         */

        // IF

        if (number >= 5 && number <= 28) {
            System.out.println("El numero " + number + " esta entre 5 y 8");
        } else {
            System.out.println("Esta fuera del rango");
        }

        // SWITCH
        switch (number) {
            case 2:
                System.out.println("Es 2");
                break;
            case 3:
                System.out.println("es 3");
                break;
            default:
                System.out.println("No es ninguno de los valores comparados");
                break;
        }

        // TERNARIOS
        // varible = <condicion> ? <Valor si verdadero> : <Valor si falso>

        isEven = (number % 2 == 0) ? true : false;

        // while: while(<condition>)
        
        while (count <= 10) {
            System.out.println(count);
            count = count + 1;
        }

        acumNumber = 5;
        value = acumNumber++;
        System.out.println(value+" value ");
        System.out.println(acumNumber+" AcumNumber");

        count = 0;
        do {
            System.out.println(count);
            count++;
        } while (count<=10);

        // FOR: for(<inicialitazion>, <condition>, <increment>)

        for (number=10, value = 3; number <=20 && value< 10; number++, value++ ) {
            System.out.println(number+"-"+value);
        }

        // foreach: for (<tipo variable> <variable> : <Arreglo>)

        for (double doubleValue : numbers) {
            System.out.println(doubleValue);
        }
    }
}