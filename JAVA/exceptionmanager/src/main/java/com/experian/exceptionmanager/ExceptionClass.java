package com.experian.exceptionmanager;

public class ExceptionClass extends Exception {

    public ExceptionClass ( ) {

        super();

    }

    public ExceptionClass (String message ) {

        super( message );
        
    }

    public ExceptionClass ( String message, Throwable causeBy) {

        super(message , causeBy);

    }

}
