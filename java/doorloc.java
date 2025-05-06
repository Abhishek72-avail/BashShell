import java.util.Scanner;
// This program checks if the entered door code is correct or not.
public class doorloc {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int doorCode = sc.nextInt();

    // The correct door code is 1337.
    
    if (doorCode == 1337) {
      System.out.println("Correct code. The door is now open.");
    } else {
      System.out.println("Wrong code. The door remains closed.");
    }
  }
}