//question 1


const array=[1,2,3,4,5,6,7,80,9,10,11,12,130,11,15,16,17,18,19,20];
document.getElementById('array1').innerHTML=
"The initial array is "+array;
//question 1

function findSum(){
 let sum=0;
    for(let i=0;i<array.length;i++){
       
        sum+=array[i];
    }
    

    document.getElementById('q1').innerHTML=
    "the sum of array elements is " +sum;
}
findSum();
//question 2
function findMax(){
let max=0
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
        else
        {
            max=max;   
        }
       
        
    }
document.getElementById("q2").innerHTML=
"The maximum among the array is"+max;
}
findMax();
//question 3
document.getElementById("q3").innerHTML=
" Un Sorted array is"+ array;
function ascending(){
   let sortedArray= array.sort((a, b) => a - b);
    document.getElementById("q3").innerHTML=
    "The sorted array"+sortedArray;
}
ascending();
//question 4
function reverseArray(){
    const reversed = array.reverse();

document.getElementById('q4').innerHTML=
"The reversed element is "+reversed;

}
reverseArray();
//question 5
function arrangeEven(){
    let evenArray=[];
    for(let i=0; i<array.length;i++){
        if(array[i]%2==0){
            evenArray.push(array[i]);
        }
    }
   document.getElementById('q5').innerHTML=
   "the Even array Generated is "+evenArray;
}
arrangeEven();
//Question 6
function arrangeOdd(){
    let oddArray=[];
    for(let i=0; i<array.length;i++){
        if(array[i]%2!=0){
            oddArray.push(array[i]);
        }
    }
   document.getElementById('q6').innerHTML=
   "the Odd array Generated is "+oddArray;
}
arrangeOdd();
//question 7

function findAverage(){
    let sum=0;
    let average=0;
       for(let i=0;i<array.length;i++){
          
           sum+=array[i];
       }
       average=sum/array.length;
       
   
       document.getElementById('q7').innerHTML=
       "The Average of array elements is " +average;
   }
   findAverage();
   //Question 8
   function removeDuplicates(){
    const viewed=[];
    const aDuplicatedArray=[];
    array.forEach(value => {
        if(!viewed[value]){
            viewed[value]=true;
            aDuplicatedArray.push(value);
        }
    });

    document.getElementById('q8').innerHTML=
    "The Un Duplicated  array elements is " +aDuplicatedArray;
    
   }
   removeAllList();
   //Question 9
   function findMedian(){
    let median;
    
        if(array.length%2==0){
            median=(array[array.length/2]+array[(array.length/2)+1])/2;
        
    }  
    else
    {
        median=array[Math.floor(array.length/2)]
    }
    document.getElementById('q9').innerHTML=
    "The median of the  array elements is " +median;
 }
 findMedian();
 //Question 10 Doubling the array elements.
 function doubleArray(){
    let doubledArray=[];
    for(let i=0;i<array.length;i++){
         doubledArray.push(array[i]*2);
       
    }
   
    document.getElementById('q10').innerHTML=
    "The Doubled   array elements is " +doubledArray;
 }
 doubleArray();
 
//Array of strings
const names=['boitenge','jerome','aldrin','Kafuluta','Theonce','Khabibu','Khassim',
    'Shariff','Jackson','Blaise','bosco','Pilote','Jmv','Nyangez','Damascene','Rene'
    ,'Emmy','Patric','Khamuza','Salimath'];
    //Qustion 11
    function displayNames(){
        for(let i=0;i<names.length;i++){
           document.getElementById('q11').innerHTML +=
           names[i]+' <br>';
           
           
        }
        

      
    }
    displayNames();
    //question 12
    function arrangeNames(){
        const sortedNames=names.sort((a,b) => a.localeCompare(b));
        document.getElementById('q12').innerHTML=
        " The alphabetical names are "+sortedNames+'<br>';
        
    }
    arrangeNames();
    //Question 13
    function searchName(){
        const verify="Rene";
        let feedback=false;
        for(let i=0;i<names.length;i++){
             if(names[i]==verify){
                feedback=true;
                break;
                
             }
             
            }
            document.getElementById('q13').innerHTML=feedback;
    }
    
    searchName();
    //Question 14
    function findLargeName(){
        let long=names[0];
        for(let i=0;i<names.length;i++){
            if(names[i].length>long.length){
                long=names[i];
            }
            else
            {
                long=long;
            }
        }
       document.getElementById('q14').innerHTML=
       "the largest name in the arrray is "+long;
    }
    findLargeName();
    //Qustion 15
    function searchStart(){
        let start="b";
        let found=[];
        for(let i=0;i<names.length;i++){
            if(names[i].startsWith(start)){
                found.push(names[i]);
            }
        }
        
        document.getElementById('q15').innerHTML=
        "The names in the arrray started with "+start +"are "+found;
    }
    searchStart();
    //question 16
    function upperlisee(){
        const upperlisedArray=[];
        for(let i=0;i<names.length;i++){
            upperlisedArray.push(names[i].toUpperCase());
        }    
            document.getElementById('q16').innerHTML=
            "the upperlised array is "+upperlisedArray;
    }
    upperlisee();
    // question 17
    function removeName() {
        const remove = 'Rene';
        const index = names.indexOf(remove); 
     remainingNames=names;
        if (index !== -1) { 
            remainingNames.splice(index, 1); 
        }
        
        document.getElementById('q17').innerHTML=
        "The remaining names from the array are "+remainingNames;
        
    }
    
    removeName();
    //Question 18
    function CountFound(){
        let count=0;
        for(let i=0;i<names.length;i++){
            if(names[i].includes('a')){
                count +=1;
            }
        }
        document.getElementById('q18').innerHTML=
        "The names with letter a are "+count;
       
    }
    CountFound();
    //Question 19
    function singleString(){
        let string='';
        for(let i=0;i<names.length;i++){
            string +=names[i]+',';
        }
      document.getElementById('q19').innerHTML=
      "the string of all array names is"+string;
      
    }
    singleString();
    //Question 20
    
    function reverseString(){
        const ff=names; 
        let reversedNames=ff.reverse();
        document.getElementById('q20').innerHTML="The reversed names of the array is"+reversedNames;
        
        
    }
    reverseString();
    //Question 21
    const person=
    {name:"Florance",
     age:23,
     occupation:"student"

    };
    // console.log(person);
