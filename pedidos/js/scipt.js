    const value = document.getElementById('value1');
    const plusButton = document.getElementById('plus1');
    const minusButton = document.getElementById('minus1');

    const updateValue = () => {
        value.innerHTML = count;
    };

    let count = 0;
    let intervalID = 0;

    const increment = () => {
        count += 1;
        updateValue();
    };

    
    plusButton.addEventListener('click', increment);

    plusButton.addEventListener('mousedown', () => {
        
    });

    document.addEventListener('mouseup', () => clearInterval(intervalID));

    minusButton.addEventListener('click', () => {
        
        count -= 1;
        updateValue();
    });

//----------------------------------- js do counter2--------------------------------------//

const value2 = document.getElementById('value2');
const plusButton2 = document.getElementById('plus2');
const minusButton2 = document.getElementById('minus2');


const updateValue2 = () => {
    value2.innerHTML = count2;
};


let count2 = 0;

const increment2 = () => {
    count2 += 1;
    updateValue2();
};

const decrement2 = () => {
    count2 -= 1;
    updateValue2();
};


plusButton2.addEventListener('click', increment2);
minusButton2.addEventListener('click', decrement2);


