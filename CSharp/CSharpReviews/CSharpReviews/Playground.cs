namespace CSharpReviews;

public class Playground
{
    // field, not property
    private readonly List<PlaygroundEquipment> equipmentList = [];

    // default constructor

    public void AddEquipment(PlaygroundEquipment equipment, double area)
    {
        if (area >= equipment.GetMinArea()) {
            equipmentList.Add(equipment);
            Console.WriteLine(equipment.Name + " added.");     
        }
        else 
        {
            Console.WriteLine("You need more space for that equipment.");
        }
    }
}
