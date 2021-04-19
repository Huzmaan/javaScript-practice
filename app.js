// var a = 5
// var b = 89
// var c = a+b
// alert (c)



// var a = 14
// var b = 15
// var c =b*a
// alert (c)

//var x = "Enter Your Value"
//var y = "Your Value is"
// var a = +prompt("Enter value", "Your value is")
// var b = a+ 10;
// console.log(b)
//document.write("This Output Is"+ "" +B )

// var age = +prompt("Enter Your Age");
// if(age == 18){
//     alert("your Age is equal")
// }
// else if(age < 18){
//     alert("your Age Is Less")
// }
// else{
//     alert("you are no more with less Age")
// }

// var age = +prompt("your Age is");
// var gender = prompt("your Gender Is")
// if(age > 18 && gender == "male"){
//     alert("You Are Allow to Ride")
// }
// else{
//     alert("you Are Not Allow")
// }

// var a = "5"
// if(a == 5){
//     alert(true)
// }
// else{
//     alert(false)
// }

// var x = 5;
// var y = 10;
// var a = 30;
// var b = 15;
// if(x+y === a-b){
//     alert("Correct Answer")
// }
// else{
//     alert("Incorrect Answer")
// }

// var percent = +prompt("Enter Your Percentage")
// if(percent >= 80 && percent <=100){
//     alert("A+")
// }
// else if(percent >= 70 &&(Dono Conditon Sahi ho to && use hota hai) percent <=80){
//     alert("A")
// }
// else if(percent >= 60 && percent <=70){
//     alert("B")
// }
// else if(percent >= 50 && percent <=60){
//     alert("C")
// }
// else if(percent >= 40 && percent <=50){
//     alert("D")
// }
// else if(percent >= 33 && percent <=40){
//     alert("E")
// }
// else if(percent >= 0 && percent <=33){
//     alert("F")
// }
// else{
//     alert("You Did Not Correct Percetage")
// }

// for(var  x=1; x<=10; x++){
//     document.write(x + "<br>x")
// }


// for(var i=1; i <= 10; i++){
//     document.write("2" + "x" + i + "=" + 2*i + "<br>" )
// }
// for(var i=0 ; i > 0; i++){
//     console.log(hello)
// }
// for(var i=0;i <=5;i++){
//     for(var j=0;j <=3;j++){
//         document.write("Pakistan Zindabad" + "<br>")
//     }
// }

// var firstNames =["wasif","zia","huzmaan"]
// var lastNames  =["Farhan","zulfi"]

// for(var i=0 ;i < firstNames.length;i++){
//     for(var x=0;x < lastNames.length;x++){
//         console.log(firstNames[i] + "" +lastNames[x])
//     }
// }

// for (var i = 0;i < 10;i++){
//     for (var j =0; j < i;j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }



// var val1= prompt("Enter Your Value")
// var sign= prompt("Enter Your Operator")
// var val3 = prompt("Enter Your Value")
// console.log(val1+sign+val3)
// if(sign ==="+"){
//     alert(val1+val3)
// }else if(sign ==="-"){
//     alert(val1-val3)
// }else if(sign ==="*"){
//     alert(val1*val3)
// }else if(sign ==="/"){
//     alert(val1/val3)
// }else if(sign ==="%"){
//     alert(val1/val3*100"%")
// }
//  Changing case

