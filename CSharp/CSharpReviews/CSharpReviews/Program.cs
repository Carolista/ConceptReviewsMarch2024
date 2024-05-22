using CSharpReviews;

// Create playground
Playground playground = new();

// Create equipment
Slide slide = new("Medium Slide", 5, 2, 10, 5, 4, ["metal"]);
Swingset swingset = new("Swingset", 10, 10.5, 20, 10, ["metal", "vinyl"], 4);
SeeSaw seeSaw = new("See-saw", 5, 1.5, 15, 3, ["metal", "wood"]);
JungleGym jungleGym = new("Jungle Gym", 7, 12, 6, 5, 6, ["metal"]);

// Try adding 
playground.AddEquipment(slide, 70);
slide.PrintSpecifications();
playground.AddEquipment(slide, 250);

swingset.PrintSpecifications();
playground.AddEquipment(swingset, 1300);

seeSaw.PrintSpecifications();
playground.AddEquipment(seeSaw, 200);

jungleGym.PrintSpecifications();
playground.AddEquipment(jungleGym, 400);

// Try playing
slide.Play(6);
slide.Play(2);
swingset.Play(3);
seeSaw.Play(3);
seeSaw.Play(2);
jungleGym.Play(4);

// Use static getter
Console.WriteLine(PlaygroundEquipment.GetNextId());
