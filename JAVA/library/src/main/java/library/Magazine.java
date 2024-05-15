package library;

public class Magazine extends Publication {
    private int sequence;
    public Magazine(String ISBN, String name, int year, String author, int sequence) {
        super(ISBN, name, year, author);
        this.sequence = sequence;
        //TODO Auto-generated constructor stub
    }
    public int getSequence() {
        return sequence;
    }
    public void setSequence(int sequence) {
        this.sequence = sequence;
    }


}
