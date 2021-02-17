var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
        {
            name: "bar",
            activities: ["be grumpy", "eat bread omblet"],
            weight: 8,
            furcolor: "white"
        },
        {
            name: "foo",
            activities: ["sleep", "pre-sleep naps"],
            weight: 3
        },
    ]
}
// added height to Fluffy
cat.height = 25;
// added weight to Fluffy
cat.weight = 4;
// updated Fluffy to Fluffyy
cat.name = "Fluffyy";
let totalWeight = 0;
let totalActivities = 0;
// Fluffyy's friends activities
for (i in cat.catFriends) {
    totalWeight = totalWeight + cat.catFriends[i].weight;
    totalActivities = totalActivities + cat.catFriends[i].activities.length
}
for (i in cat.catFriends) {
    console.log("Activitis of Fluffy Friend " + cat.catFriends[i].name + ":" + cat.catFriends[i].activities);
}
for (i in cat.catFriends) {
    console.log("Fluffy friend name:" + cat.catFriends[i].name);
}
console.log("TotalWeight of catFreinds: " + totalWeight);
console.log("Total Activities of all cats: " + (totalActivities + cat.activities.length));
for (i in cat.catFriends) {
    cat.catFriends[i].activities.push("Hide-and-Seek", "Food Hunting");
    console.log("Added two activites to " + cat.catFriends[i].name + " : " + cat.catFriends[i].activities);
}
// updated fur color of bar
for (i in cat.catFriends) {
    if (cat.catFriends[i].name === 'bar') {
        cat.catFriends[i].furcolor = 'green';
    }
}
console.log(cat);