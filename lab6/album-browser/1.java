package lab2.problem_4;

public class Resistor extends Circuit {
    private double resistance;
    private double potentialDifference;

    public Resistor(double resistance) {
        this.resistance = resistance;
        this.potentialDifference = 0.0;
    }

    @Override
    public double getResistance() {
        return resistance;
    }

    @Override
    public double getPotentialDiff() {
        return potentialDifference;
    }

    @Override
    public void applyPotentialDiff(double V) {
        this.potentialDifference = V;
    }

    public boolean equals(Object o){

        if(this == o ) return true;
        if(o == null || getClass() != o.getClass()) return false;
        Resistor r = (Resistor)o;
        return getResistance() == r.getResistance() ;
    }

    @Override
    public String toString() {
        return "Resistor(" + resistance + "Ω, V=" + potentialDifference + ")";
    }
}