const puppeteer = require('puppeteer');


const get_random_interval = async(interval,capacity)=>{

  let r = Math.floor(Math.random() * interval) +3
  
  let first = r;
  let last = r+capacity;

  let intv = [first,last]
  return intv;

}

const get_rand_like_interval = async(interval,capacity)=>{
  //I need a random value but as they are grouped in divs of 3 
 let inter = Math.floor(Math.random() * Math.floor(interval/3)) +2
 let first;
 if(inter>5)  first = inter-3;
  else first = inter

 let last = first+ Math.floor(capacity/3) 
 let intv = [first,last]
 return intv
}



 const get_random_string = async () => {
  let vname = ["coding","code","programming","python","javascript","programm","technology","dog","cat","horse","life","new york","America","happy","comedy",
"joke","trips","vacation","family","ocean","animals","animal","gym","work","workout","job","jobs","apple","insta","instagram","facebook"]
  let rname = Math.floor(Math.random() * (vname.length-1))

  let vString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  rString = Math.floor(Math.random() * (vString.length-1))

  let val = vname[rname] + vString[rString];
  return val;
 }

const get_random_nr_of_x = async(x) =>{
  let r =  Math.floor(Math.random() * x) +1;
  return r;
}







// START PORGRAM


const InstaFollow = async (user,passw,CountToFollow) => {

  
  const browser = await puppeteer.launch({headless: true,
  args: ["--no-sandbox"]
  });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/');

  await page.waitForSelector('#loginForm');
  const [username] = await page.$x('/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[1]/div/label/input') 
  await username.type(user,{delay:100})

  
  const [password]  = await page.$x("/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[2]/div/label/input")
  await password.type(passw,{delay:100}) 

  const [btnLOGIN] = await page.$x("/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[3]/button")
  await btnLOGIN.click()

  await page.waitForSelector(".x3qfX");

  
  let val = await get_random_string();


  // in case a windows with turn notification on will apear
  await page.waitForTimeout(5000)
  let [turnOnNot] = await page.$x("/html/body/div[4]/div/div/div/div[3]/button[2]")
  if(turnOnNot != undefined){
   
    await turnOnNot.click()
  }


  await page.waitForTimeout(1000)
  await page.type(".x3qfX",val,{delay:300})

  await page.waitForSelector(".drKGC");
  await page.waitForTimeout(3000)
  let rnr = await get_random_nr_of_x(5);

  let pagina ="";
  
   while(true){
    const options  = await page.$$eval(".uyeeR span",spans=>spans.map( span=>span.textContent));
   
    if(options[rnr][0] != "#"){
      pagina=options[rnr];
      break;
      }
       
    else {
      val = await get_random_string();
      for(let i=0;i<options[rnr].length;i++){
        await page.keyboard.press("Backspace",{delay:50})
      }

      await page.type(".x3qfX",val,{delay:300})

      await page.waitForSelector(".drKGC");
      await page.waitForTimeout(3000)
      rnr = await get_random_nr_of_x(5);
   
    }
 
   }
    
   
   
    
 

   await page.waitForTimeout(2000)
  const [btnPagina] = await page.$x(`/html/body/div[1]/section/nav/div[2]/div/div/div[2]/div[3]/div[2]/div/a[${rnr}+1]`)
  await btnPagina.click()

   await page.waitForSelector(".-nal3");
   await page.waitForTimeout(3000)
   let [btn] = await page.$x("/html/body/div[1]/section/main/div/header/section/ul/li[2]/a")
   await btn.click();

    // i need to scroll the page

    for(let i=0;i<10;i++){  

      await page.waitForSelector(".PZuss")
      const elem = await page.$(".isgrP");
      const boundingBox = await elem.boundingBox();
      await page.mouse.move(
        boundingBox.x + boundingBox.width / 2,
        boundingBox.y + boundingBox.height / 2
      );
        
      await page.mouse.wheel({deltaY: 600})
      let rand = Math.floor(Math.random() *2) +1
      await page.waitForTimeout(rand*1000)

    }
   
    
    const peoplebtnFollow  = await page.$$eval(".sqdOP",spans=>spans.map( span=>span.textContent));
 
   
  
  
    
    // LOGIC FOR FOLLOWING
    
    let i;
    await page.waitForTimeout(2000)
   // make the logic to wwhatt tto follow
    if(peoplebtnFollow[0]==="Message" || peoplebtnFollow[1]==="") 
      {i=2
        if(peoplebtnFollow.length >CountToFollow){
          // case 1-1
         
          let intv=[i,CountToFollow]
         
          if(peoplebtnFollow.length > CountToFollow*3)
              intv = await  get_random_interval(peoplebtnFollow.length-CountToFollow-1,CountToFollow);

          for(i=intv[0];i<intv[1];i++)
          {
            if(peoplebtnFollow[i]==="Follow"){
              const [btnP] = await page.$x(`/html/body/div[4]/div/div/div[2]/ul/div/li[${i}]/div/div[2]`) 
            
              await page.waitForTimeout(1000)
              await btnP.click()

              await page.waitForTimeout(1000)
              let [following] = await page.$x("/html/body/div[5]/div/div/div/div[3]/button[2]")
              if(following!= undefined)
                  await following.click()
              
            }
            
            // we putt the timeout so Instagram cant detect us
            let rand = Math.floor(Math.random() *2) +1
            await page.waitForTimeout(rand*2000)
          }

        }
        else if (peoplebtnFollow.length < CountToFollow){
          //case 1-2
         
          for(i;i<peoplebtnFollow.length;i++)
          {
            if(peoplebtnFollow[i]==="Follow"){
              const [btnP] = await page.$x(`/html/body/div[4]/div/div/div[2]/ul/div/li[${i}]/div/div[2]`) 
              await page.waitForTimeout(1000)
              await btnP.click()

              await page.waitForTimeout(1000)
              let [following] = await page.$x("/html/body/div[5]/div/div/div/div[3]/button[2]")
              if(following!= undefined)
                  await following.click()

             
            }
            
            // we putt the timeout so Instagram cant detect us
            let rand = Math.floor(Math.random() *2) +1
            await page.waitForTimeout(rand*2000)
          }
        }
          
      }
    else 
      {if(peoplebtnFollow.length >CountToFollow){
        
         // case 2-1
        
         i=1;
         let intv=[i,CountToFollow]
          if(peoplebtnFollow.length > CountToFollow*3)
              intv = await get_random_interval(peoplebtnFollow.length-CountToFollow-1,CountToFollow);
         
        for(i=intv[0];i<intv[1];i++)
        {
          if(peoplebtnFollow[i-1]==="Follow"){
            const [btnP] = await page.$x(`/html/body/div[4]/div/div/div[2]/ul/div/li[${i}]/div/div[2]`) 
            await page.waitForTimeout(1000)
            await btnP.click()

            await page.waitForTimeout(1000)
            let [following] = await page.$x("/html/body/div[5]/div/div/div/div[3]/button[2]")
            if(following!= undefined)
                await following.click()

        
          }
      
        
          // we putt the timeout so Instagram cant detect us
          let rand = Math.floor(Math.random() *2) +1
          await page.waitForTimeout(rand*2000)
        }
      
      }

        else if (peoplebtnFollow.length < CountToFollow){
           // case 2-2
       

        for(i=1;i<peoplebtnFollow.length;i++)
        {
          if(peoplebtnFollow[i-1]==="Follow"){
            const [btnP] = await page.$x(`/html/body/div[4]/div/div/div[2]/ul/div/li[${i}]/div/div[2]`) 
            await page.waitForTimeout(1000)
            await btnP.click()

            await page.waitForTimeout(1000)
            let [following] = await page.$x("/html/body/div[5]/div/div/div/div[3]/button[2]")
            if(following!= undefined)
                await following.click()

            
          }
          

          // we putt the timeout so Instagram cant detect us
          let rand = Math.floor(Math.random() *2) +1
          await page.waitForTimeout(rand*2000)
        }

      }
      }
    
  //  const [btnP] = await page.$x(`/html/body/div[4]/div/div/div[2]/ul/div/li[2]/div/div[2]`)
  //   await btnP.click()
 
 
 
  


      await browser.close();
    


};









