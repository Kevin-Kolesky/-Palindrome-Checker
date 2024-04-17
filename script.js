
const btnCheck = document.getElementById('check-btn');
const result = document.getElementById('result');

btnCheck.addEventListener('click', () => {
    const input = document.getElementById('text-input').value;

    if (input === ""){
        alert("Please input a value");
        return;
    }else if (input.length === 1){
        result.innerHTML = `<strong>${input}</strong> is a palindrome`;
    }else{
        const reverse = input.split('').reverse().join('');
        if (input === reverse){
            result.innerHTML = `<strong>${input}</strong> is a palindrome`;
        }else{
            result.innerHTML = `<strong>${input}</strong> is not a palindrome is not a palindrome`;
        }
    }

    console.log(`Input: ${input} is with length of ${input.length} `);
    console.log(`Reverse: ${reverse} is with length of ${reverse.length} `);
})

const validate = () => {
};