// // المتغيرات
// let name = "mira";
// console.log(name);

// let age = 18;
// console.log(age);

// // alert للقيم (مش النص)
// alert(name);
// alert(age);

// // شرط
// if (age >= 18) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// // loop
// for (let i = 1; i <= 10; i++) {
//     console.log("hello");
// }

// string interpolation
let x = "mira";
console.log(`hello ${x}`);

let y = "h";
console.log(`hello ${y}`);

// concatenation
let url = "hello " + x;
console.log(url);

let url2 = "hello " + y;
console.log(url2);

// URL API
let search = "salt";
let url3 = `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2`;
console.log(url3);

let url4 = "https://nominatim.openstreetmap.org/search?q=" + search + "&format=jsonv2";
console.log(url4);

// function بدون باراميتر
function printWelcomeMessageBasic() {
    console.log("Hello mira");
    console.log("Welcome to tarmeez channel");
    console.log("How are you?");
}

printWelcomeMessageBasic();
printWelcomeMessageBasic();

// function مع باراميتر
function printWelcomeMessage(name) {
    console.log("Hello " + name);
    console.log("Welcome to tarmeez channel");
    console.log("How are you?");
}

printWelcomeMessage("mira");
printWelcomeMessage("h");

// object
let x2=9;
let student = {
    fname: "mira",
    lname:"samira",
    age: 18,
    city: "salt",
    printnName: function(){
        console.log(this.fname +""+this/this.lname);
    }
};

console.log(student);
console.log(student.printnName());


// function الجمع (تم تصحيح الخطأ)
function myfun(num1, num2) {
    console.log(num1 + num2);
}

myfun(4, 4);



Btn1.addEventListener("click",fun);
function fun(){
    alert("hallo");
}
  

input1.addEventListener("input",function2) ;// عشان نضيف حدث عند كتابة النص في الحقل
         function function2() {
            let a =document.getElementById("input1").value
            console.log(a);
            document.getElementById("Btn1").innerText=a;
         }
