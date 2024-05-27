package library;

import java.util.ArrayList;
import java.util.Date;

public class Main {
    private static ArrayList<Publication> publications = new ArrayList<>();

    public static void main(String[] args) {

        Publication video = new Video("1",
                "Video 1", 1995,
                "Youtube", 30);
        Publication newsPaper = new NewsPaper("2",
                "NewsPaper 1", 1996,
                "NewsPaper", new Date());
        Publication video2 = new Video("3",
                "Video 2", 2000,
                "Vimeo", 50);
        Publication video2Update = new Video("3", "Video 3", 2000, "TikTok", 50);

        add(video);
        add(newsPaper);
        add(video2);
        System.out.println("*********************");
        getAll();


        remove("2");
        System.out.println("*********************");
        getAll();


        update("3", video2Update);
        System.out.println("*********************");
        getAll();

    }

    public static void add(Publication data) {

        publications.add(data);

    }

    public static void getAll() {
        
        for (Publication publication : publications) {
            
            System.out.println( "Publicacion " + ": " + publication);
            
        }

    }

    public static Publication getOne(String ISBN) {

        return publications.stream()
                .filter(publication -> publication.getISBN() == ISBN)
                .findFirst()
                .get();

    }

    public static void remove(String ISBN) {

        Publication findPublication = publications.stream()
                .filter(publication -> publication.getISBN() == ISBN)
                .findFirst()
                .get();

        publications.remove(findPublication);

    }

    public static void update(String ISBN, Publication data) {

        Publication findPublication = publications.stream()
                .filter(publication -> publication.getISBN() == ISBN)
                .findFirst()
                .get();

        int index = publications.indexOf(findPublication);
        publications.set(index, data);

    }

}
