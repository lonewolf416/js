// ==== Chapter :1 and Question :1

// alert("Hello World!")

// ==== Question :2

// alert("Error! Please enter a valid password");

// ==== Question :3

// alert("Welsome to JS land... \n Happy coding")

// ==== Question :4

// alert("Welsome to JS land...")
// alert("Happy coding")



// ==== Chapter :2 and Question :1

// var username;

// ==== Question :4

// alert("john doe")
// alert("15 years old")
// alert("Certified mobile application development")

// ==== Question :5

// var food="Pizza";
// alert(food + "\n" + food.slice(0,4) + "\n" + food.slice(0,3) + "\n" +food.slice(0,2) + "\n" +food.slice(0,1))

// ==== Question :6

// var email=prompt("enter your email");
// alert("my email address is " + email );

// ==== Question :7

// var book="A smarter way to learn javascript";
// alert("I am trying to learn from the book " + book)

// ==== Question :8

// document.write("Yah! i can write HTML content through javascript <br> ")

// ==== Question :9

// var a="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(a)



// ==== Chapter :3 and Question :1

// var age="21";
// alert("I am "+ age + " years old")

// ==== Question :3

// var birthyear=1998;
// document.write("my birth year is " + birthyear + "<br>" + "data type is number")

// ==== Question :4

// var name="John doe";
// var title="T Shirts";
// var quantity="5";
//  document.write( name + " ordered " + quantity + title +"(s)" +  " on XYZ Clothing store")


// ==== Chapter :4 and Question :1

// var x,y,z;

// ==== Question :2

// legal
// var name;
// var age;
// var Mydata;
// var myOccupation;
// Illegal 
// var 123;
// var 2blah;
// var 5;
// var @;

// ==== Question :3

// document.write("<b>" + " Rules for naming JS variables" + "<br>"+"<br>" + "<br>" + "</b>"  );
// var no="number";
// var let="letter";
// var dollar="$";
// var sens="sensitive"
// var key="keywords"
// document.write(" Variable names can only contain , " + no + "," + "$" + "and "+ "____."  + "For example $my_1stVariable" + "<br>");
// document.write(" Variables must begin with a " + let + ", " + dollar + " or " + "____." +" For example $name, _name or name" + "<br>");
// document.write(" Variable names are case " + sens + "<br>"); 
// document.write(" Variable names should not be JS " + key);


// ==== Chapter :5 and Question :2

// var first=prompt("enter first no")
// var second=prompt("enter second no")
// var sign=prompt("enter operator")
// if( sign === "+"){
//     document.write("sum of " + first + " and " + second + " is " + ((+first)+(+second)))
// }
// if( sign === "-"){
//     document.write("sum of " + first + " and " + second + " is " + (first)-(second))
// }
// if( sign === "*"){
//     document.write("sum of " + first + " and " + second + " is " + (first)*(second))
// }
// if( sign === "/"){
//     document.write("sum of " + first + " and " + second + " is " + (first)/(second))
// }
// if( sign === "%"){
//     document.write("sum of " + first + " and " + second + " is " + (first)%(second))
// }

// ==== Question :3

// var name;
// document.write("value after variable declaration is "+ "" + "<br>")
// name= 7;
// document.write("initial value is " + name + "<br>")
// var name=++name;
// document.write("Value after increment is " + name + "<br>")
// var name=(+name)+7;
// document.write("value after addition is " + name + "<br>") 
// name=--name;
// document.write("Value after decrement is " + name + "<br>")
// name=name%2;
// document.write("The remainder is " + name)

// ==== Question :4

// var value=600*5;
// document.write("Total cost to buy 5 tickets to a movie is " + value + "PKR")

// ==== Question :5

// document.write("<b>" +"Table of 6" + "<br>" + "</b>")
// for(var i=1; i<=10; i++){
    
//     document.write("6" + "x" + i + "=" + 6*i + "<br>")
// }

// ==== Question :6

// var cel=20;
// var far=70;
// var fahrenheit=(cel*9/5)+32;
// var celsius=(far-32)*5/9;
// document.write(cel + "C is " + fahrenheit +"F" + "<br>")
// document.write(far + "F is " + celsius +"C")

// ==== Question :7