//Question 22(
function  take(){
    return `Name:${person.name}  Age:${person.age}  Occupation:${person.occupation}`;
    // console.log(obj);

}

let obj=take();
document.getElementById('q22').innerHTML="The person object is is "+obj;
//Question 23
function addPropert(){
    person.gender="female";
    // console.log(person);
    const ob=`Name:${person.name}  Age:${person.age} 
     Occupation:${person.occupation}  Gender:${person.gender}`;
    document.getElementById('q23').innerHTML=ob;
    
}
addPropert();
//Question 24
function removeProperty(){
    delete person.age;
    const remains=JSON.stringify(person, null, 4);
    document.getElementById('q24').innerHTML=
    "the remaining properties are "+remains;
    
    // console.log(person);
}
removeProperty();
//question 25
document.getElementById('q25').innerHTML=
"the remaining properties are "+JSON.stringify(person,null,2);;
function display(){
    // console.log(person);
}
display();
//question 26
function mergeObj(){
    let address={
        tel:'0782433539',
        email:'niyoduflorence@gmail.com',
        location:'kigali'
    };
    let peaple={...person,...address};
    peaple=JSON.stringify(person,null,2);
    document.getElementById('q26').innerHTML="The marged object is "+peaple;
    // console.log(peaple);
}

mergeObj();
//Question 27

function checkProperty(){
    let chech=("pie" in person);
   if(chech==true){
    document.getElementById('q27').innerHTML=
    "Yes the dearched property appears in the object";
   }
   else{
    document.getElementById('q27').innerHTML=
    " No, the searched propety does not appear in the object";
   }
}
checkProperty();
//question 28
function cloneObject(){
    let clone=Object.assign({},person);
   document.getElementById('q28').innerHTML=
   "the cloned object is clone "+JSON.stringify(clone,null,2);
}
cloneObject();
//Question 29
function printProperty(arr, property) {
    let dive = document.getElementById('q29');
    dive.innerHTML = ''; // Clear previous content

    for (let i = 0; i < arr.length; i++) {
        dive.innerHTML += `<div>${arr[i][property]}</div>`; // Corrected string interpolation
    }
}

// Example usage
const People = [
    { name: "Florance", age: 23, occupation: "Student" },
    { name: "Jerome", age: 29, occupation: "Teacher" },
    { name: "Aldrin", age: 35, occupation: "Engineer" }
];

printProperty(People, "name");
//Question 30

function updateProperty(obj) {
    const property = 
    prompt("Enter the property you want to update (name, age, occupation):");
    if (obj.hasOwnProperty(property)) {
        const newValue = prompt(`Enter the new value for ${property}:`);
        obj[property] = newValue;
        
    } else {
        console.log("Property does not exist.");
    
    }
    document.getElementById('q30').innerHTML=JSON.stringify(person);
    
}

updateProperty(person);
//Question 31
function reverseString(){
    let revesedString='';
    const real="boitenge";
    for(let i=real.length-1;i>=0;i--){
        revesedString +=real[i];
    }
   document.getElementById('q31').innerHTML="the real name is "+ real+" its reverse is "+revesedString;

    }
    reverseString();
// question 32
function countVowels() {
    const vowels = "aeiouAEIOU";
    const word = "why are you here";
    let count = 0;
  
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        count++;
      }
    }
  
    document.getElementById('q32').innerHTML=
    "the vowels in the string "+word+" are "+count;
  }
  
  countVowels();
