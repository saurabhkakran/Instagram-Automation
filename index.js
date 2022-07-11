//const  promises = require('node:stream');
const puppeteer = require('puppeteer');
let noofpost=process.argv[2];   //taking input for no of pics 
(async function()  {
  const browser = await puppeteer.launch({ headless: false }); // default is true
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/',{waitUntil:"networkidle2"});
  await page.type("input[name='username']","*********",{delay:100});  //please add your username in place of *******
  await page.type("input[name='password']","*********",{delay:100});       //please add your password in place of *******
  //await page.click("button[type='submit']");
  await Promise.all([
page.waitForNavigation({waitUntil:"networkidle2"}),
await page.click("button[type='submit']"),
  ]);
  await page.type("input[placeholder='Search']","pepper_pepcoding",{delay:100});
  await page.waitForSelector(".fuqBx .JvDyy a"); 
  await Promise.all([
  page.waitForNavigation({waitUntil:"networkidle2"}),
  await page.click(".fuqBx .JvDyy a"),
  ]);
  await page.waitForSelector("._9AhH0");
  await Promise.all([
    page.waitForNavigation({waitUntil:"networkidle2"}),
    await page.click("._9AhH0"),
    ]);
    
    let i=0;
    //let noofpost=10;
    do{
      await page.waitForSelector(".fr66n .wpO6b");
      await page.click(".fr66n .wpO6b");
      await Promise.all([
        page.waitForNavigation({waitUntil:"networkidle2"}),
        await page.click("._65Bje.coreSpriteRightPaginationArrow"),
        ]);
    }while(i<noofpost){

    }

})();
