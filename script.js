document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('mainForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const message = document.getElementById('message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (checkInputs()) {
            showModal();
        }
    });

    name.addEventListener('input', () => {
        validadeField(name, name.value.trim() !== '', 'O campo nome não pode ficar vazio');
    });

    email.addEventListener('input', () => {
        validadeField(email, isEmail(email.value.trim()), 'Email inválido');
    });

    phone.addEventListener('input', () => {
        validadeField(phone, isPhone(phone.value.trim()), 'Número de telefone inválido');
    });

    password.addEventListener('input', () => {
        validadeField(password, password.value.trim().length >= 8, 'A senha precisa ter  no mínimo 8 digitos');
    });

    message.addEventListener('input', () => {
        validadeField(message, message.value.trim() !== '', 'A mensagem não pode ser vazia');
    });

    function checkInputs() {
        let isValid = true
        validadeField(name, name.value.trim() !== '', 'O campo nome não pode ficar vazio');
        validadeField(email, isEmail(email.value.trim()), 'Email inválido');
        validadeField(phone, isPhone(phone.value.trim()), 'Número de telefone inválido');
        validadeField(password, password.value.trim().length >= 8, 'A senha precisa ter  no mínimo 8 digitos');
        validadeField(message, message.value.trim() !== '', 'A mensagem não pode ser vazia');

        document.querySelectorAll('.form-control').forEach((control) => {
            if (control.classList.contains('error')) {
                isValid = false;
            }
        });

        return isValid;
    }

    function validadeField(input, condition, errorMessage) {
        if (condition) {
            setSuccess(input);
        } else {
            setError(input, errorMessage);
        }
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control error';
        icon.className = 'icon fas fa-times-circle';
        input.placeholder = message;
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control success';
        icon.className = 'icon fas fa-check-circle';
    }

    function isEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/.test(email);
    }

    function isPhone(phone) {
        return /^\+?(\d.*){3,}$/.test(phone);
    }

    function showModal() {
        const modal = document.getElementById('successModal');
        modal.style.display = 'block';

        const closeBtn = document.querySelector('.close-button');
        closeBtn.onclick = function () {
            modal.style.display = 'none';
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }

    }

});