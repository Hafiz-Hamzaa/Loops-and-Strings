            ///////////////////////////// LOOPS AND STRINGS //////////////////////////////////
/////////////=================>>>>>>>> Loops
//=========>>>>> For Loop
for (let i = 1 ; i <= 5 ; i++) {
    console.log("Hello World!");
}            
//=======>>>> numbers wriiten only
for (let i = 1 ; i <= 5 ; i++) {
    console.log("i =" , i);
}  
//========>>>> Calculate Sum 1 to 6
let sum = 0
for(let i = 1 ; i <= 6 ; i++) {
    sum = sum + i
}
console.log(sum);

//=========>> While Loop
let i = 1
while(i <= 5) {
    console.log("Hello JavaScript");
    i++
}

//===========>>> Do while Loop
let iterator = 2
do {
    console.log("Hello Hamza");
    iterator++
}while(iterator >= 5 );

//==========>> For of Loop
let str = "JavaScript"
let size = 0
for(let val of str) {
    console.log(val);
    size++
}
console.log(size);

//==========>>> For in Loop
let Student = {
    name : "Ali",
    age : 12,
    city : "Karachi"
}
for(let key in Student) {
    console.log("key =" , key , "value =" , Student[key])
}

///======================>>>>>>>> Strings
let string = "This is a string"
console.log(string);

//================>>>>> String Properties
let strLength = "Ali Ahmed"
console.log(strLength.length);

//============>>>> String InDices / Index
let strIndex = "Abu Bakar"
console.log(strIndex[2]); 

//==========>>>>> Template Literals
let name = "Daniyal"
let message = "my best friend"
let result = `${name} is ${message} ${2+3}`
console.log(result);

//==========>>>> Escape Chracters
// \n (for next line)
let myFriend = "Zaid\nAli"
console.log(myFriend);
console.log(myFriend.length);

// \t (for tab space)
let myHobby = "Table\tTennis"
console.log(myHobby);
console.log(myHobby.length);

//=================>>>>>>>>> String Methods
//========>>> UpperCase
let stri = "programming"
let newStr = stri.toUpperCase()
console.log(stri);
console.log(newStr);

//========>>> LowerCase
let String = "PROGRAMMING"
let newString = stri.toLowerCase()
console.log(string);
console.log(newString);

//========>>> Trim
let trim = "      Adnan Khalid          "
console.log(trim.trim());

//=========>>> Slice
let arrStr = ["ALi" , "Zaid" , "Khalid" , "Arif" , "Adeel"]
let sliceMeth = arrStr.slice(1 , 4);
console.log(sliceMeth);

//=======>>>>> Concat
let str1 = "Maaz"
let str2 = "Mehmood"
let concat = str1.concat(str2)
console.log(concat);

//=========>>> CharAt
let charAt = "Problem"
console.log(charAt.charAt(3));

//==========>>> replace and replaceAll
let replace = "Hello"
console.log(replace.replace("lo" , "p"));

//========>>>> replaceAll
let replaceAll = "Hellololo"
console.log(replaceAll.replaceAll("lo" , "p"))

///////////////////////// PRACTICE QUESTION //////////////////////////////////
let userName = prompt("Enter a username")
console.log(userName);
console.log(userName.length);
console.log(userName + 10);

                             // OR //
let fullName = prompt("Enter your fullname without even spaces");
let user_name = "@" + fullName + fullName.length
console.log(user_name);