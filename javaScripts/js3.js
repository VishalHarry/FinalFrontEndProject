

// task-1

// var para=document.createElement("p");
// para.textContent="vishal";
// document.querySelector("body").appendChild(para);

// var btn=document.querySelector("button");
// btn.addEventListener('click',function(){
//      para.textContent="vishal updated";
//      para.classList.add("makered");
// })





// task-2 

// var img1=document.querySelector(".img1");
// var img2=document.querySelector(".img2");
//   var btn=document.querySelector("button");
//   btn.addEventListener('click',function(){
//         img1.src="https://imgs.search.brave.com/6m3xgQN3DlbdTGDHkHgGvbXk5QyaqyaVM6NfkR1Crj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzQxLzcxLzkz/LzM2MF9GXzc0MTcx/OTM5NF9DOUJQM1li/aVhTSjdXc3BTREx0/S2RZeFpLS1dsZjBK/ei5qcGc"
//         img2.src="https://imgs.search.brave.com/XKUD749tjOvSP2maFZkPmTckY7mAfnglBg7J6YgWEgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvSG9t/ZVBhZ2UvRm91clBh/Y2svQzItUGhvdG9z/LWlTdG9jay0xMzU2/MTk3Njk1LmpwZw"
//   })



//task-3

// var form=document.querySelector("form");
// var input1=document.querySelector("#input1");
// var input2=document.querySelector("#input2");
// var h2=document.querySelector("h2")
// form.addEventListener("submit",function(eve){
//     eve.preventDefault();  //for no refresh the page again and agin
//    if(input1.value===''|| input2.value===''){
      
//    }
//    else{
//     h2.textContent="sucessfully submitted"
//     h2.style.color="green";
    
//    }
   
// })


// task-4

// var add=document.querySelector("#add");
// var remove=document.querySelector("#remove");
// var inp=document.querySelector("input");
// var ul=document.querySelector("ul");
// var li;

// add.addEventListener("click",function(e){
//     if(inp.value.trim()===''){}
//     else{
//      li=document.createElement("li");
//         li.textContent=inp.value;
//         ul.appendChild(li);
//         inp.value='';
       
//     }
// })
// remove.addEventListener("click",function(e){
   
// })






//task-5

// var strat=document.querySelector("#start");
// var stop=document.querySelector("#stop");
// var h3=document.querySelector("h3");
// var int;

// start.addEventListener("click",function(e){
//      var count=0;
//     int= setInterval(function(){
//        h3.textContent=count;
//         count++;
        
//      },1000);
// })
//   stop.addEventListener("click",function(e){
//    clearInterval(int);
// })




// task-6

// var home=document.querySelector("#home");
// var about=document.querySelector("#about");
// var contact=document.querySelector("#contact");
// var hometext=document.querySelector("#hometext");
// var abouttext=document.querySelector("#abouttext");
// var contacttext=document.querySelector("#contacttext");
 
// hometext.style.display="block";
// hometext.style.width="50%";

// home.addEventListener("click",function(e){
//     hometext.style.display="block";
//     abouttext.style.display="none";
//     contacttext.style.display="none";   
// })

// about.addEventListener("click",function(){
//     hometext.style.display="none";
//     abouttext.style.display="block";
//     contacttext.style.display="none";
// })

// contact.addEventListener("click",function(){
//     hometext.style.display="none";
//     abouttext.style.display="none";
//     contacttext.style.display="block";
// });

// task-7
  

// var pgs=document.querySelector("#progress");
// var h3=document.querySelector("#h3");
// var count=0;
//  var int=setInterval(function(){
//     if(count===100){
//         clearInterval(int)
//         h3.style.opacity="1";
//     }
//     count++;
//     pgs.style.width=count+'%'
// },100);



// task-8
// var textarea=document.querySelector("textarea");
// var counter=document.querySelector("#counter");
// textarea.addEventListener("input",function(){
//     counter.textContent=textarea.value.length;
    
// })


// task-9

//   var input=document.querySelector("input");

// var data = [
//     {name: "Vishal", src: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name: "dev", src: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww"},
//     {name: "samvhav", src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"},
//     {name: "shiva", src: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
// ];

// var pers = ""; // Initialize pers as an empty string
// data.forEach(function(ele) {
//     pers += ` <div class="person">
//               <img src="${ele.src}" alt="">
//               <h4>${ele.name}</h4>
//             </div>`;
// });

// // You can now append the 'pers' variable to your desired element in the DOM, e.g.:

// document.querySelector(".people").innerHTML = pers;
// input.addEventListener("input",function(){
//     var match=data.filter(function(e){
//         return e.name.startsWith(input.value)
//     })
//    var newuser="";
//     match.forEach(function(ele) {
//         newuser += ` <div class="person">
//                   <img src="${ele.src}" alt="">
//                   <h4>${ele.name}</h4>
//                 </div>`;
//     });
    
//     // You can now append the 'pers' variable to your desired element in the DOM, e.g.:
    
//     document.querySelector(".people").innerHTML = newuser;
    
// })

