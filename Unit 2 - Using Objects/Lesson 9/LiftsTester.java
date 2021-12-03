public class LiftsTester
{
    public static void main(String[] args)
    {
        Lifts weights = new Lifts(183, 140, 220);
        
        // Create variables 
        Double percent = 0.75;
        double newSquat = 185;
        int numReps = 10;
        Integer barWeight = 180;
        
        // This method takes a Double
        weights.printSquatVolumeWorkout(percent);
        
        // We can still pass a double
        double lightPercent = 0.50;
        weights.printSquatVolumeWorkout(lightPercent);
        
        
        // This method takes a double
        weights.setSquat(newSquat);
        // Can still pass a Double
        Double newMax = newSquat + 5;
        weights.setSquat(newMax);
        
        
        // This method takes an int, but
        // accepts Integer
        System.out.println(weights.computePlateWeight(barWeight));
        
        // This method takes an Integer, but
        // accepts int
        weights.printSquatPyramidWorkout(numReps);
        
        
    }
}
