var readlinesync=require("readline-sync")

var name=readlinesync.question("what is your name? ")
console.log("welcome  "+name)

var date = readlinesync.question("enter the date of your birth ");
var month=readlinesync.question("enter the month of your  birth ");
var year=readlinesync.question("enter the year of your birth ");

if(date<=31 && date>=1 && month>=1 && month<=12 && year>=1910 && year<=2020){
     console.log("your date of birth",date+"/"+month+"/"+year)

if(year%100!=0 && year%4==0){
  console.log("leap year")
}else{
  console.log("not leap year")
}
}else {
  console.log("please enter valid number")
}


