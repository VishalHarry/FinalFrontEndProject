



var tl=gsap.timeline()

tl.from(".line h1",{
    y:150,
    stagger:0.3,
    duration:0.6,
    dealy:0.5
})
tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var h5=document.querySelector("#line1-part1 h5");
        var count=0;
       setInterval(function(){
         if(count<100){
           count++;
          h5.innerHTML=count;
         }
         else{
           h5.innerHTML=count;
            
         }
         
       },33)
    }
})
tl.to(".line h2",{
    animationName:"anima",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:3.9
})
tl.from("#page1",{
    opacity:0,
    y:1600,
    dealy:0.2,
    ease:Power4,
    duration:0.5
})
tl.to("#loader",{
    display: "none",
})