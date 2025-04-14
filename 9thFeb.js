//Problem Create an object representing a type of tea with properties name,type and caffeine content
const teas = {
    name : "Lemon tea",
    type : "Green",
    caffeine : "Low"
};
//Problem : Access and print the name and type properties of the tea object.
console.log(teas.name);
console.log(teas["type"]);

//Problem: Add a new Property origin to the tea object

teas.origin = "China country";
console.log(teas);

//Problem : Change the caffeine level to the tea object to medium

teas.caffeine = "Medium";
console.log(teas);

//Problem : Remove the Type property from the tea object
delete teas.type;
console.log(teas);