// document.write("<b>" + "Shopping Cart" + "<br>" + "<br>" + "<br>" + "</b>")
// var item1=150;
// var item2=200;
// var quan1=3;
// var quan2=7;
// var ship=100;
// var cal1=item1*quan1;
// var cal2=item2*quan2;
// var result=(+cal1)+(+cal2)+(+ship);
// document.write("Price of item 1 is " +item1+ "<br>")
// document.write("Quantity of item 1 is " +quan1 + "<br>")
// document.write("Price of item 2 is " +item2+ "<br>")
// document.write("Quantity of item 2 is " +quan2 + "<br>")
// document.write("Shipping charges " +ship + "<br>" + "<br>")
// document.write("Total cost of your order is " + result)

// ==== Question :8

// var total=900;
// var obt=700;
// var res=obt*100;
// var result=res/900;
// document.write("Total marks: " +total+"<br>")
// document.write("Marks obtained: " +obt +"<br>")
// document.write("Percentage: " +result)

// ==== Quesstion :9

// var $=10;
// var riyal=25;
// var total=($*104.80)+(riyal*28)
// document.write("Total currency in PKR: " +total)

// ==== Question :10

// var no=6;
// var sums=(no+5*10/2);
// document.write("Result is:  " +sums)

// ==== Question :11

// var current=2020;
// var birth=1998;
// var age=current-birth;
// document.write("Current year: " + current + "<br>")
// document.write("Birth year: " + birth +"<br>")
// document.write("Your age: " + age)

// ==== Question :12

// var rad=10;
// var circum=(2*3.142*rad)
// var area=(3.142*rad**2)
// document.write("Radius of circle: " + rad + "<br>")
// document.write("Circumference of circle: " + circum +"<br>")
// document.write("The area is: " + area)

// ==== Question :13

// var snack=" chips";
// var age=22;
// var max=50;
// var est=2;
// var cal=(max-age)*(est);
// document.write("Favorite snack: " + snack + "<br>")
// document.write("Current age: " + age + "<br>")
// document.write("Estimated age: " + max+ "<br>")
// document.write("Amount of snack per day: " + est+ "<br>")
// document.write("You will need " + cal + snack + " to last you until the ripe old age " +max)


// ==== Chapter :6-9 and Question :1

// var a=6;
// document.write("The value of a is: " +a + "<br>"+"<br>")
// a=++a;
// document.write("The value of ++a is: "+ a+ "<br>")
// document.write("Now the value of a is: "+ a+"<br>" + "<br>")
// a=a++;
// document.write("The value of a++ is: " +a+"<br>")
// a=++a;
// document.write("Now the value of a is: " +a + "<br>"+"<br>")
// a=--a;
// document.write("The value of a is: " +a+"<br>")
// document.write("Now the value of a is: " +a + "<br>" + "<br>")
// a=a--;
// document.write("The value of a is: " +a + "<br>")
// a=--a;
// document.write("Now the value of a is: " +a + "<br>")

// ==== Question :2

// var a=2,b=1;
// var result;
// result=--a;
// document.write("a is: " +a +"<br>")
// document.write("b is: " +b+  "<br>")
// document.write("result is: " +result +"<br>")
// result=--a - --b;
// document.write("a is: " +a +"<br>")
// document.write("b is: " +b+  "<br>")
// document.write("result is: " +result +"<br>")
// result=--a - --b + ++b;
// document.write("a is: " +a +"<br>")
// document.write("b is: " +b+  "<br>")
// document.write("result is: " +result +"<br>")
// result=--a - --b + ++b + b--;
// document.write("a is: " +a +"<br>")
// document.write("b is: " +b+  "<br>")
// document.write("result is: " +result +"<br>")

// ==== Question :3

// var name=prompt("Enter your name")
// document.write("Hello " + name)

// ==== Question :5

// var no;
// if(no=prompt("enter no")){
//     for(var i=1; i<=10; i++){
//         document.write(no + "x" + i + "=" + no*i + "<br>")
//     }

// }
// else{
//     for(var i=1; i<=10; i++){
//         document.write("5" + "x" + i + "=" + 5*i + "<br>")
//     }
// }

// ==== Question :6

