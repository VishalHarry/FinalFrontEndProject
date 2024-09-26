
var tl=gsap.timeline();
tl.from("#nav h3",{
    y:-40,
    opacity:0,
    delay:0.4,
    duration:0.9,
    stagger:0.1
})

tl.from("#main h1",{
    x:-500,
    opacity:0,
   
    duration:0.8,
    stagger:0.3
})
tl.from("img",{
    x:800,
    opacity:0,
    duration:0.8,
   
    rotate:90,
    stagger:0.5
})

