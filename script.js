
const btnCheck = document.getElementById('check-btn');
const result = document.getElementById('result');

btnCheck.addEventListener('click', () => {
    const input = document.getElementById('text-input').value;
    let newInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if (input === "") {
        alert("Please input a value");
        return;
    } else {
        if (newInput.match(newInput.split('').reverse().join(''))) {
            result.innerHTML = `<strong>${input}</strong> is a palindrome`;
        } else {
            result.innerHTML = `<strong>${input}</strong> is not a palindrome`;
        }
    }
})