// var sub1=prompt("Enter subject name")
// var sub2=prompt("Enter subject name")
// var sub3=prompt("Enter subject name")
// var total=100;
// var mark1=prompt("Enter your marks")
// var mark2=prompt("Enter your marks")
// var mark3=prompt("Enter your marks")
// var per1=(sub1*total)/100;
// document.write(sub1 + total + mark1 + per1)


// ==== Chapter :9-11 and Question :1

// var city=prompt("Enter city name");
// if(city==="karachi"){
//     document.write("Welcome to the city of lights")
// }
// else if(city==="lahore"){
//  document.write("Welcome to the city of too many people")
// }
// else if(city==="islamabad"){
//     document.write("Welcome to the city of early sleepers")
// }

// ==== Question :2

// var gender=prompt("enter gender");
// if (gender==="male") { 
//     document.write("Good morning, Sir");  } 
//  else if(gender==="female") { 
//     document.write("Good morning, Ma'am"); }

// ==== Question :3

// var color=prompt("Enter traffic signal color")
// if(color==="red"){
//     document.write("Must Stop!");
// }
// else if (color==="yellow"){
//     document.write("Ready to go");
// }
// else{ 
//     document.write("Move now");
// }

// ==== Question :4

// var fuel=+prompt("Enter remaining fuel")
// if (fuel<0.25){
//     document.write("Please refill the fuel in your car")
// }
// else{
//     document.write("You have enough fuel")
    
// }

// ==== Question :5

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
//     }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
//     }
//     var materialCost = 20000;
//     var laborCost = 2000;
//     var totalCost = materialCost + laborCost;
//     if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
//     }
//     if (true){
//         alert("True");
//         }
//         if (false){
//         alert("False");
//         }
//         if("car" < "cat"){
//             alert("car is smaller than cat");
//             }

// ==== Question :6

// document.write("<b>"+"MARK SHEET"+"</b>"+"<br>")
// var sub1=prompt("Enter your marks") 
// var sub2=prompt("Enter your marks")  
// var sub3=prompt("Enter your marks")  
// var total=prompt("Enter total marks")  
// var obt=(+sub1)+(+sub2)+(+sub3);
// document.write("Total marks: " + total +"<br>")
// document.write("Marks obtained are: " + obt +"<br>")
// var per=(obt*100)/total;
// document.write("Percentage: " + per +"%"+"<br>")
// if (per>=80){
//     document.write("Grade: " +"A-one" +"<br>")
//     document.write("Remarks: " +"Excellent" +"<br>")
// }
// else if(per>=70){
//     document.write("Grade: " +"A" +"<br>")
//     document.write("Remarks: " +"Good" +"<br>")
// }
// else if(per>=60){
//     document.write("Grade: " +"B" +"<br>")
//     document.write("Remarks: " +"You need to improve" +"<br>")
// }
// else{
//     document.write("Grade: " +"Fail" +"<br>")
//     document.write("Remarks: " +"Sorry")
// }

// ==== Question :7

// var secret_no=3;
// var guess=prompt("Guess the secret no")
// if(guess==secret_no){
//     document.write("Bingo! Correct answer")
// }
// else if(guess==++secret_no){
//     document.write("Close enough to the correct answer")
// }
// else{
//     document.write("Wrong answer!")
// }

// ==== Question : 8

// var no=3;
// if(n0 % 3 == 0){
//     doocument.write("no is divisible by 3")
// }
// else{
//     document.write("Not divisible")
// }

// ==== Question :9

// var no=prompt("Enter your no")
// if(no % 2==0){
//     document.write("no is even")
// }
// else{
//     document.write("no is odd")

// }

// ==== Question :10

// var temp=prompt("Enter temperature")
// if(temp>40){
//     document.write("Its too hot")
    
// }
// else if(temp>30){
//     document.write("The Weather today is Normal.")
// }
// else if(temp>20){
//     document.write(" Today’s Weather is cool.")
// }
// else if(temp>10){
//     document.write(" OMG! Today’s weather is so Cool.")
// }
// else{
//     document.write(" Too hot or too cold")
// }

// ==== Question :11

// var num1=prompt("Enter number")
// var ope=prompt("Enter operator")
// var num2=prompt("Enter number")
// if(ope=== "+"){
//         document.write((+num1)+(+num2))
        
