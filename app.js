`1. დაწერეთ for ციკლი, 0 დან 25 - მდე console.log ში დაბეჭდეთ ინდექსი i 
2. დაწერეთ while ციკლი 0 დან 20 - მდე console.log ში დაბეჭდეთ ინდექსი i
3. დაწერეთ do while ციკლი 0 დან 30 - მდე console.log ში დაბეჭდეთ ინდექსი i
4. მოცემული გვაქვს მასივი const numbers = [2,3,6,7,8,9,23,24,29]. for ლუპის დახმარებით შეამოწმეთ მასივის ყველა 
ელემენტი და  კონსოლში გამოიტანეთ ამ მასივიდან მხოლოდ ლუწი რიცხვები.
5. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   currentDay ცვლადი გვაძლევს რეალურ კვირის 
დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს 
სადაც 6 არის შაბათი, ყოველდღე სხვადასხვა მნიშვნელობას დაგიბრუნებთ) , დავწეროთ switch სადაც შევამოწმებთ 
currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს 
და ასე შემდეგ 6 - შაბათი.`

// 1.
for(let i=0; i<26; i++){
    console.log('for ' + i)
};


// 2. 3.
let i = 0;
while(i<=20){
    console.log('while ' + i)
    i++
};

i=0;
do{
    console.log('do while ' + i)
    i++;
}while(i<=30);


// 4
const numbers = [2,3,6,7,8,9,23,24,29];
for(let i =0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i]);
    }
};


// 5
currentDay = new Date().getDay(); 
switch(currentDay){
case 0:
    currentDay = "Sunday";
    break;
case 1:
        currentDay = "Monday";
        break;
case 2:
        currentDay = "Thuesday";
        break;
case 3:
        currentDay = "Wednesday";
        break;
case 4:
        currentDay = "Thursday";
        break;
case 5:
        currentDay = "Friday";
        break;
case 6:
        currentDay = "Saturday";
        break;
};
console.log('today is ' + currentDay);

