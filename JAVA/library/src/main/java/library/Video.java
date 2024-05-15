package library;

public class Video extends Publication {
    
    private int duration;
    
    public Video(String ISBN, String name, int year, String author, int duration) {
        super(ISBN, name, year, author);
        this.duration = duration;
        //TODO Auto-generated constructor stub
    }
    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }


}
