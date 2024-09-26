// console.log("vishal");
// console.warn("Vishal");
// console.error("error");
//  alert("hii vishal");
//   var nam=prompt("Hii vishal")
//     console.log(nam);


// var arr=[1,2,3,4,5,6];
// arr.forEach(function(val){
//   console.log("hello vishal! kasa ho");
  
// })

// console.log(this);

//  function abc(){
//   console.log(this);
  
// }
// abc();

// var obj={
//   name:function(params) {
//     console.log(this);
    
//   },
//   age:25
// }
// obj.name()

//  var obj={
//   sayname:function() {
//     function anyy(){
//       console.log(this);
//     }
//     anyy();
//   }
//  }
//  obj.sayname()





// var obj={
//   name:function(params) {
//     const child=()=>{
//       console.log(this);
//     }
//     child();
    
//   }
// }
// obj.name();

 

// document.querySelector("#button").addEventListener("click",function(){
// console.log(this); 
// })


   
    



// var obj={
//   name:"he"
// }
// function abbcd() {
//   console.log(this);

  
// }
// abbcd.call("vishal")


// function makehuman(name,age) {
//   this.sayname=name;
//   this.sayage=age;
// }

// const human1= new makehuman("vishal",23)
// const human2= new makehuman("shiva",24)

//////////////////////ASYNC FUNCTIONS //////////////////////

///1 SETTIMEOUT

// console.log("hii1");
// console.log("hii2");

// setTimeout(function(){
//   console.log("hii3");
  
// },2000)
// console.log("hii4");




//2 SETINTERVAL

//  var fun=setInterval(function(){
//   console.log("hii1");
 
// },2000)
// clearInterval(fun)


//3 FATCH APIs

// fetch('https://randomuser.me/api/')
// .then(raw=>raw.json())
// .then(readable=>console.log(readable.results[0].gender));



//.4 AXIOS

// axios.get('https://randomuser.me/api/')
// .then(result=>console.log(result))

//.5 Promise

//  const parchi=new Promise(function(resolve,reject){
//     fetch('https://randomuser.me/api/')
//     .then(raw=>raw.json())
//     .then(result=>{
//         if(result.results[0].gender==="male") resolve();
//         else reject();
//     });
// });
// parchi.then(function(){
//     console.log("active");
    
// })
// .catch(function(){
//     console.log("unactive");
    
// })

//.6 callbacks

// function abcd(a,b){
//  b();
// }
// abcd(1,function name(params) {
//     console.log("Vishal");
    
// })


//.8 ASYNC/AWAIR

//  async function abc(params) {
//   let a= await fetch('https://randomuser.me/api/')                         //use of make async code into sync code here
//   a= await a.json();
//    console.log(a);
   
// }
// abc()

//.9 event loop

//.10 callback vs prommises vs Async/await

//.question ak url sa data la kar ao and console per print karo

//callback use

// function abc(url,cb){
//   fetch(url)
//   .then(raw =>raw.json())
//   .then(result=>{
//     cb(result);
//   })
// }

// abc('https://randomuser.me/api/' ,function(result){
//  console.log(result);
 
// })


//promise
//  function datafecher(url){
//     const parchi=new Promise(function(resolve ,reject){
//      fatch(url)
//      .then(raw=>raw.json())
//      .then(result=>{
//       resolve(result);
        
//      })
//     })
//     return parchi;
//  }

//  var parchi=datafecher('https://randomuser.me/api/')
// .then(function(result) {
//     console.log(result);
    
// })

//asncy/await

//  async function data(url){
//    let data1= await fetch(url)
//    let result= await data1.json()
//   return result;
// }
//  async function hh(){
//   const ans=await data('https://randomuser.me/api/')
//   console.log(ans);
  
// }

// hh()

//.Generators
 //app code ka flow ko apuse kar satika ho  ans bo sakta ke ab agla akro 


//  function* print(){
//     console.log("111");
    
//     yield 1;
//     console.log("11");

//     yield 2;
//     console.log("222");

//     yield 3;
//     console.log("333");

//  }
// let ans= print();
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);

//web workers
//main js file send kar sakta ho to the workser sataions

// var name=Array.from({length:10000},(_,b)=>b+1);
//  const worker=new Worker('worker.js')
// worker.postMessage(name)



 








