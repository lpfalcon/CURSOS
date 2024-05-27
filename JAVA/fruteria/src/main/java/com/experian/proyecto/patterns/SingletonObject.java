package com.experian.proyecto.patterns;

public final class SingletonObject {

    private final static SingletonObject uniqueInstance  = new SingletonObject();;

    // private String status;
    
    private SingletonObject() {

    }

    public synchronized static SingletonObject getInstance() {

        return SingletonObject.uniqueInstance;
    }

    public static SingletonObject getUniqueInstance() {
        return uniqueInstance;
    }



    // public String getStatus() {
    //     return status;
    // }

    // public void setStatus(String status) {
    //     this.status = status;
    // }

}
