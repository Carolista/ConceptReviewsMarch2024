namespace CSharpReviews;

public class SeeSaw : PlaygroundEquipment
{
    public SeeSaw(
        string name,
        double height,
        double width,
        double length,
        double minClearance,
        List<string> materials
    )
        : base(name, height, width, length, minClearance, 2, materials) { }

    public override void Play(int numberOfKids)
    {
        if (numberOfKids != maxKids) {
            Console.WriteLine("Hey! You need exactly 2 kids for this one!");
            return;
        }
        NumKids = numberOfKids;
        Console.WriteLine("Up and down they go, back and forth!");
    }
}
