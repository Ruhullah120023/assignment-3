//  https://github.com/Ruhullah120023/assignment-3

// Kilometer To Meter

function kilometerToMeter(kilometer) {
    var result = kilometer * 1000;
    return result;
}

var meter = kilometerToMeter(5);
console.log("Total meter is ", meter);

// Budget Calculator

function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    return watchPrice + mobilePrice + laptopPrice;
}

var result = budgetCalculator(4, 2, 1);
console.log(result);

// Hotel Cost


function hotelCost(cost) {
    // 1 theke 10 din 100 tk kre 11 theke 20 porjonto 80 tk 21 theke upore 50 tk kre
    var stay = 25;
    var rent = 0;
    if (stay <= 10) {
        rent = stay * 10;
    }
    else if (stay <= 20) {
        var first10Days = 10 * 100;
        var remainingDays = stay - 10;
        var second10Days = remainingDays * 80;
        rent = first10Days + second10Days;
    }
    else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remainingDays = stay - 20;
        var third20Days = remainingDays * 50;
        rent = first10Days + second10Days + third20Days;
        return rent;
    }
}
var rent = hotelCost(25);
console.log(rent);



// Mega Friends

var friends = ["Nurullah", "Salman", "Anik", "Akib Jabed", "Tawsif Taher", "Arif Ullah"];
var maxWord = friends[0]
function megaFriends(friends) {
    for (var i = 0; i < friends.length; i++) {
        var largeName = friends[i];
        if (largeName.length > maxWord.length) {
            maxWord = largeName;
            return largeName;
        }
    }
}
var largestName = megaFriends(friends);
console.log(largestName);