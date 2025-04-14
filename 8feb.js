//create tea array
const teas = ["masala","chai","green tea","herbal tea","black tea","orange","oolong tea"]; 
console.log(teas);

//add Chamomile Tea
teas.push("Chamomile Tea");
console.log(teas);

//remove "oolong tea" from array
const index = teas.indexOf("oolong tea");
if (index > -1 )
{
    teas.splice(index,1);
}
console.log(teas);

//filter the list to only include teas that are caffeenated
const caffeenatedTeas = teas.filter(tea => tea !== ("herabal tea") );

//sort the list alphabetically
const test= ["🦃","🥚"];
test.sort();
console.log(test);

//for loop to print each tea
for (let i = 0; i < teas.length; i++) {
    console.log(teas[i]);
}

//use a for loop to count how many teas are caffeinated (exclude "herbal teas")
let caffeenatedTeas1 = 0
for (let i = 0; i < teas.length; i++) {
    if (teas[i] !== "herbal tea") {
        caffeenatedTeas1++;
    }
}

//use a for loop to create a new array with all tea names in upper case

const Uppercaseteas = [];
for (let i = 0; i < teas.length; i++) {
    Uppercaseteas.push(teas[i].toUpperCase());
}

console.log(Uppercaseteas);

//use a for loop to find the tea name with most characters
let longestTea = "";
for (let i=0 ; i < teas.length; i++) 
    {
        if(teas[i].length > longestTea.length) {
            longestTea = teas[i];
        }

    }

    console.log(longestTea);

    //use a for loop to reverse a reverse the array of teas in the array

    const reversedTeas = [];
    for ( let i = teas.length-1; i >= 0; i--) {
        reversedTeas.push(teas[i]);
    }
    console.log(reversedTeas);