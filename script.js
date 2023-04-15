/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

console.log(" ");
console.log("PrintDeveloperbyMap function");
console.log(" ");

//callback function for map
function callback(element,index,arr){
  if(element.profession=="developer"){
    return element;
  }
  return ;
}

function PrintDeveloperbyMap() {
  //Write your code here , just console.log  
     let result =arr.map(callback);
     console.log(result);
}

PrintDeveloperbyMap() ;

console.log(" ");
console.log("PrintDeveloperbyForEach function");
console.log(" ");

//callback function for foreach
function func(element,index,arr){
  
  if(element.profession=="developer"){
     console.log(element);
  }

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(func);

}

PrintDeveloperbyForEach();

console.log(" ");
console.log("addData function");
console.log(" ");

function addData() {
  //Write your code here, just console.log
   let obj={id:4,name:"susan",age:"20",profession:"intern"} ;

   arr.push(obj);

   for(let i=0;i<arr.length;i++){
      console.log(arr[i]);
  }
}

addData() ;


console.log(" ");
console.log("removeadmin function");
console.log(" ");

function removeAdmin() {
  //Write your code here, just console.log
   let arr1=[];


  while(arr.length!=0){
     let x=arr.pop();
     arr1.push(x);
    if(x.profession=="admin"){
      break;
    }
  }

   arr1.pop();

  while(arr1.length!=0){
    arr.push(arr1.pop());
  }

 console.log(arr);

}

removeAdmin();

console.log(" ");
console.log(" concatenateArray function ");
console.log(" ");

let arr2 = [
  { id: 4, name: "bharath", age: "24", profession: "SDE" },
  { id: 5, name: "kumar", age: "23", profession: "Tester" },
  { id: 6, name: "sharath", age: "18", profession: "HR" },
];

function concatenateArray() {
  //Write your code here, just console.log
  let concArray=arr.concat(arr2);

  console.log(concArray);
}


concatenateArray();
