const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("nav__links")[0]


toggleButton.addEventListener("click",()=>{
    navbarLinks.classList.toggle("active");
   
})


function addblur(){
    const flexboxitem = document.querySelector("#FollowFlexbox")

    // get the section1 classs and add blur
    flexboxitem.children[0].classList.add("blur");

    // we get the button and add disable to it
    flexboxitem.children[0].children[2].children[4].disabled=true;
 
    flexboxitem.children[1].hidden = false;

   
}


 //addblur()

