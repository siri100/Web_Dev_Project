function whosPaying(namesArr){

       let lengthOfArr = namesArr.length -1
       let randomNum = Math.random() * lengthOfArr
       console.log(Math.round(randomNum))
       return namesArr[Math.round(randomNum)]

}

let namesArr = ['siri','sha','over','not over']

console.log(whosPaying(namesArr))
