// Problem 1
function seerToMon(seer) {
    // Check if input is string or not. Return error if its string.
    if (typeof seer == "string") {
        return "ERROR: Provide Numbers only to covert Seer into Mon";
    }
    // Check if input is positive or not. Return error if its negative.
    else if (seer <= 0) {
        return "ERROR: Seer amount cannot be negative values";
    }

    var mon = seer / 40;
    return mon;
}

/* --------------------------------------------------
    Testing for Problem 1

    Test - 1:
    console.log(seerToMon(527));
    Output:
    13.175

    Test -2:
    console.log(seerToMon("onekDhan"));
    Output: 
    ERROR: Provide Numbers only to covert Seer into Mon
--------------------------------------------------- */


// Problem 2
function totalSales(shirts, pants, shoes) {
    // Check if inputs are anything other than numbers or a negative value. Return error if it is.
    if (typeof shirts != "number" || shirts <= 0) {
        return "ERROR: Invalid shirts quantity. Please provide only positive numbers as inputs";
    }
    else if (typeof pants != "number" || pants <= 0) {
        return "ERROR: Invalid pants quantity. Please provide only positive numbers as inputs";
    }
    else if (typeof shoes != "number" || shoes <= 0) {
        return "ERROR: Invalid shoes quantity. Please provide only positive numbers as inputs";
    }
    // Declare item prices
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    // Calculate total cost
    var totalPrice = (shirtPrice * shirts) + (pantPrice * pants) + (shoePrice * shoes);
    return totalPrice;
}

/*------------------------------------------------------------------------------------
    Testing for Problem 4

    Test - 1:
    console.log(totalSales(6, 6, 3));
    Output:
    3300

    Test - 2:
    console.log(totalSales(6, 6, "a"));
    Output:
    ERROR: Invalid shoes quantity. Please provide only positive numbers as inputs

    Test - 3:
    console.log(totalSales(6, true, 3));
    Output:
    ERROR: Invalid pants quantity. Please provide only positive numbers as inputs

    Test - 4:
    console.log(totalSales(-6, 6, 3));
    Output:
    ERROR: Invalid shirts quantity. Please provide only positive numbers as inputs
----------------------------------------------------------------------------------- */

// Problem 3
function deliveryCost(orders) {
    // Check if input is anything other than numbers or a negative value. Return error if it is.
    if (typeof orders != "number" || orders <= 0) {
        return "ERROR: Invalid orders quantity. Please provide only positive numbers as inputs";
    }

    // Declare order delivery cost
    const deliveryCost1 = 100;
    const deliveryCost2 = 80;
    const deliveryCost3 = 50;

    // Calculate total delivery cost
    let totalDeliveryCost = 0;
    for (var i = 0; i < orders; i++) {
        // Cost for first 100 orders
        if (i < 100) {
            totalDeliveryCost += deliveryCost1;
        }
        // Cost for orders between 100-200
        else if (i >= 100 && i < 200) {
            totalDeliveryCost += deliveryCost2;
        }
        // Cost for orders greater than 200
        else if (i >= 200) {
            totalDeliveryCost += deliveryCost3;
        }
    }

    // Return total delivery cost
    return totalDeliveryCost;
}
/* --------------------------------------------------------------------------------
    Testing for Problem 3

    Test - 1:
    console.log(deliveryCost(205));
    Output:
    18250

    Test - 2:
    console.log(deliveryCost(false));
    Output:
    ERROR: Invalid orders quantity. Please provide only positive numbers as inputs
----------------------------------------------------------------------------------- */

// Problem 4
function perfectFriend(friends) {
    // Check all elements of the array
    for (let name of friends) {
        // Check if the array element is anything other than string. Warn and skip the element if it is.
        if (typeof name != "string") {
            console.log(name + " :: WARNING: Element is not a string. Skipping this element");
            continue;
        }
        // // Check if the name is a string of length equal to 5. Return and stop the loop if found.
        else if (name.length == 5) {
            return name;
            break;
        }
    }
}


/* --------------------------------------------------------------------------------------
    Testing for Problem 4
    var myFriends = ["Abed", "Soma", 5, "Rumi", "Atik", true, "Sohan", "Fahim", "Hujur"];
    console.log(perfectFriend(myFriends));

    Output :
    5 :: WARNING: Element is not a string. Skipping this element
    true :: WARNING: Element is not a string. Skipping this element
    Sohan
---------------------------------------------------------------------------------------- */