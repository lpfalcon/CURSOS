package library;

import java.util.ArrayList;
import java.util.Date;

public class Main {
    static ArrayList<Publication> publications = new ArrayList<Publication>();
    public static void main(String[] args) {

        Publication video = new Video("1", "Video 1", 1995, "Youtube", 30);
        Publication newsPaper = new NewsPaper("2", "NewsPaper 1", 1996, "NewsPaper", new Date() );
        Publication video2 = new Video("3", "Video 2", 2000, "Vimeo", 50);
        Publication video2Update = new Video("3", "Video 3", 2000, "TikTok", 50);

        add(video);
        add(newsPaper);
        add(video2);
        System.out.println("*********************");
        System.out.println(getAll().toString());

        remove("2");
        System.out.println("*********************");
        System.out.println(getAll().toString());

        update("3", video2Update);
        System.out.println("*********************");
        System.out.println(getAll().toString());
        
    }


     public static void add(Publication data) {

        publications.add(data);
    
    }

    public static ArrayList<Publication> getAll(){

        return publications;

    }

    public static void remove(String ISBN ){
        Publication findPublication = publications.stream()
                .filter( element -> element.getISBN() == ISBN)
                .findFirst()
                .get();
        
       publications.remove(findPublication);

    }

    public static void update(String ISBN, Publication data){

        Publication findPublication = publications.stream()
                .filter( element -> element.getISBN() == ISBN)
                .findFirst()
                .get();
        int index = publications.indexOf(findPublication);
        publications.set(index, data);

    }

}

