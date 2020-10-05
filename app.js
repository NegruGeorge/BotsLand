const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      InstaFollow = require("./instagram"),
      path = require("path")


const PORT = process.env.PORT || 3000

// using and setting stuff out
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")))



app.get("/",(req,res)=>{
    res.render("instagram.ejs")
})



app.post("/goFollow",(req,res)=>{
    let loading = false;
   
  
    let error =-1;
    // wwe make error:error =-1 => we display nothing
    // we have error=0 we have error 
    // we have error=1 bbot finished job
    
  let goFollow = async ()=>{
      try{
        await InstaFollow.InstaFollow(req.body.usernameinput, req.body.passwordinput, parseInt(req.body.peopleinput))
       
        loading = true;
        error = 1;
        res.render("instagram.ejs",{load:loading,error:error})
      }
      catch(error){
        
          loading=true;
          error=0;
          res.render("instagram.ejs",{load:loading,error:error})
      }
      
      
  }; 
       
  goFollow()
 
})

app.post("/goUnfollow",(req,res)=>{
    let loading = false;
   
   
    let error =-1;

    

    // wwe make error:error =-1 => we display nothing
    // we have error=0 we have error 
    // we have error=1 bbot finished job
    
  let goUnFollow = async ()=>{
      try{
        await InstaFollow.InstaUnfollow(req.body.usernameinput, req.body.passwordinput, parseInt(req.body.peopleinput))
       
        loading = true;
        error = 1;
        res.render("instagram.ejs",{errorUnFollow:error})
      }
      catch(error){
         
          loading=true;
          error=0;
          res.render("instagram.ejs",{errorUnFollow:error})
      }
      
      
  }; 
       
  goUnFollow()
})



app.post("/GoLike",(req,res)=>{

    let loading = false;
   
  
    let error =-1;


    // wwe make error:error =-1 => we display nothing
    // we have error=0 we have error 
    // we have error=1 bbot finished job
    

    // when i send to ejs i need to send a diffrent name for error because i have 3 of them
  let goLike = async ()=>{
      try{
        await InstaFollow.InstaLike(req.body.usernameinput, req.body.passwordinput, parseInt(req.body.likeinput),req.body.keywordinput)
     
        loading = true;
        error = 1;
        res.render("instagram.ejs",{errorLike:error})
      }
      catch(error){
         
          loading=true;
          error=0;
          res.render("instagram.ejs",{errorLike:error})
      }
      
      
  }; 
       
  goLike()

})


app.get("/twitter",(req,res)=>{
  res.render("twitter.ejs")
})


app.get("/tinder",(req,res)=>{
  res.render("tinder.ejs");
})

// FACEBOOK  REQ RES
// FACEBOOK  REQ RES
// FACEBOOK  REQ RES
// FACEBOOK  REQ RES
// FACEBOOK  REQ RES

app.get("/facebook",(req,res)=>{
  res.render("facebook.ejs");
})



// check if application is on herok
if(process.env.NODE_ENV ==="production"){
    pass
}
    

app.get("/about",(req,res)=>{
  res.render("about.ejs");
})


app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
    
})