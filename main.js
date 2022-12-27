const inputLeft = document.querySelector('.textAreaLeft input');
const inputRight = document.querySelector('.textAreaRight input');
const bvLeft = document.querySelector('.curBtnLeft .bv');
const bvRight = document.querySelector('.curBtnRight .bv');
const pLeft = document.querySelector('.textAreaLeft p');
const pRight = document.querySelector('.textAreaRight p');
const curBtnLeft = document.querySelectorAll('.curBtnLeft button');
const curBtnRight = document.querySelectorAll('.curBtnRight button');
const msg = document.querySelector('.message');

fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=RUB,USD,EUR,GBP`)
.then(res => res.json())
.then(res => {
    inputRight.value = (res.rates.USD * inputLeft.value).toFixed(2);
    pLeft.textContent = `1 RUB = ${(res.rates.USD).toFixed(4)} USD`;
    let revCur = 1 / (res.rates.USD);
    pRight.textContent = `1 USD = ${revCur.toFixed(4)} RUB`;
})

curBtnLeft.forEach(btn => {
    btn.addEventListener('click', exchange1);
});
curBtnRight.forEach(btn => {
    btn.addEventListener('click', exchange2);
});

function exchange1(e) {
    curBtnLeft.forEach(btn => {
        btn.classList.remove('bv');
    })
    e.target.classList.add('bv');
    if (e.target.textContent != bvRight.textContent) {
        fetch(`https://api.exchangerate.host/latest?base=${e.target.textContent}&symbols=RUB,USD,EUR,GBP`)
            .then(res => res.json())
            .then(res => {
                switch (bvRight.textContent) {
                    case 'EUR':
                        inputRight.value = (res.rates.EUR * inputLeft.value).toFixed(2);
                        pLeft.textContent = `1 ${e.target.textContent} = ${(res.rates.EUR).toFixed(4)} EUR`;
                        let revCur1 = 1 / (res.rates.EUR);
                        pRight.textContent = `1 EUR  = ${revCur1.toFixed(4)} ${e.target.textContent}`;
                        break;
                    case 'USD':
                        inputRight.value = (res.rates.USD * inputLeft.value).toFixed(2);
                        pLeft.textContent = `1 ${e.target.textContent} = ${(res.rates.USD).toFixed(4)} USD`;
                        let revCur2 = 1 / (res.rates.USD);
                        pRight.textContent = `1 USD  = ${revCur2.toFixed(4)} ${e.target.textContent}`;
                        break;
                    case 'GBP':
                        inputRight.value = (res.rates.GBP * inputLeft.value).toFixed(2);
                        pLeft.textContent = `1 ${e.target.textContent} = ${(res.rates.GBP).toFixed(4)} GBP`;
                        let revCur3 = 1 / (res.rates.GBP);
                        pRight.textContent = `1 GBP  = ${revCur3.toFixed(4)} ${e.target.textContent}`;
                        break;
                    case 'RUB':
                        inputRight.value = (res.rates.RUB * inputLeft.value).toFixed(2);
                        pLeft.textContent = `1 ${e.target.textContent} = ${(res.rates.RUB).toFixed(4)} RUB`;
                        let revCur4 = 1 / (res.rates.RUB);
                        pRight.textContent = `1 RUB  = ${revCur4.toFixed(4)} ${e.target.textContent}`;
                        break;
                }
            })
            .catch(err=>{
                msg.innerText=` ${err}`;
                })
    }
    else {
        inputRight.value = inputLeft.value;
        pLeft.textContent = `1 ${e.target.textContent} = 1 ${e.target.textContent}`;
        pRight.textContent = `1 ${e.target.textContent} = 1 ${e.target.textContent}`;
    }
}