//     }
//     else if(ope==="-"){
//         document.write(num1-num2)
//     }
//     else if(ope==="*"){
//         document.write(num1*num2)
//     }
//     else if(ope==="/"){
//         document.write(num1/num2)
//     }
//     else if (ope==="%"){
//         document.write(num1 % num2)
//     } 



// ==== Chapter :12-13 and Question :1

// var num=prompt("enter number or string");
// if(num>='A' && num<='Z'){
//     document.write("It is uppercase letter")
// }
// else if(num>='a' && num<='z'){
//     document.write("It is lower case letter")
// }
// else if(num>='0' && num<='9'){
//     document.write("It is number")
// }

// ==== Question :2

// var int1=prompt("Enter integer")
// var int2=prompt("Enter integer")
// if (int1==int2){
//     document.write("integers are equal")
// }
// else if(int1>int2){
//    document.write(int1 + " is larger")
// }
// else{
//     document.write(int2 + " is larger")
// }

// ==== Question :3

// var num=prompt("Enter number")
// if(num==0){
//     document.write("number is 0")
// }
// else if(num>0){
//     document.write("number is positive")
// }
// else{
//     document.write("number is negative")
// }

// ==== Question :4

// var char=prompt("Enter character")
// if(char == "A" || char == "E" || char == "I" || char == "O" || char == "U"){
//     document.write("True")
// }
// else{
//     document.write("False")
// }

// ==== Question :5

// var corr_pass="bleh";
// var pass=prompt("Enter your password");
// if(pass=""){
//     pass=prompt("Please enter your password")
// }
// else if(corr_pass=pass){
//     document.write("Correct! The password you entered matches the original password")
// }
// else{
//     document.write("Incorrect password")
// }

// ==== Question :6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// document.write(greeting = "Good day");}
// else{
// document.write(greeting = "Good evening");
// }

// ==== Question :7

// var time=prompt("Enter time");
// if (time>=0000 && time<1200){
//     document.write("Good morning")
// }
// else if(time>=1200 && time< 1700){
//     document.write("Good afternoon")
// }
// else if (time>=1700 && time<2100){
//     document.write("Good evening")
// } 
// else if(time>=2100 && time<=2359){
//     document.write("Good night")
// } 



// ==== Chapter :14-16 and Question :1

// var arr=[];

// ==== Question :3

// var arr=["name", "name2", "name3","name4"]

// ==== Question :5

// var boolArray = [true,false];
// document.write(boolArray);

// ==== Question :6

// var mixed=["name",12,"blah", 13,5]

// ==== Question :7

// document.write("QUALIFICATION" +"<br>" + "<br>")
// var qualification=["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PHD"]
// document.write("1. "+qualification[0] + "<br>" + "2. " +qualification[1]+"<br>" +"3. "+qualification[2]+ "<br>"+ "4. "+qualification[3]+"<br>"+ "5. "+qualification[4]+"<br>" + "6. "+qualification[5]+"<br>"+"7. "+qualification[6]+"<br>"+"8. "+qualification[7])

// ==== Question :8

// var student=["ali","zain","fahad"]
// var scores=[268,490,348]
// var total=500;
// var per=(scores[0]*100)/total;
// var per2=(scores[1]*100)/total;
// var per3=(scores[2]*100)/total;
// document.write("Score of ali is: "+ scores[0] + " Percentage:"+per +"<br>")
// document.write("Score of zain is: "+ scores[1] + " Percentage:"+per2+"<br>")
// document.write("Score of fahad is: "+ scores[2] + " Percentage:"+per3)

// ==== Question :9

// var color=["red","green","blue","yellow"];
// document.write(color + "</br>")
// var user=prompt("what color you want to add at the beginning ")
// color.unshift(user)
// document.write("a. "+color+"<br>")
// var end=prompt("what color you want to add at the end ")
// color.push(end)
// document.write("b. "+color+"<br>")
// color.splice(2,0,"brown","black")
// document.write("c. "+color+"<br>")
// color.shift();
// document.write("d. "+color+"<br>")
// color.pop()
// document.write("e. "+color+"<br>")
// var user=prompt("At what index you want to add color")
// var col=prompt("What color you want to add")
// color.splice(user,0,col)
// document.write("f. "+color+"<br>")
// var index=prompt("At what index you want to delete color ")
// var col=prompt("how many colors you want to delete ")
// color.splice(index,col)
// document.write("g. "+color+"<br>")

