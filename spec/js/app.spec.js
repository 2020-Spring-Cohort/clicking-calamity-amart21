describe('app.js manipulates the DOM to reflect the status of the Clicker object.' , () =>{
    let testClicker;
    let testClickCounter;
    let testTotalButton;

    beforeEach(() => {
        testClicker = new Clicker();
        testClickCounter = document.createElement('div');
        testTotalButton = document.createElement('button');
        makeButtonintoClicker(testClicker, testClickCounter,testTotalButton);
    })
    describe('updateClickCounter() changes an element\'s innerText to match a given Click count total',() => {

       it('Clickcounter element should have an innerText of \'0\' if the clicker is not clicked', () => {
           updateCLickCounter(testClickCounter, testClicker);
           expect(testClickCounter.innerText).toBe('0');
          });
          it('ClickCounter element should have an innerText of \'1\' if the clicker is clicked', () => {
              testClicker.click();
              updateCLickCounter(testClickCounter, testClicker);
                expect(testClickCounter.innerText).toBe('1');
          });
});
describe('makeButtonIntoTotalButton() makes button into a totalButton ' , () =>{
    beforeEach(() => {
        testTotalButton.click();
    })
    it('Should update the count of clicks after the clicker is clicked' , () => {
        expect(testClicker.getCount()).toBe(1);

    }

})

})
