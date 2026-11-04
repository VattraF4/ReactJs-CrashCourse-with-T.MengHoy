import java.util.Scanner; // Old way of reading input
public class java {

    public static void main(String[] args) {

        //Old way of reading input
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a String: ");
        String string = scanner.nextLine();
        System.out.println("You entered: " + string);
        scanner.close();

        //New way of reading input
        String input = IO.readln("Enter a string: ");
        IO.print("You entered: " + input);
    }
}