//   question 33
function toUpperCase(str) {
    const uppercaseOffset = 32; 
  
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) { 
            result += String.fromCharCode(charCode - uppercaseOffset);
        } else {
            result += str[i];
        }
    }
    document.getElementById('q33').innerHTML="the upper case is"+result;
    console.log(result);
    return result; 
}


toUpperCase("hello world"); 

//Question 34
function countLength(string){
    let count=0;
    for(let i=0;i<string.length;i++){
        if(string[i]!=''){
            count+=1;
        }
    }
    document.getElementById('dm34').innerHTML=
    "The lentgh of the string is "+count;
     console.log(count);
}
countLength('Florence');
//Question 35
function replaceSpace() {
    let mynew = '';
    let myWord = "my Joy Of Life";

    for (let i = 0; i < myWord.length; i++) {
        if (myWord[i] === ' ') {
            mynew += '_';  // Add an underscore to mynew when there's a space
        } else {
            mynew += myWord[i];  // Add the current character to mynew
        }
    }

    document.getElementById('dm35').innerHTML =
        "The updated word is " + mynew;
}

replaceSpace();

//Question 36
function extractCharacter(str){
    let firstTen=str.substring(0,10);
    console.log(firstTen);
   document.getElementById('dm36').innerHTML=
   "The substring is"+ firstTen;

}
extractCharacter('hi how are you how do you fell now?');
//Question 37
function findAndReplace(originalString, oldWord, newWord) {
    let wo= originalString.split(oldWord).join(newWord);
    document.getElementById('dm37').innerHTML=
    "The changed word is "+wo;
}
let text = "The quick brown fox jumps over the lazy dog.";
const updatedText = findAndReplace(text, "fox", "cat");
// console.log(updatedText); 
//question 38
function splitIntoWords(sentence) {
    return sentence.split(' ');
}

// Example usage
const texte = "The quick brown fox jumps over the lazy dog.";
const wordsArray = splitIntoWords(texte);
document.getElementById('dm38').innerHTML=
"The splited array is"+wordsArray;
//Question  39
function removeNumbers(inputString) {
    let out= inputString.replace(/\d+/g, '');
    document.getElementById('dm39').innerHTML=
    "the new Array without numbers is "+out;
}
const stringWithNumbers =
 "Hello 123, this is a test 456!";
 removeNumbers(stringWithNumbers);
// console.log(removeNumbers(stringWithNumbers));

//Question 40
function insertString(originalString, stringToInsert, position) {
    let stringAfterInsert= originalString.slice(0, position) 
    + stringToInsert + originalString.slice(position);
    document.getElementById('dm40').innerHTML=
    "The string after inserted is "+stringAfterInsert;
}
const mainString = "Hello, this is a test!";
const stringToInsert = "world ";
(insertString(mainString, stringToInsert, 7));  

//Question 41
function change_color(){
    const randomColor = 
    `#${Math.floor(Math.random()*16777215).toString(16)}`;

    document.body.style.backgroundColor = randomColor;

}
//Question 42
function hideParagraph(){
    document.getElementById('dm42').style.display='none';
}
//Question 43
function addParagraph(){
    const newParagraph=document.createElement('div');
    newParagraph.textContent=
    "hello my best friend! am fofo am forth born of mom";
    document.body.appendChild(newParagraph);
}
//Question 44

function removeAllList() {
    const list = document.getElementById('myList');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}
//Question 45
function changeContent(){
    document.getElementById('dm45').innerHTML=
    "hello dear friends";

}
//Question 46
function toggleHighlight() {
    // Select the element by its ID and toggle the 'highlight' class
    document.getElementById('myElement').classList.toggle('highlight');}


//Questio 47
function countDivs() {
    // Use querySelectorAll to select all <div> elements and get the count
    const divCount = document.querySelectorAll('div').length;
    // Display the count
   document.getElementById('dm47').innerHTML="The number of divs is "+divCount;
}
//Question 48
function displayText(){
    const input=document.getElementById('input').value
    document.getElementById('dm48').innerHTML=input;
}
//Question 49
function createTable() {
    // Create a table element
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse'; // Collapse borders for a better look

    // Define the numbers to populate the table
    const numbers = [
        [11, 2, 3],
        [44, 5, 6],
        [7, 80, 9]
    ];

    // Loop to create 3 rows
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr'); // Create a new row

        // Loop to create 3 columns in each row
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td'); // Create a new cell
            cell.textContent = numbers[i][j]; // Populate cell with a number
            cell.style.border = '1px solid black'; // Add a border to the cell
            cell.style.padding = '10px'; // Add some padding to the cell
            row.appendChild(cell); 
        }

        table.appendChild(row);
    }
    document.getElementById('Table').appendChild(table);
}


createTable();
//Question 50
function validateForm() {
    // Get the value of the input fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (name === '') {
        alert('Please enter your name.');
        return false; 
    }

  
    if (email === '') {
        alert('Please enter your email.');
        return false; 
    }

    
    if (password === '') {
        alert('Please enter your password.');
        return false; 
    }
    return true;
}





