using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;

            var activities = new List<Activity>
            {
                new() {
                    Title = "Christmas Train Rid",
                    Date = new DateTime(2023, 12, 31),
                    Description = "Taking a train ride in Chattanooga where you will ride through a six-mile, u-shaped tunnel, and see the Christmas lights.",
                    Category = "railway",
                    City = "Chattanooga",
                    Venue = "Tennessee Valley Railroad Museum",
                },
                new() {
                    Title = "Sun n Fun",
                    Date = new DateTime(2024, 4, 9),
                    Description = "Sun 'n Fun Aviation Expo is an annual air show held in Lakeland, Florida during the month of April. The event usually lasts for one week, and primarily features general aviation airshows and showplanes, but also includes other aviation-related activities, such as hot air ballooning, fly-ins, and educational forums.",
                    Category = "flight",
                    City = "Lakeland, FL",
                    Venue = "KLAL",
                },
                new() {
                    Title = "Aero Showcase",
                    Date = new DateTime(2024, 10, 18),
                    Description = "The Aero Showcase at DeLand, FL 2023 is a highly anticipated annual event that highlights the latest developments and advancements in Sport, Recreational, and General Aviation.",
                    Category = "flight",
                    City = "DeLand, FL",
                    Venue = "KDED",
                },
                new() {
                    Title = "Beach Vacation",
                    Date = DateTime.UtcNow.AddMonths(2),
                    Description = "Time to spend a weekend on the beach in Gulf Shores, Alabama. The sands are white and the water is warm.",
                    Category = "travel",
                    City = "Gulf Shores, AL",
                    Venue = "Beach",
                },
                new() {
                    Title = "Date Night",
                    Date = DateTime.UtcNow.AddMonths(3),
                    Description = "Time to go watch a movie.",
                    Category = "film",
                    City = "Gainesville, GA",
                    Venue = "Movie Theater",
                },
                new() {
                    Title = "Dinner Date",
                    Date = DateTime.UtcNow.AddMonths(4),
                    Description = "Time for a nice dinner at our favorite seafood restaurant.",
                    Category = "food",
                    City = "Buford, GA",
                    Venue = "Juicy Crab",
                },
                new() {
                    Title = "Museum Visit",
                    Date = DateTime.UtcNow.AddMonths(5),
                    Description = "We will visit the High Museum of Art in Atlanta, GA.",
                    Category = "culture",
                    City = "Atlanta, GA",
                    Venue = "High Museum of Art",
                },
                new() {
                    Title = "Future Activity 6",
                    Date = DateTime.UtcNow.AddMonths(6),
                    Description = "Activity 6 months in future",
                    Category = "music",
                    City = "London",
                    Venue = "Roundhouse Camden",
                },
                new() {
                    Title = "Future Activity 7",
                    Date = DateTime.UtcNow.AddMonths(7),
                    Description = "Activity 7 months in future",
                    Category = "travel",
                    City = "London",
                    Venue = "Somewhere on the Thames",
                },
                new() {
                    Title = "Future Activity 8",
                    Date = DateTime.UtcNow.AddMonths(8),
                    Description = "Activity 8 months in future",
                    Category = "film",
                    City = "London",
                    Venue = "Cinema",
                }
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}