const InstaUnfollow =  async (user,passw,CountToUnFollow) => {

  
  const browser = await puppeteer.launch({headless: true,
    args: ["--no-sandbox"]
  });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/');
  await page.waitForSelector('#loginForm');
  const [username] = await page.$x('/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[1]/div/label/input') 
  await username.type(user,{delay:100})

   
  const [password]  = await page.$x("/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[2]/div/label/input")
  await password.type(passw,{delay:100}) 

  const [btnLOGIN] = await page.$x("/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[3]/button")
  await btnLOGIN.click()

  await page.waitForSelector(".x3qfX");


  // in case a windows with turn notification on will apear
  await page.waitForTimeout(3000)
  let [turnOnNot] = await page.$x("/html/body/div[4]/div/div/div/div[3]/button[2]")
  if(turnOnNot != undefined){
   
    await turnOnNot.click()
  }
  await page.waitForTimeout(1000)
  let [profile] = await page.$x('/html/body/div[1]/section/nav/div[2]/div/div/div[3]/div/div[5]/span')
    await profile.click();

    await page.waitForTimeout(1000)
   let [profile1] = await page.$x('/html/body/div[1]/section/nav/div[2]/div/div/div[3]/div/div[5]/div[2]/div/div[2]/div[2]/a[1]')
   await profile1.click()


   // we are on the profile page and wait for it to load
   await page.waitForSelector(".-nal3");
   await page.waitForTimeout(3000)
   
   let [following] = await page.$x('/html/body/div[1]/section/main/div/header/section/ul/li[3]/a');
    await following.click();

    await page.waitForTimeout(2000)
    // i need to scroll the page

    for(let i=0;i<10;i++){  

      await page.waitForSelector("._1XyCr")
      const elem = await page.$(".isgrP");
      const boundingBox = await elem.boundingBox();
      await page.mouse.move(
        boundingBox.x + boundingBox.width / 2,
        boundingBox.y + boundingBox.height / 2
      );
        
      await page.mouse.wheel({deltaY: 600})
      let rand = Math.floor(Math.random() *2) +1
      await page.waitForTimeout(rand*1000)

    }


    // get all the people
    const peoplebtnFollow  = await page.$$eval(".sqdOP",spans=>spans.map( span=>span.textContent));
   


    //CountToFollow
      if(CountToUnFollow<peoplebtnFollow.length)
      {
        for(let i=1;i<CountToUnFollow;i++)
          {
            
            const [btn] = await page.$x(`/html/body/div[4]/div/div/div[2]/ul/div/li[${i}]/div/div[2]/button`);
            await page.waitForTimeout(1000)
            await  btn.click()

             let rand = Math.floor(Math.random() *2) +1
            await page.waitForTimeout(rand*1000)

             // we wait for unfollow button to apear
            await page.waitForSelector(".aOOlW")
            
            let [unfollowing] = await page.$x("/html/body/div[5]/div/div/div/div[3]/button[1]")
             if(unfollowing!= undefined){
              await unfollowing.click()
              
             }
                


            rand = Math.floor(Math.random() *2) +1
            await page.waitForTimeout(rand*2000)
          }

        

      }else{

        for(let i=1;i<peoplebtnFollow.length-1;i++)
          { 
            const [btn] = await page.$x(`/html/body/div[4]/div/div/div[2]/ul/div/li[${i}]/div/div[2]/button`);
            await page.waitForTimeout(1000)
            await  btn.click()

            let rand = Math.floor(Math.random() *2) +1
            await page.waitForTimeout(rand*1000)
            // we wait for unfollow button to apear
            await page.waitForSelector(".aOOlW")
            
            let [unfollowing] = await page.$x("/html/body/div[5]/div/div/div/div[3]/button[1]")
            if(unfollowing!= undefined){
              await unfollowing.click()
            
            }
                


             rand = Math.floor(Math.random() *2) +1
            await page.waitForTimeout(rand*2000)
          }

      }


     
      await page.waitForTimeout(4000)
      await browser.close()

}




