yourName = 'Nabil';

// Question No. 02
document.getElementById('q2').innerHTML = 'Hello' + ' ' + yourName + ' ' + 'would you like to learn python today?';

// Question No .03
document.getElementById('q31').innerHTML = 'Lower Case:' + ' ' + yourName.toLowerCase();
document.getElementById('q32').innerHTML = 'Upper Case:' + ' ' + yourName.toUpperCase();

function titleCase(str) {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
let titleCasetxt = titleCase("hello my name is nabil");
document.getElementById('q33').innerHTML = 'Title Case:' + ' ' + titleCasetxt;

// Question No .04
quote = 'A person who never made a mistake never tried anything new.'
document.getElementById('q4').innerHTML = quote;

// Question No .05
quote = 'A person who never made a mistake never tried anything new.'
famous_person = 'Albert Einstein'
document.getElementById('name').innerHTML = famous_person + 'once said,';
document.getElementById('q5').innerHTML = quote

// Question No .06
let tabspace = '\t';
let string = ` Hello this is Nabil Akbar ${tabspace} `;
let trimString = string.trim();
document.getElementById('q6').innerHTML = '1:' + string + trimString;
document.getElementById('q62').innerHTML = '2:' + trimString + string;

// Question No.07
var firstNumber;
var secondNumber;
let ans;
function addition() {
    firstNumber = parseInt(document.getElementById('fN').value);
    secondNumber = parseInt(document.getElementById('sN').value);
    ans = firstNumber + secondNumber;
    document.getElementById('ans').innerHTML = ans;
}
function subtraction() {
    firstNumber = parseInt(document.getElementById('fN').value);
    secondNumber = parseInt(document.getElementById('sN').value);
    ans = firstNumber - secondNumber;
    document.getElementById('ans').innerHTML = ans;
}
function multiplication() {
    firstNumber = parseInt(document.getElementById('fN').value);
    secondNumber = parseInt(document.getElementById('sN').value);
    ans = firstNumber * secondNumber;
    document.getElementById('ans').innerHTML = ans;
}
function division() {
    firstNumber = parseInt(document.getElementById('fN').value);
    secondNumber = parseInt(document.getElementById('sN').value);
    ans = firstNumber / secondNumber;
    document.getElementById('ans').innerHTML = ans;
}

// Question No.09
var favNum;
function favNumber() {
    favNum = document.getElementById('favNum').value;
    window.alert('Your favourite number is:' + favNum)
}

// Question No. 10

var favNum; //Variable store favourite value enter by user
function favNumber() {
    favNum = document.getElementById('favNum').value; //assigning favourite value entered by user to the declared dynamic variable
    window.alert('Your favourite number is:' + favNum)//To show favourite variable in the alert
}

// Question No. 11
const friends = ["FriendA", "FriendB", "FriendC"];
let len = friends.length;
let text = "<ul>";
for(let i = 0; i<len; i++){
 text += "<li>" + friends[i] + "</li>"
}
text += "</ul>";
document.getElementById('f1').innerHTML = text;

// Question No. 12
const friendsarr = ["FriendA", "FriendB", "FriendC"];
let lenarr = friendsarr.length;
let text1 = "<ul>";
for(let j = 0; j<len; j++){
 text1 += "<li>" + friendsarr[j] + ' ' + 'Good Morning' + "</li>"
}
text1 += "</ul>";
document.getElementById('fGreetings').innerHTML = text1;

// Question No. 13

const cars = ["Honda", "Civic", "Swift"];
let carslen = friendsarr.length;
let text2 = "<ul>";
for(let j = 0; j<len; j++){
 text2 += "<li>" +'I would like to own a'+ cars[j] +'car'+ "</li>"
}
text2 += "</ul>";
document.getElementById('cars').innerHTML = text2;

// Question No. 14
const friendsinv = ["FriendA", "FriendB", "FriendC"];
let lenofarr = friendsarr.length;
let text3 = "<ul>";
for(let j = 0; j<len; j++){
 text3 += "<li>"  + 'Hello' + ' ' +  friendsinv[j] + ' ' + 'You are invited for the dinner at 08:00 PM' + "</li>"
}
text3 += "</ul>";
document.getElementById('dinner').innerHTML = text3;

// Question No.15
const index = friendsinv.indexOf('FriendA'); //   0

if (index !== -1) {
  friendsinv[index] = 'FriendD';
}

console.log(friendsinv); //  ['z', 'b', 'c']

let text4 = "<ul>";
for(let j = 0; j<len; j++){
 text4 += "<li>"  + 'Hello' + ' ' +  friendsinv[j] + ' ' + 'You are invited for the dinner at 08:00 PM' + "</li>"
}
text4 += "</ul>";
document.getElementById('dinner').innerHTML = text4;

// Question N0.16
friendsinv.unshift("FriendE", "FriendF");//adding element in the start of an array
document.getElementById('unShift').innerHTML = friendsinv; //FriendE,FriendF,FriendD,FriendB,FriendC

let start = 3;
let deleteCount = 0;
friendsinv.splice(start, deleteCount, "FriendG");
document.getElementById('splice').innerHTML = friendsinv;//FriendE,FriendF,FriendD,FriendG,FriendB,FriendC

friendsinv.push("FriendZ");//adding element in the end of an array
document.getElementById('push').innerHTML = friendsinv; //FriendE,FriendF,FriendD,FriendG,FriendB,FriendC,Friendz

let lenofall = friendsinv.length;
let text5 = "<ul>";//Invitation to all
for(let j = 0; j<lenofall; j++){
 text5 += "<li>"  + 'Hello' + ' ' +  friendsinv[j] + ' ' + 'You are invited for the dinner at 08:00 PM' + "</li>"
}
text5 += "</ul>";
document.getElementById('invtoAll').innerHTML = text5;


// Question N0.17

//FriendE,FriendF,FriendD,FriendG,FriendB,FriendC,Friendz
let lenOfthisArr = friendsinv.length;
let text6 = "<ul>";
while(lenOfthisArr>2){
    text6 += "<li>" +  friendsinv[lenOfthisArr-1] + ' ' + 'Invitation Cancelled' + "</li>"
    delete friendsinv[lenOfthisArr-1];
    lenOfthisArr = lenOfthisArr-1;   
}
document.getElementById('pop').innerHTML = text6;
text6 += "</ul>"; 

//FriendE,FriendF
let lenofrem = friendsinv.length;
let text7 = "<ul>";//Invitation to all
for(let j = 0; j<lenofrem; j++){
 text7 += "<li>"  + 'Hello' + ' ' +  friendsinv[j] + ' ' + 'You are invited for the dinner at 08:00 PM' + "</li>"
 delete friendsinv[j];
}
text7 += "</ul>";
document.getElementById('notPop').innerHTML = text7;

document.getElementById('noOne').innerHTML = friendsinv;

// Question N0.18
const places = ["uk", "america","norway", "switzerland" ,"germany"];
document.getElementById('location').innerHTML = places;
const copyplaces = [].concat(places);
document.getElementById('sorted').innerHTML = copyplaces.sort() + "=> Sorted Array";
const reversed = document.getElementById('reverse').innerHTML = copyplaces.reverse() + "=> Reverse Array";
document.getElementById('original').innerHTML = places + "=> Original Array";

// Question N0.19

document.getElementById('totalInvitee').innerHTML = "Total Invited Guest:" + friendsinv.length;

// Question N0.20 & 21
const favPlace = {
    mountain: "k2",
    rivers: "Jehlum River",
    countries: "Norway",
    cities: "Islamabad",
    languages: "Urdu"
}

document.getElementById('places').innerHTML = favPlace.countries;

// Question No.23
// let value = intParse(document.getElementById('checkedOne').value);

function checkedtrue(){
    document.getElementById('displayMessage').innerHTML = "Right Attempt";
}
function checkedfalse(){
    document.getElementById('displayMessage').innerHTML = "Wrong Attempt";
}

let car = 'sbaru';
if(car == 'sbaru'){
    document.getElementById('displayMessage').innerHTML = "Yes Sbaru is a car";
}else{
    document.getElementById('displayMessage').innerHTML = "No sbaru is not a car";
}

// Question N0 24
let car1 = 'sbaru';
let car2 = car1.toLowerCase();//Tests using the lower case function
if(car1 == car2){
    document.getElementById('displayMessage1').innerHTML = "Yes Sbaru is a car";
}else{
    document.getElementById('displayMessage1').innerHTML = "No sbaru is not a car";
}

function checkNo(){

let num;
num = document.getElementById('number').value;
if(num == 10){
    document.getElementById('checkNo').innerHTML = "N0 is equal to 10";
}
else if(num > 10){
    document.getElementById('checkNo').innerHTML = "N0 is greater than 10";
}
else if(num < 10){
    document.getElementById('checkNo').innerHTML = "N0 is less than 10";
}
else if(num >= 10){
    document.getElementById('checkNo').innerHTML = "N0 is less than 10";
}
else if(num <= 10){
    document.getElementById('checkNo').innerHTML = "N0 is less than 10";
}else if(num <= 10 && num >=5){
    document.getElementById('checkNo').innerHTML = "N0 is less than 10";
}
else if(num <= 10 || num >=5){
    document.getElementById('checkNo').innerHTML = "N0 is less than 10";
}
else{
    document.getElementById('checkNo').innerHTML = "Please enter any number";
}
}

const nums = [ 1, 3, 5, 7];
var random = document.getElementById('randomVal').value;
function checkInclude(){
    document.getElementById('included').innerHTML = (nums.includes(random)) + "Included";
}

// Question N0.25
var alien_color = document.getElementById('alienColor').value;
function checkColor(){
if(alien_color == '#00FF00' || alien_color == '#FFFF00' || alien_color == '	#FF0000' ){
    document.getElementById('alienMessage').innerHTML = "You earned 5 points";
}else{
    document.getElementById('alienMessage').innerHTML = "You lost 5 points";
}
}

// Question N0.26
var alien_color1 = document.getElementById('alienColor1').value;
function checkColor1(){
if(alien_color1 == '#00FF00'){
    document.getElementById('alienMessage1').innerHTML = "You earned 5 points";
}
else if(alien_color1 == '#FFFF00'){
    document.getElementById('alienMessage1').innerHTML = "You earned 5 points";
}
else if(alien_color1 == '#FF0000'){
    document.getElementById('alienMessage1').innerHTML = "You earned 5 points";
}
else{
    document.getElementById('alienMessage1').innerHTML = "You lost 5 points";
}
}

// Question No 27

var alien_color2 = document.getElementById('alienColor2').value;
function checkColor2(){
if(alien_color2 == '#00FF00'){
    document.getElementById('alienMessage2').innerHTML = "You earned 5 points";
}
else if(alien_color2 == '#FFFF00'){
    document.getElementById('alienMessage2').innerHTML = "You earned 10 points";
}
else if(alien_color2 == '#FF0000'){
    document.getElementById('alienMessage2').innerHTML = "You earned 15 points";
}
else{
    document.getElementById('alienMessage2').innerHTML = "You lost the points";
}
}

// Question No.28
var age = document.getElementById(age).value;
function checkage(){
    if(age < 2){
        document.getElementById('showage').innerHTML = "person is a baby.";
    }
    else  if(age > 2 && age < 4){
        document.getElementById('showage').innerHTML = "person is a toddler";
    }
    else  if(age >= 4 && age < 13){
        document.getElementById('showage').innerHTML = "person is a kid";
    }
    else if(age >= 13 && age < 20){
        document.getElementById('showage').innerHTML = "person is a teenager";
    }
    else  if(age >= 20 && age < 65){
        document.getElementById('showage').innerHTML = "person is a adult";
    }
    else{
        document.getElementById('showage').innerHTML = "person is elder";
    }
}

// Question No 29
// const fruits = ["apple","banana","cherry"];
// document.getElementById("showfruit").innerHTML = fruits.includes("apple");
const fruits = ["Banana", "Orange", "Apple", "Mango"];
if(fruits.includes("Mango")){
    document.getElementById("showfruit").innerHTML = "My favourite fruit is Mango";
}
else if(fruits.includes("orange")){
    document.getElementById("showfruit").innerHTML = "My favourite fruit is Orange";
}
else if(fruits.includes("Apple")){
    document.getElementById("showfruit").innerHTML = "My favourite fruit is Apple";
}
else if(fruits.includes("Banana")){
    document.getElementById("showfruit").innerHTML = "My favourite fruit is Banana";
} else {
    document.getElementById("showfruit").innerHTML = "Fruit not found";
};


// Question N0 30

