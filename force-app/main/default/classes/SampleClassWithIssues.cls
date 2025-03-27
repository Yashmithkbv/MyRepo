public class SampleClassWithIssues {
    // Issue 1: Hardcoded credentials
    private static final String USERNAME = 'admin'; 
    private static final String PASSWORD = 'password123'; 

    public void processRecords() {
        // Issue 2: Unused variable
        String unusedVariable = 'This variable is not used';

        try {
            // Simulate some processing
            Integer result = 10 / 2;
        } catch (Exception e) {
            // Issue 3: Empty catch block
        }
    }
}