// INSTALIKE
// INSTALIKE
// INSTALIKE
// INSTALIKE
// INSTALIKE
// INSTALIKE





const InstaLike =  async (user,passw,CountLike,keyword) => {

  const browser = await puppeteer.launch({headless: true,
    args:["--no-sandbox"]
  });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/');
  await page.waitForSelector('#loginForm');
  const [username] = await page.$x('/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[1]/div/label/input') 
  await username.type(user,{delay:100})

   
  const [password]  = await page.$x("/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[2]/div/label/input")
  await password.type(passw,{delay:100}) 

  const [btnLOGIN] = await page.$x("/html/body/div[1]/section/main/article/div[2]/div[1]/div/form/div/div[3]/button")
  await btnLOGIN.click()

  await page.waitForSelector(".x3qfX");

   // in case a windows with turn notification on will apear
   await page.waitForTimeout(3000)
   let [turnOnNot] = await page.$x("/html/body/div[4]/div/div/div/div[3]/button[2]")
   if(turnOnNot != undefined){
     
     await turnOnNot.click()
   }
   let word = keyword
   // we have a keyword to go an folllow 
   if(!(keyword[0]==="#")) {

     word = "#" + keyword;
   }
     


  await page.waitForTimeout(1000)
  await page.type(".x3qfX",word,{delay:300})
  await page.waitForSelector(".drKGC");
  await page.waitForTimeout(2000)

  const [btnPage] = await page.$x('/html/body/div[1]/section/nav/div[2]/div/div/div[2]/div[3]/div[2]/div/a[1]')
  await btnPage.click()
  
   
  await page.waitForSelector('.EZdmt')
  await page.waitForTimeout(3000)

   // scroll down
  
  for(let i=0;i<10;i++){  

    await page.waitForSelector('.EZdmt')
    const elem = await page.$(".SCxLW");
    // the box that help us to scroll by
    const boundingBox = await elem.boundingBox();
    await page.mouse.move(
      boundingBox.x + boundingBox.width / 2,
      boundingBox.y + boundingBox.height / 2
    );
      
    await page.mouse.wheel({deltaY: 600})
    let rand = Math.floor(Math.random() *2) +1
    await page.waitForTimeout(rand*1000)

  }
    // we build a map with ()=> and we return every photo we see
      const photosToLike = await page.$$eval(".eLAPa",divs=>divs.map(div=>div.textContent))
  


    await page.waitForTimeout(3000);

    if(CountLike<0){
    
      
     
    }
    else if(CountLike===1 || CountLike===2 || CountLike ===3)
    { 
      for(let j=1;j<=CountLike;j++){
          // click on the photo
            const [btnPhoto] = await page.$x(`/html/body/div[1]/section/main/article/div[2]/div/div[2]/div[${j}]/a/div`)
            btnPhoto.click()
          // wait for it to oppen
            await page.waitForSelector(".PdwC2")
            await page.waitForTimeout(2000)
                                          
            const [likes] = await page.$x("/html/body/div[4]/div[2]/div/article/div[3]/section[1]/span[1]/button/div/span")
            const check = await page.$$eval("._8-yf5 ",el=>el.map(x=>x.getAttribute("aria-label")))
            
            // we  see  that like is on 4th pozition
            // and we check if wwe liked it already
            if(check[4] ==="Unlike"){
            
            }else{
                // we put some time to sleep before we like so we cant  get blocked
              let rand = Math.floor(Math.random() *2) +1
              await page.waitForTimeout(rand*1000)
             
              await likes.click()
            }
            
            // after we liked we need to close the page
            let rand = Math.floor(Math.random() *2) +1
            await page.waitForTimeout(rand*1500)
            const [exit] = await page.$x('/html/body/div[4]/div[3]/button/div')
            await exit.click()

            rand = Math.floor(Math.random() *2) +1
            await page.waitForTimeout(rand*1000)

      }

    }
  
   else if(CountLike*3<photosToLike.length){
       
        const intv = await get_rand_like_interval(photosToLike.length-CountLike-1,CountLike);
       

        for(let i=intv[0];i<intv[1];i++)
        {
          for(let j=1;j<4;j++){
          // click on the photo
            const [btnPhoto] = await page.$x(`/html/body/div[1]/section/main/article/div[2]/div/div[${i}]/div[${j}]/a/div`)
            btnPhoto.click()
          // wait for it to oppen
            await page.waitForSelector(".PdwC2")
            await page.waitForTimeout(2000)
                                           
            const [likes] = await page.$x("/html/body/div[4]/div[2]/div/article/div[3]/section[1]/span[1]/button/div/span")
            const check = await page.$$eval("._8-yf5 ",el=>el.map(x=>x.getAttribute("aria-label")))
            
            // we  see  that like is on 4th pozition
            // and we check if wwe liked it already
            if(check[4] ==="Unlike"){
              let i;
            }else{
                // we put some time to sleep before we like so we cant  get blocked
              let rand = Math.floor(Math.random() *2) +1
              await page.waitForTimeout(rand*1000)
              
              await likes.click()
            }
            
            // after we liked we need to close the page
            let rand = Math.floor(Math.random() *2) +1
            await page.waitForTimeout(rand*1500)
            const [exit] = await page.$x('/html/body/div[4]/div[3]/button/div')
            await exit.click()

             rand = Math.floor(Math.random() *2) +1
            await page.waitForTimeout(rand*1000)

        }
      }
    }
    else {
     
        // we nneed to go from  3 to 3  so i need math.floor(/3)
      for(let i =1;i<Math.floor((photosToLike.length-1) /3);i++)
        {
          for(let j=1;j<4;j++){

          // click on the photo
            const [btnPhoto] = await page.$x(`/html/body/div[1]/section/main/article/div[2]/div/div[${i}]/div[${j}]/a/div`)
            btnPhoto.click()
          // wait for it to oppen
            await page.waitForSelector(".PdwC2")
            await page.waitForTimeout(2000)
                                           
            const [likes] = await page.$x("/html/body/div[4]/div[2]/div/article/div[3]/section[1]/span[1]/button/div/span")
            const check = await page.$$eval("._8-yf5 ",el=>el.map(x=>x.getAttribute("aria-label")))
            
            // we  see  that like is on 4th pozition
            // and we check if wwe liked it already
            if(check[4] ==="Unlike"){
           
              let i;
            }else{
                // we put some time to sleep before we like so we cant  get blocked
              let rand = Math.floor(Math.random() *2) +1
              await page.waitForTimeout(rand*1000)
            
              await likes.click()
            }
            
            // after we liked we need to close the page
            let rand = Math.floor(Math.random() *2) +1
            await page.waitForTimeout(rand*1500)
            const [exit] = await page.$x('/html/body/div[4]/div[3]/button/div')
            await exit.click()

            rand = Math.floor(Math.random() *2) +1
            await page.waitForTimeout(rand*1000)

        }
      }
    }

  
  // /html/body/div[1]/section/main/article/div[2]/div/div[1]/div[1]/a/div
  // /html/body/div[1]/section/main/article/div[2]/div/div[11]/div[3]/a/div
  // /html/body/div[1]/section/main/article/div[2]/div/div[11]/div[2]/a/div
  // /html/body/div[1]/section/main/article/div[2]/div/div[1]/div[1]/a/div
  // /html/body/div[1]/section/main/article/div[2]/div/div[10]/div[3]/a/div

    
    await page.waitForTimeout(5000)
    await browser.close()

}





exports.InstaFollow = InstaFollow;
exports.InstaUnfollow = InstaUnfollow;
exports.InstaLike = InstaLike;


