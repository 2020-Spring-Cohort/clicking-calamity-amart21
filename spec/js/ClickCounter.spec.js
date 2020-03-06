// describe('Clicking Calamity Tests:', () => {
//     let underTest;
//     beforeEach(() => {
//         underTest = new ClickCount();
//     })
//     describe('countClick() records clicks and ClickCounter can give the clickCount', () => {
        
//         it('countClick() 1 time should result in a clickCount of 1.', () => {
//             underTest.countClick();
//             expect(underTest.clickCount).toBe(1);
//         });
//         it('countClick() 2 times should result in a clickCount of 2.', () => {
//             underTest.countClick();
//             underTest.countClick();
//             expect(underTest.clickCount).toBe(2);
//         });
//     });
//     describe('Clicking Companions:', () => {
//         it("ClickCounter should have 0 when new.", () => {
//             expect(underTest.getCompanionCount()).toBe(0);
//         });
//     });
// });
describe('Clicker should behave like a clicker: ', () =>{
    let underTest;
    beforeEach(() => {
        underTest = new clicker();
    })
    describe('Click total should increase per click: ', () => {
        describe('when click is clicked, the total is increased', () => {
            for (let i =0; i < 1; i++) {
                it('click total should increase to ${i+1} when clickCount() is called ${i} times.', () => {
                clickIsIncreased(i + 1);
                expect(underTest.getTotal()).toBe(i+1);
                                
            });
        }
    });
    describe('when ')


