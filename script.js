/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log\
  arr.map(arr=>{
    if(arr.marks>50){
      console.log( arr.id +" " + arr.name+" "+  arr.marks)
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(arr=>{
    if(arr.marks>50){
      console.log( arr.id +" " + arr.name+" "+  arr.marks)
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newData ={id:4,name:"susan",age:"20",marks:45};
  arr.push(newData);
  console.log(arr);
  // console.log(newData);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr.filter(arr=>{
    if(arr.marks>50){
      console.log(arr.id +" " + arr.name+" "+  arr.marks)
    }
  });
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
    { id: 5, name: "Naani", age: "20", marks: 75},
    { id: 6, name: "jhanvi", age: "21", marks: 60 },
    { id: 7, name: "kiara", age: "22", marks: 90},
  ];
  let concatenateArray = arr.concat(newArray);
  console.log(concatenateArray);
}
