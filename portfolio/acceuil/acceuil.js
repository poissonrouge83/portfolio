const carré = document.querySelector(".carré");
const petitCarré = document.querySelector(".petit-carré");
const logo = document.querySelector(".const-logos");
const nom = document.querySelector(".nom");
const trait = document.querySelector(".trait2");
const moi = document.querySelector(".moi");
const linkedin = document.querySelector(".linkedin");
const github = document.querySelector(".github");
const gmail = document.querySelector(".gmail");
const navBar = document.querySelector(".navbar")
const navElements = document.querySelector(".nav-elements");
const h2 = document.querySelector("h2")
const devWeb = document.querySelector(".devweb")
const navUl = document.querySelector(".nav-uk")
const acceuil = document.querySelector(".acceuil")
const cv = document.querySelector(".cv")
const projets = document.querySelector(".projets")
const contacts = document.querySelector(".contacts")
const rond = document.querySelector(".rond")




window.addEventListener('load', () => {

    const TL = gsap;//.({paused: true});

    TL
    //.staggerFrom(expDip, 10, {top: -50, opacity: 0, ease: "power2.out"})
    //.staggerFrom(expDip, 1, {opacity: 0, ease: "power2.out"})

    
    .from(carré, 1.5, {margin: 0, width: 0, ease: "power1.out"} )
    gsap.from("body", 1.5, {backgroundColor:"black"})
   // gsap.from(petitCarré, 1.5, {boxShadow:0})
    //TweenLite.from(photo, 1, { boxShadow: "none", ease: "power3.out", duration:2 });
    
    /**************************************************************************************** */
    // gsap.from(linkedin, 1.4, {width:0, autoAlpha: 0.5, ease:"bounce.out"})
    //gsap.from(github, 1.4, {width:0, autoAlpha: 0, ease:"bounce.out"},0.7)
    //gsap.from(gmail, 1.4  , {width:0, autoAlpha: 0, ease:"bounce.out"}, 0.9)
    
    gsap.from(".cont-logos img", 1.6, {height:0, autoAlpha:0, ease:"elastic.out", stagger:{each:0.4}})
    /*******************************************************************************************/
    
    gsap.fromTo(nom, 15, {color: "rgb(97, 125, 253)"}, {color: "black"})
    //.from(nom, 1.5, {width: 0, ease: "power1.out"})
    //gsap.from(trait, 1.5, {margin:0, width: 0})
    //.from(moi, 1.5, {width: 0, ease: "power1.out"} )
    //.from(img1, 1.5, {width: 0, ease: "power2.out"},"-=1.5")
    //.from(expDip, 0.4, {transform: "scale(0)", ease: "power2.out"})
    //.staggerFrom(expDip, 1, {right: -200, ease: "power2.out"}, 0.3 );
    gsap.fromTo(moi,3, {opacity:0}, {opacity:1})
   // gsap.fromTo(petitCarré,3, {opacity:0}, {opacity:1})
    gsap.from(trait, 2, {scale:0, ease: "back.out(4)"})
    
    gsap.from(devWeb, 2, {height:0})

  //  gsap.formTo(rond, 5, {x: "random([10,20,30,40,50,60,70,80,90])"}, {y: "random([10,20,30,40,50,60,70,80,90])"})
    
    
    TL.play();
})

const body = document.main;

//setInterval(rainFall, 100);

//function rainFall() {
  //  const rond = document.querySelector(".rond");

   // rond.classList.add(".rond")
    // waterDrop.classList.add("i");
   // waterDrop.classList.add("fas");
    //waterDrop.classList.add("fa-tint");
    //rond.style.fontSize = Math.random() * 7 + "px";
    // waterDrop.style.fontSize = 100 + "px";
    //rond.style.animationDuration = Math.random() * 1 + "s";
    // waterDrop.style.animationDuration = 2+"s";
    //rond.style.opacity = Math.random() + 0.2;
    //rond.style.left = Math.random() * window.innerWidth + "px";
    //rond.style.top = Math.random() * window.innerWidth + "px";
    //rond.Math = Math.random() * 50;
    //waterDrop.style.color = "rgb(" + red + "," + green + "," + blue + ")";
    // waterDrop.style.color = Math.random() + "#edf5f5", "000000";
   // rond.style.width = Math.random() * 50 + "px";
   // rond.style.height = Math.random() * 50 + "px";

    //body.appendChild(rond);

    //setTimeout(() => {
      //  rond.remove();
    //}, 6000)

//}

 
