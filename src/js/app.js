// let ClickCounterViewModel = function(){
//     this.numberOfClicks = clicks.observable(0);
//     this.registerClick = function(){
//         this.numberOfClicks(this.numberOfClicks() + 1);
//     };
//     this.resetClicks = function(){
//         this.numberOfClicks(0);
//     };
//     this.hasCLickedTooManyTimes = clicks.purecomputed(function(){
//         return this.numberOfClicks() >= 100;
//     }, this);
    
// };

// click.applyBindings

// const updateCli



// let coins = 0;
// let coinsPS = 0;
// let coinsPC = 1;


// function gainCoin() {

// coins += coinsPC;

// }

// setInterval(function renderCoins() {

// document.getElementById("coins").innerHTML = "Coins: " + coins;

// })


// setInterval(function renderCoinsPS() {

// document.getElementById("coinsPS").innerHTML = "Coins per second: " + 
// coinsPS;

// })
// const addInterval;
// function getCoinsPS(){

// if (coins >= 50){
// coinsPS += 1;
// coins -= 50;

// }
// else{
// alert("Sorry, you don't have enough coins.")
// }
// if (addInterval) window.clearTimeout(addInterval)
// addInterval = setInterval(function coinPS() {coins += coinsPS;

// }, 1000)

// }

let gen1amount = 0, 
    gen1price = 10,
    gen1baseprice = 100, 
    credit = 0, 
    cps = 0;
    creditbuy = 0;
    extraClicks = 150;

    function update(){
        click.onclick = function() {credit = credit + 1};
        generator1.onclick = function() {
            if (credit >= gen1price) {
                credit = credit - gen1price;
                gen1amount = gen1amount + 1;
                cps = cps + 1;
                gen1price = gen1baseprice * (Math.pow(1.2, gen1amount));
            }
            else{
                alert("You need more clicks")
            }
        }                        
        
        credit = credit + (cps/60);
    }

    function draw(){
        creditPerSecond.value = cps.toFixed(0);
        creds.value = credit.toFixed(0);
        generator1.value = gen1price.toFixed(0);
        generator1amount.value = gen1amount.toFixed(0);
    }

        
    
    let mainloop = function() {
        update(), draw(), reset(), buyClick()
    }; 
    setInterval(mainloop, 16);
     
    
    function reset(){
        resetClick.onclick = function(){ 
            cps = 0,
            gen1amount = 0,
            gen1price = 10;
            gen1baseprice = 100;
            credit = 0, 
            creditbuy = 0; 
        };
    }
    function buyClick(){
        buyClicks.onclick = function(){
            if(credit >= 150){
                credit += 50;  
            }
        };
    }

    function toggleClass(){
        let menu = document.querySelector(".mainMenu");
        menu.classList.toggle("toggleCls");
    }
    let hambuger = document.querySelector(".hamIcon");
    
    hambuger.addEventListener("click", toggleClass);
 

    