const countValue=document.querySelector('#counter');
const increment=()=>{
    // get the value from UI
    let value=parseInt(countValue.innerText);
    // increment the value
    value=value+1;
    // set the value onto UI
    countValue.innerText=value;
};

const decrement=()=>{
    let value=parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;

};