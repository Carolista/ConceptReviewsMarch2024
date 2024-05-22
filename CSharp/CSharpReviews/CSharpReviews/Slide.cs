namespace CSharpReviews;

public class Slide : PlaygroundEquipment
{
    public Slide(
        string name,
        double height,
        double width,
        double length,
        double minClearance,
        int maxKids,
        List<string> materials
    )
        : base(name, height, width, length, minClearance, maxKids, materials) { }

    public override void Play(int numberOfKids)
    {
        if (numberOfKids > maxKids) {
            Console.WriteLine("Hey! You can't have more than " + maxKids + "!");
            return;
        }
        NumKids = numberOfKids;
        Console.WriteLine("Wheeeeeeeeeeeeeeeeee!");
    }
}