// ==== Question :10

// var score=[330,220,320,402]
// document.write("Scores of students is: " +score +"<br>")
// score.sort()
// document.write("ordered score is: " +score)

// ==== Question :11

// var cities=["karachi","islamabad","lahore","multan","sukkur"]
// document.write("Cities list: " + cities+"<br>")
// var selected=cities.slice(1,3)
// document.write("Selected cities are: " + selected)

// ==== Question :12

// var arr = ["This ", " is ", " my ", " cat"];
// document.write(arr+"<br>")
// var arry=arr.join('');
// document.write(arry)

// ==== Question :13

// var values=["keyboard","mouse","printer","pointer"]
// document.write("Devices: " +values +"<br>")
// document.write(values[0]+"<br>")
// document.write(values[1]+"<br>")
// document.write(values[2]+"<br>")
// document.write(values[3]+"<br>")

// ==== Question :14

// var values=["keyboard","mouse","printer","pointer"]
// document.write("Devices: " +values +"<br>")
// document.write(values[3]+"<br>")
// document.write(values[2]+"<br>")
// document.write(values[1]+"<br>")
// document.write(values[0]+"<br>")

// ==== Question :15

// var arr=["Nokia" , "Samsung" , "Apple"]
// document.write("<select>")
// for(var i=0; i<arr.length; i++){
//     doocument.write("<option>" + arr[i] + "</option>")
// }
// document.write("</select>")


// ==== Chapter :17-20 and Question :1

// var arr = [[],[]];

// ==== Question :2

// var items = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];
// document.write(items[0] +"<br>" )
// document.write(items[1] + " "+"<br>" )
// document.write(items[2] +"<br>" )

// ==== Question :3

// var count=[1,2,3,4,5,6,7,8,9,10]
// document.write(count[0]+"<br>"+count[1]+"<br>"+count[2]+"<br>"+count[3]+"<br>"+count[4]+"<br>"+count[5]+"<br>"+count[6]+"<br>"+count[7]+"<br>"+count[8]+"<br>"+count[9])

// ==== Question :4

// var num=prompt("Enter any number")
// var length=prompt("Enter length")
// document.write("Multiplication table of " +num+"<br>")
//     document.write("Length " +length +"<br>" +"<br>")
// for (var i=1; i<=length; i++){
//     document.write(num + "x" +i + "=" + num*i +"<br>")
// }

// ==== Question :5

// var fruits = ["apple", "banana", "mango", "orange","strawberry"]
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i]+"<br>")   
// }
// document.write("Element at index 0 is "+fruits[0]+"<br>"+"Element at index 1 is "+fruits[1]+"<br>"+"Element at index 2 is "+fruits[2]+"<br>"+"Element at index 3 is "+fruits[3]+"<br>"+"Element at index 4 is "+fruits[4])

// ==== Question :6

// var count=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// document.write("Counting" + "<br>" + count + "<br>")
// var rev=[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// document.write("Reverse counting:" +"<br>" +rev +"<br>")
// var even=[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// document.write("Even:" + "<br>" +even+ "<br>")
// var odd=[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// document.write("Odd: " +"<br>" +odd )

// ==== Question :7

// var bakery=["cake","apple pie","chips","cookies"]
// var search=prompt("What do you want to order")
// if(bakery.indexOf(search)!=-1){
//     alert("Yes " + search +" is available")
// }
// else{
//     alert("No" + search + " is not available")
// }

// ==== Question :8

// var arr =[24, 53, 78, 91, 12]; 
// var largest = arr[0]; 
// for (var i = 0; i < arr. length; i++) { 
//     if (largest < arr[i] ) {
//          largest = arr[i]; } }
//         document.write("Array items: " +arr +"<br>")
//         document.write("The largest number is: " +largest);

// ==== Question :9

// var arr =[24, 53, 78, 91, 12]; 
// var smallest = arr[0]; 
// for (var i = 0; i < arr. length; i++) { 
//     if (smallest > arr[i] ) {
//          smallest = arr[i]; } }
// document.write("Array items: " +arr +"<br>")
// document.write("The smallest number is: " +smallest);
