public class InstanceScope
{
    private String instanceVariable = "Hello! I'm an instance variable!";
    private static int counter = 0; 
 
    public InstanceScope()
    {
        System.out.println("In the constructor:  " + instanceVariable);
        counter++;
        System.out.println("Counter: " + counter);
    }
    
    public void method1()
    {
        System.out.println("and in method1: " + instanceVariable);
        counter++;
        System.out.println("Counter: " + counter);
    }
    
    public void method2()
    {
        System.out.println("and in method2: " + instanceVariable);
        counter++;
        System.out.println("Counter: " + counter);
    }
    
    public static void main(String[] args)
    {
        System.out.println("instanceVariable exists throughout the entire class.");
        System.out.println();
        InstanceScope scope = new InstanceScope();
        scope.method1();
        scope.method2();
    }
}