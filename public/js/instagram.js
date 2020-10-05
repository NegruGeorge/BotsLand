// selectors
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("nav__links")[0]
const FOLLOWflexboxitem = document.querySelector("#FollowFlexbox")
const UNFOLLOWflexboxitem = document.querySelector("#UnFollowFlexbox")
const LIKEflexboxitem = document.querySelector("#LikeFlexbox")




// btns 
const btnfollow   = FOLLOWflexboxitem.children[0].children[2].children[4]
const btnUnfollow = UNFOLLOWflexboxitem.children[0].children[2].children[4]
const btnLike     = LIKEflexboxitem.children[0].children[2].children[4]


buttons = [btnfollow,btnUnfollow,btnLike];



// actions
toggleButton.addEventListener("click",()=>{
    navbarLinks.classList.toggle("active");
   
})




// FUNCTIONS FOR FOLLOW CASE
// FUNCTIONS FOR FOLLOW CASE
// FUNCTIONS FOR FOLLOW CASE
// FUNCTIONS FOR FOLLOW CASE
// FUNCTIONS FOR FOLLOW CASE



btnfollow.addEventListener("click",()=>{
    console.log("go follow")
    addblurtoFollow()
     setTimeout(()=>{
        //  btnfollow.disabled=true
        for(let i =0;i<buttons.length;i++)
            buttons[i].disabled = true
        },500)
})

function addblurtoFollow(){
    

    // get the section1 classs and add blur
    console.log(FOLLOWflexboxitem.children[0].classList)
    FOLLOWflexboxitem.children[0].classList.add("blur");
    console.log(FOLLOWflexboxitem.children[0].classList)

    console.log("// iesim din blur")
    // we get the button and add disable to it
    // btnfollow.disabled=true;
 
    FOLLOWflexboxitem.children[1].hidden = false;

   
}


 //addblurtoFollow()

 function errortoFollow()
 {
    let div =document.querySelector("#FollowFlexbox").children[0].children[1]  
    console.log(div.id)

    if(div.id ==="h20"){

         // we remove the blur 
         console.log(FOLLOWflexboxitem.children[0].classList)
         FOLLOWflexboxitem.children[0].classList.remove("blur")
         console.log(FOLLOWflexboxitem.children[0].classList)
        //  btnfollow.disabled=false;
         for(let i =0;i<buttons.length;i++)
         buttons[i].disabled = false;

         // we add the alert

        div.classList.add("h2warning");
        
        div.textContent="Something went wrong"
        
       
    }
    if(div.id ==="h21")
    {
        // we remove the blur 
        FOLLOWflexboxitem.children[0].classList.remove("blur")
        //btnfollow.disabled=false;
        for(let i =0;i<buttons.length;i++)
        buttons[i].disabled = false;

        // we add the alert
        div.classList.add("h2works")
        div.textContent="Bot finished to follow"
    }

     setTimeout(()=>{
        div.className='';
        div.classList.add("errorh2");
     },8000);
     
        

 }
 errortoFollow()



// FUNCTIONS FOR UNFOLLOW CASE
// FUNCTIONS FOR UNFOLLOW CASE
// FUNCTIONS FOR UNFOLLOW CASE
// FUNCTIONS FOR UNFOLLOW CASE
// FUNCTIONS FOR UNFOLLOW CASE







btnUnfollow.addEventListener("click",()=>{
    console.log("go Unfollow")
    addblurtoUnFollow()
     setTimeout(()=>{
        //  btnUnfollow.disabled=true
         for(let i =0;i<buttons.length;i++)
         buttons[i].disabled = true
        },500)
})

function addblurtoUnFollow(){
    

    // get the section1 classs and add blur
    console.log(UNFOLLOWflexboxitem.children[0].classList)
    UNFOLLOWflexboxitem.children[0].classList.add("blur");
    console.log(UNFOLLOWflexboxitem.children[0].classList)

    console.log("// iesim din blur")
    // we get the button and add disable to it
    // btnUNfollow.disabled=true;
 
    UNFOLLOWflexboxitem.children[1].hidden = false;

   
}






// we have functions for follow and unfollow

 function errortoUnFollow()
 {
    let div =document.querySelector("#UnFollowFlexbox").children[0].children[1]  
    console.log(div.id)

    if(div.id ==="h20"){

         // we remove the blur if one
         console.log(UNFOLLOWflexboxitem.children[0].classList)
         UNFOLLOWflexboxitem.children[0].classList.remove("blur")
         console.log(UNFOLLOWflexboxitem.children[0].classList)
         //btnUnfollow.disabled=false;
         for(let i =0;i<buttons.length;i++)
         buttons[i].disabled = false;
         // we add the alert

        div.classList.add("h2warning");
        
        div.textContent="Something went wrong"
        
       
    }
    if(div.id ==="h21")
    {
        // we remove the blur 
        UNFOLLOWflexboxitem.children[0].classList.remove("blur")
       // btnUnfollow.disabled=false;
        for(let i =0;i<buttons.length;i++)
        buttons[i].disabled = false;

        // we add the alert
        div.classList.add("h2works")
        div.textContent="Bot finished to UnFollow"
    }

     setTimeout(()=>{
        div.className='';
        div.classList.add("errorh2");
     },8000);
     
        

 }
 errortoUnFollow();





// GO LIKE FUNNCTIONS
// GO LIKE FUNNCTIONS
// GO LIKE FUNNCTIONS
// GO LIKE FUNNCTIONS
// GO LIKE FUNNCTIONS
// GO LIKE FUNNCTIONS
// GO LIKE FUNNCTIONS
// GO LIKE FUNNCTIONS







btnLike.addEventListener("click",()=>{
    console.log("go Like")
    addblurtoLike()
     setTimeout(()=>{
        //  btnLike.disabled=true
         for(let i =0;i<buttons.length;i++)
         buttons[i].disabled = true
        },500)
})

function addblurtoLike(){
    

    // get the section1 classs and add blur
    console.log(LIKEflexboxitem.children[0].classList)
    LIKEflexboxitem.children[0].classList.add("blur");
    console.log(LIKEflexboxitem.children[0].classList)

    console.log("// iesim din blur")
    // we get the button and add disable to it
    // btnLike.disabled=true;
 
    LIKEflexboxitem.children[1].hidden = false;

   
}






// we have functions for follow unfolloww and like

 function errortoLike()
 {
    let div =document.querySelector("#LikeFlexbox").children[0].children[1]  
    console.log(div.id)

    if(div.id ==="h20"){

         // we remove the blur if one
         console.log(LIKEflexboxitem.children[0].classList)
         LIKEflexboxitem.children[0].classList.remove("blur")
         console.log(LIKEflexboxitem.children[0].classList)
         //btnLike.disabled=false;
         for(let i =0;i<buttons.length;i++)
         buttons[i].disabled = false;
         // we add the alert

        div.classList.add("h2warning");
        
        div.textContent="Something went wrong"
        
       
    }
    if(div.id ==="h21")
    {
        // we remove the blur 
        LIKEflexboxitem.children[0].classList.remove("blur")
        //btnLike.disabled=false;
        for(let i =0;i<buttons.length;i++)
            buttons[i].disabled = false;
        // we add the alert
        div.classList.add("h2works")
        div.textContent="Bot finished to Like "
    }

     setTimeout(()=>{
        div.className='';
        div.classList.add("errorh2");
     },8000);
     
        

 }
 errortoLike();






 console.log("dada")