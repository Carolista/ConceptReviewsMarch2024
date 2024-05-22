namespace CSharpReviews;

public class Swingset : PlaygroundEquipment
{
    public readonly int numSwings;

    public Swingset(
        string name,
        double height,
        double width,
        double length,
        double minClearance,
        List<string> materials,
        int numSwings
    )
        : base(name, height, width, length, minClearance, numSwings, materials)
    {
        this.numSwings = numSwings;
    }

    public override void Play(int numberOfKids)
    {
        if (numberOfKids > maxKids) {
            Console.WriteLine("Hey! There are only " + numSwings + " swings here!");
        }
        else {
            NumKids = numberOfKids;
            Console.WriteLine("These kids are going so high their stomachs must be flipping!");
            if (numberOfKids < numSwings) {
                Console.WriteLine("There are still " + (numSwings - numberOfKids) + " swings available.");
            }
        }
    }
}