function exchange2(e) {
    curBtnRight.forEach(btn => {
        btn.classList.remove('bv');
    })
    e.target.classList.add('bv');
    if (bvLeft.textContent != e.target.textContent) {
        fetch(`https://api.exchangerate.host/latest?base=${bvLeft.textContent}&symbols=RUB,USD,EUR,GBP`)
            .then(res => res.json())
            .then(res => {
                switch (e.target.textContent) {
                    case 'EUR':
                        inputRight.value = (res.rates.EUR * inputLeft.value).toFixed(2);
                        pLeft.textContent = `1 ${bvLeft.textContent} = ${(data.rates.EUR).toFixed(4)} EUR`;
                        let revCur5 = 1 / (res.rates.EUR);
                        pRight.textContent = `1 EUR = ${revCur5.toFixed(4)} ${bvLeft.textContent}`;
                        break;
                    case 'USD':
                        inputRight.value = (res.rates.USD * inputLeft.value).toFixed(2);
                        pLeft.textContent = `1 ${bvLeft.textContent} = ${(data.rates.USD).toFixed(4)} USD`;
                        let revCur6 = 1 / (res.rates.USD);
                        pRight.textContent = `1 USD = ${revCur6.toFixed(4)} ${bvLeft.textContent}`;
                        break;
                    case 'GBP':
                        inputRight.value = (res.rates.GBP * inputLeft.value).toFixed(2);
                        pLeft.textContent = `1 ${bvLeft.textContent} = ${(data.rates.GBP).toFixed(4)} GBP`;
                        let revCur7 = 1 / (res.rates.GBP);
                        pRight.textContent = `1 GBP = ${revCur7.toFixed(4)} ${bvLeft.textContent}`;
                        break;
                    case 'RUB':
                        inputRight.value = (res.rates.RUB * inputLeft.value).toFixed(2);
                        pLeft.textContent = `1 ${bvLeft.textContent} = ${(data.rates.RUB).toFixed(4)} RUB`;
                        let revCur8 = 1 / (res.rates.RUB);
                        pRight.textContent = `1 RUB = ${revCur8.toFixed(4)} ${bvLeft.textContent}`;
                        break;
                }
            })
            .catch(err=>{
                msg.innerText=` ${err}`;
                })
    }
    else {
        inputRight.value = inputLeft.value;
        pLeft.textContent = `1 ${e.target.textContent} = 1 ${e.target.textContent}`;
        pRight.textContent = `1 ${e.target.textContent} = 1 ${e.target.textContent}`;
    }
}

inputLeft.addEventListener('keyup', (e) => {
    let money = e.target.value;
    fetch(`https://api.exchangerate.host/latest?base=${bvLeft.textContent}&symbols=RUB,USD,EUR,GBP`)
        .then(res => res.json())
        .then(res => {
            switch (bvRight.textContent) {
                case 'EUR':
                    inputRight.value = (res.rates.EUR * money).toFixed(2);
                    break;
                case 'USD':
                    inputRight.value = (res.rates.USD * money).toFixed(2);
                    break;
                case 'GBP':
                    inputRight.value = (res.rates.GBP * money).toFixed(2);
                    break;
                case 'RUB':
                    inputRight.value = (res.rates.RUB * money).toFixed(2);
                    break;
            }
        })
        .catch(err=>{
            msg.innerText=` ${err}`;
            })
})

inputRight.addEventListener('keyup', (e) => {
    let money = e.target.value
    fetch(`https://api.exchangerate.host/latest?base=${bvLeft.textContent}&symbols=RUB,USD,EUR,GBP`)
        .then(res => res.json())
        .then(res => {
            switch (bvRight.textContent) {
                case 'EUR':
                    inputLeft.value = (money / res.rates.EUR).toFixed(2);
                    break;
                case 'USD':
                    inputLeft.value = (money / res.rates.USD).toFixed(2);
                    break;
                case 'GBP':
                    inputLeft.value = (money / res.rates.GBP).toFixed(2);
                    break;
                case 'RUB':
                    inputLeft.value = (money / res.rates.RUB).toFixed(2);
                    break;
            }
        })
        .catch(err=>{
            msg.innerText=` ${err}`;
            })
})


document.querySelector('button').onclick = () => {
    if (!navigator.onLine) {
        msg.innerText = "internet bağlantısı itdi!";
        return;
    }
    fetch("https://api.exchangerate.host/latest?base=RUB&symbols=USD ")
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err=>{
        msg.innerText=` ${err}`;
        })
}