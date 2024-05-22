namespace CSharpReviews;

public abstract class PlaygroundEquipment
{
    // Static field
    private static int nextId = 1;

    // Id and name set at instantiation
    public readonly int id;

    // General specifications set at instantiation
    public readonly double height;
    public readonly double width;
    public readonly double length;
    public readonly double minClearance;
    public readonly int maxKids;
    public readonly List<string> materials = [];

    // Properties to manage state of object
    public string Name { get; set; }
    public int NumKids { get; set; } = 0;
    public bool ClosedForRepairs { get; set; } = true;

    // Constructor
    protected PlaygroundEquipment(
        string name,
        double height,
        double width,
        double length,
        double minClearance,
        int maxKids,
        List<string> materials
    )
    {
        id = nextId;
        nextId++;
        Name = name;
        this.height = height;
        this.width = width;
        this.length = length;
        this.minClearance = minClearance;
        this.maxKids = maxKids;
        this.materials = materials;
    }

    // Static getter only for nextId
    public static int GetNextId()
    {
        return nextId;
    }

    // Instance methods
    public void PrintSpecifications()
    {
        Console.WriteLine(Environment.NewLine + "Name: " + Name);
        Console.WriteLine("Dimensions (ft): " + height + "H x " + length + "L x " + width + "W");
        Console.WriteLine("Materials: " + string.Join(", ", materials));
        Console.WriteLine("Minimum clearance (ft): " + minClearance);
        Console.WriteLine("Minimum area needed (sqft): " + GetMinArea() + Environment.NewLine);
    }

    public double GetMinArea()
    {
        return (length + minClearance * 2) * (width + minClearance * 2);
    }

    public void CloseForRepairs()
    {
        ClosedForRepairs = true;
    }

    public void Reopen()
    {
        ClosedForRepairs = false;
    }

    // Abstract method to be defined in subclasses
    public abstract void Play(int numberOfKids);
}
