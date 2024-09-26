///from and to methods in GSAP

// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//    backgroundColor:"blue"
// })
// gsap.from("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//    backgroundColor:"blue"
// })

//.2 timeline


//   var tl=gsap.timeline()

// tl.to(".box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     scale:0.5
   
// })
// tl.to(".box2",{
//     x:1000,
//     duration:2,
  
//     rotate:360,
//     scale:0.5
   
// })
// tl.to(".box3",{
//     x:1000,
//     duration:2,
    
//     rotate:360,
//     scale:0.5
   
// })


//.3 scroll triger

// gsap.from("#page1 #circle",{
//     scale:0,
//     delay:1,
//     duratiion:2,
//     rotate:720
//  })
//  gsap.from("#page2 #circle",{
//     scale:0,
//     delay:1,
//     duratiion:2,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"#page2 #circle",
//         scroller:"body",
//         marker:"true",
//         start:"top 60%",
//         end:"top 30%",
//         scrub:2
//     }
//  })
//  gsap.from("#page3 #circle",{
//     scale:0,
//     delay:1,
//     duratiion:2,
//     rotate:720,
//     scrollTrigger:"#page3 #circle"
//  })


//.4 pin property of scroller tirgger

// gsap.to("#page2  img",{
//      width:"100%",
//      scrollTrigger:{
//       trigger:"#page2",
//       scroller:"body",
//       markers:"true",
//       start:"top 0",
//       end:"top -100%",
//       scrub:2,
//       pin:true
//      }
// })

//.5 horizonal scrolling property of scroller 

gsap.to("#page2  h1",{
 transform:"translateX(-125%)",
   scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            markers:"true",
            start:"top 0",
            end:"top -100%",
            scrub:4,
            pin:true
           }
})