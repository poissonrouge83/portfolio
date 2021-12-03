const img1 = document.querySelector(".image-exp-dip");
const expDip = document.querySelector(".experiences-diplomes");
const experiences =document.querySelector(".experiences");
const diplomes =document.querySelector(".diplomes");


window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    //.staggerFrom(expDip, 10, {top: -50, opacity: 0, ease: "power2.out"})
    //.staggerFrom(expDip, 1, {opacity: 0, ease: "power2.out"})
    
    
   // .from(expDip, 4, {height:0, ease: "power2.out"})
   .from(img1, 5, {opacity: 0, ease: "back.out"})
   
   gsap.from("body", 5, {backgroundColor: "black"})
   
    //.from(expDip, 0.4, {transform: "scale(0)", ease: "power2.out"})
    //.staggerFrom(expDip, 1, {right: -200, ease: "power2.out"}, 0.3 );
    gsap.from(experiences, 8, {opacity:0})
    gsap.from(diplomes, 8, { opacity:0})

    

    TL.play();
})