// var car = prompt("Enter Your Car")
//   car = car.toLowerCase()
// var arr = ["bmw", 'audi', "fortuner"]
// var found = "";
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === car) {
//         found = "found"
//         alert("Car Has Found")
//         break;
//     }
// }
// if (found !== "found"){
//     alert("Car has not found");
// }
// console.log(car) 

            //   REPLACING TEXT
// var text = "A modern CSS framework for faster and better responsive web pages"
// var indexnum = text.indexOf("modern CSS")
// var firsttext = text.slice (0,indexnum);
// var secondtext =  "MODERN css";
// var thirdtext = text.slice (indexnum + 10);
// console.log(firsttext + secondtext + thirdtext)

// var text = "A modern CSS framework for faster and better responsive  for web pages"
// var indexnum = text.lastIndexOf("for")
// var firsttext = text.slice (0,indexnum);
// var secondtext = "FOR";
// var thirdtext = text.slice (indexnum + 10);
// console.log(firsttext + secondtext + thirdtext) 
                     //FIND VARIABLE IN INDEX
//var e = "Huzmaan";
//console.log( e.charAt(4));
                      //REPLACE TEXT 
//  var text = "This is practice";
//  var replacing = text.replace("is practice" , " of javaScript");
//  console.log(replacing)
                    //double replacing text
//   var text = "This is practice This is practice This is practice";
//   var replacing = text.replace(/is practice/g , " of javaScript");
//   console.log(replacing)
                 //math method
// var num = 1.6;
// var round = Math.round(num);
// var round = Math.ceil(num);
// var round = Math.floor(num);
// console.log(round)
// console.log(round)
// console.log(round)
        //RONDOM MATH METHOD
// var headuser =prompt("enter your headsname");
// var taisuser = prompt ("enter your tailsname");
// var toss = Math.random()  *2;
// var floor = Math.floor(toss);
// if(floor === 0){
//     alert("head" + " " + headuser + " " +  "win the match" );
// }else{
//     alert("tail" + "  " + taisuser + " " + "win the match" );
// }
              //change variable in number
// var num= parseInt  ("10");
// console.log(num)
              //change Number in string
// var num = 20;
// console.log(num.toString())
            //control length of decimal number
// var num = 45.5645346445;
// var count = num.toFixed(2);
// console.log(count)

// var a = new Date()
// console.log(a)

// var dob = new Date("Dec 22 2001");
// var dobmilli = dob.getTime();
// var today = new Date();
// var todaymilli = today.getTime();
// console.log(dobmilli);
// console.log(todaymilli);
// var diff = (todaymilli - dobmilli);
// console.log(diff);
// var diffyear = diff / (1000 * 60 *60 *24 *30 *12);
// console.log(diffyear);
// var round = Math.floor(diffyear);
// console.log(round)

// var a = new Date();
// a.setDate("15");
// a.setHours("15")
// console.log(a)

                   //Function Chapter
// function add(a,b,c){
//         alert(a+ b + c)
// }
// add(5, 5 ,11);

// function foo(a,b = 3){
//         return a +b
// }
// console.log(foo(1,5))

// function foo(){

// }
// console.log(foo(1,5))

                 //Switch Chapter
// var name =prompt("Enter Your Name");
// switch(name){
//    case "Huzmaan":
//            alert("Hello Huzmaan")
//            break;
//    case "Zia":
//            alert("Hello Zia")
//            break;
//    default:
//    alert("Hello")        
// }
                  //while loop & do while loop
//  var a=0;
//  while(a<10){
//          console.log(a)
//          a++;
//  }
// var a = 0;
// do{
//         console.log(a)
//         a++;
// }while(a<10);

// function foo(){
//         alert("HelloWorld")
// } 


// function practice(javaScript){
//         alert(javaScript)
// }

// function getName(){
//         var name = document.getElementById("name")
//         console.log(name.value)
//  }

// name.value = ""

// var a = prompt("Enter Your Number");

// if(a % 2===0){
//         alert("This Is Even Number")
// }else{
//         alert("This Is Odd Number")
// }

// var a = prompt("Enter Your Number")
// var abc= "yes"
// for( var i=2;i<a;i++){
//         if(a %i===0){
//                  abc = "no"
//                 alert("This  not Prime Number")
//                 break;
// }
// }
// if( abc ==="yes"){
        
//         alert("This a prime number")
// }
// var a = prompt("Enter Your Value");
// for (var i=1;i<=a;i++){
//      document.write(i + "<br>")
// }
// var a =prompt("Enter Your Number");

// var a = prompt("Enter Your Value");
// var arr = [""];
// for (i=1;i>=arr.length;i++){
//         if(i===arr.length){
//                 alert("this is highest number")
//         }
         
//  }
// var c =prompt("Enter a Value")
var b=[6,2,8,4,7,5,9];
var a = b[0]
for (var i =0;i<b.length;i++){
        if(a<b[i]){
                a=b[i]
        
        }

}alert(a)
// var x =prompt("Enter a Value")
var y=[6,2,8,4,7,5,9];
var z = y[0]
for (var i =1;i<y.length;i++){
        if(y[i]<z){
                z=y[i]
        
        }

}alert(z)

// var a=[1,2,3]
// a[1]