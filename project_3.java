import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Scanner;

public class project_3 {
    public static void main(String[] args) throws Exception {
        try (Scanner in = new Scanner(System.in)) {
            System.out.println("Enter Your Name :");
            String name = in.next();

            System.out.println("Enter Your Contact Number :");
            String number = in.next();

            in.nextLine();
            System.out.println("Enter your Address :");
            String address = in.nextLine();

            System.out.println("Enter your customer ID :");
            int ID = in.nextInt();

            in.nextLine();
            System.out.println("Enter Your Suggestion/feedaback :");
            String suggestion = in.nextLine();

            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                Connection project = DriverManager.getConnection("jdbc:mysql://localhost:3306/project", "jdbc",
                        "priyanshu15042003");
                PreparedStatement stm = project.prepareStatement(
                        "insert into data (name,Number,Address,CustomerID,Feedback)" + "values (?,?,?,?,?)");
                stm.setString(1, name);
                stm.setString(2, number);
                stm.setString(3, address);
                stm.setInt(4, ID);
                stm.setString(5, suggestion);
                stm.executeUpdate();
            } catch (Exception e) {
                System.out.println(e);
            }
        }

    }
}