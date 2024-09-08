/* Navigating the Food Chain */

var eatsPlants = false;
var eatsAnimals = false;

var classFation = eatsPlants && ! eatsAnimals ? "herbivore":
          ! eatsPlants && eatsAnimals ? "carnivore":
          eatsAnimals && eatsPlants ? "omnivore":
          "undefined";

          console.log(classFation);


        /* Musical Groups */

        var musicians =3;
        
         if(musicians ===1){
            console.log("solo");
        }else if(musicians ===2){
            console.log("duet");
        }else if(musicians ===3){
            console.log("trio");
        }else if(musicians ===4){
            console.log("quartet");
        }else if(musicians >4){
            console.log("this is a large group");
        } else{
            console.log("Not group");
        }


        /* Murder mystery */


var room = "ballroom";
var suspect = "Mr. Kalehoff";


var weapon = "";
var solved = false;

if (room === "ballroom") {
    weapon = "poison";
} else if (room === "gallery") {
    weapon = "trophy";
} else if (room === "billiards room") {
    weapon = "pool stick";
} else if (room === "dining room") {
    weapon = "knife";
}

if ((room === "dining room" && suspect === "Mr. Parkes") ||
    (room === "gallery" && suspect === "Ms. Van Cleve") ||
    (room === "billiards room" && suspect === "Mrs. Sparr") ||
    (room === "ballroom" && suspect === "Mr. Kalehoff")) {
    solved = true;
}


if (solved) {
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
} else{
    console.log("Try agin");
}

/* Checking Your Balance */

var balance = -325;
var checkBalance = true;
var isActive = false;

if (checkBalance) {
    if (isActive && balance > 0) {
        console.log(`Your balance is $${balance}.`);
    } else if (!isActive) {
        console.log("Your account is not active.");
    } else if (balance === 0) {
        console.log("Your account is empty.");
    } else if (balance < 0) {
        console.log("Your balance is negative. Please contact the bank.");
    }
} else {
    console.log("Thank you. Have a nice day!");
}




/* Ice Cream */

var flavor = "vanilla";
var vessel = "cone";
var toppings = "sprinkles";

if ((flavor === "vanilla" || flavor === "chocolate") &&
    (vessel === "cone" || vessel === "bowl") &&
    (toppings === "sprinkles" || toppings === "peanuts")) {
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`);
}
