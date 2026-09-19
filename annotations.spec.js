const{test, expect} = require('@playwright/test')
//only
test('test 1', async()=>{
    console.log('This is test 1');
})
//skip
// test.skip('test 2', async()=>{
//     console.log('This is test 2');
// })
// //fixme
// test.fixme('test 3', async()=>{
//     console.log('This is test 3');
// })
//slow
test.slow('test 4', async()=>{
    console.log('This is test 4');
    await page.goto('https://www.demoblaze.com/index.html');
})
// //fail
// test('test 5', async()=>{
//     test.fail
//     console.log('This is test 5');
//     expect(1).toBe(2);
// })