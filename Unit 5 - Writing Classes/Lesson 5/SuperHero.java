public class SuperHero
{
	private String name;
	private Power superPower;

	public SuperHero(String heroName, Power power)
	{
		name = heroName;
		superPower = new Power(power.getName(),power.getStrength());
	}
	
	public int getStrength()
	{
	    return superPower.getStrength();
	}
	
	public void setStrength(int strength)
	{
	    superPower.setStrength(strength);
	}
	
	public void setName(String theName)
	{
	    name = theName;
	}
	
	public void setPower(String name, int strength)
	{
	    //We need to call the mutators methods from the Power class to change the values of Power
	    superPower.setName(name);
	    superPower.setStrength(strength);
	}
	public String toString()
	{
	    return "Name: "+ name +", " + superPower;
	}
}
