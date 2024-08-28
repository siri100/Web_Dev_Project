

function HouseKeeper(name,yearsOfExperience,cleaningRepertoire) {
       this.name = name;
       this.yearsOfExperience = yearsOfExperience;
       this.cleaningRepertoire = cleaningRepertoire;
       this.clean = function () {
           alert("I can clean")
       }
}

var houseKeeper1 = new HouseKeeper("Over",2,["bathroom","lobby"])

console.log(houseKeeper1.clean())