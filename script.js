document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === '49441807h' && password === 'candela') {
        // Redirigir a la página "main.html" en caso de inicio de sesión exitoso
        window.location.href = 'main.html';
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid username or password';
    }
});
