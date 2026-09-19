const {test,expect}=require('@playwright/test')
test ('Browser Launch', async({page})=>{

await page.goto("https://demoqa.com/alerts");

// page.on('dialog', async dialog =>{
//     expect(dialog.type()).toContain('alert');
//     expect(dialog.message()).toContain("You clicked a button");
//     await dialog.accept();
// })
// await page.locator('#alertButton').click();

//  page.on('dialog', async dialog =>{
//      expect(dialog.type()).toContain('timer');
//      expect(dialog.message()).toContain("This alert appeared after 5 seconds");
//     await dialog.accept();
//  } )
//  await page.locator('#timerAlertButton').click();

 page.on('dialog', async dialog =>{
    expect(dialog.type()).toContain("confirm");
     expect(dialog.message()).toContain("Do you confirm action?");
     await dialog.dismiss();
 })
 await page.locator('#confirmButton').click();
 await page.waitForTimeout(5000);
})