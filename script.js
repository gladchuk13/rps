/* document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const messageContainer = document.getElementById('message-container');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            messageContainer.textContent = 'Ваше повідомлення відправлено!';
        } catch (error) {
            messageContainer.textContent = 'Під час відправки виникла помилка';
        }
    });
});
 */
/* 
const form = document.getElementById('myForm');
document.addEventListener('DOMContentLoaded', () => {
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        document.getElementById('name').value = formData.name;
        document.getElementById('email').value = formData.email;
        document.getElementById('comments').value = formData.comments;
    }
})
form.addEventListener('input', (event) =>  {
let formData  = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    comments: document.getElementById('comments').value}
    localStorage.setItem('formData', JSON.stringify(formData));
}) */




document.addEventListener('DOMContentLoaded', function () {
    const resultDisplay = document.getElementById('result');
    let wins = 0; 
    let losses = 0;
    let draws = 0; 

    function updateDisplay() {
        resultDisplay.innerHTML = `Перемог: ${wins}, Поразок: ${losses}, Нічиїх: ${draws}`;
    }

    function play(userChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        updateDisplay();
    }
});
