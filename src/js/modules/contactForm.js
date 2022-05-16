const contactForm = (formSelector = "#form") => {
    return {
        form: document.querySelector(formSelector),
        errors: {},

        send: function () {
            const loader = document.getElementById("loader");
            loader.style.display = "inline-block";
            const xhr = new XMLHttpRequest();
            const data = new FormData(this.form);
            xhr.addEventListener("load", () => {
                if (xhr.status === 200) {
                    console.log(xhr.response);
                    this.handleResponse(JSON.parse(xhr.response));
                } else {
                    return xhr.status, xhr.response;
                }
                loader.style.display = "none";
            });

            xhr.open("POST", "/includes/contact.php", true);
            xhr.send(data);
        },
        showResponse: function (resp) {
            let errList = document.querySelector(".form-errors");
            let respContainer = document.querySelector(".form-resp");
            if (resp.succes) {
                respContainer.innerText = resp.succes.status;
            } else if (resp.errors) {
                Object.values(resp.errors).forEach((err) => {
                    errList.innerHTML += `<li>${err}</li>`;
                });
            }
        },
        validatePhone: function (input) {
            let isValid = false;
            let errorContainer = input.parentElement.querySelector(".invalid-feedback");
            let number = input.value;
            let formattedNumber = number.replace(/[ -\/]/g, "");
            const reg = /^\d{9,11}$/;
            isValid = reg.test(formattedNumber);
            if (isValid) {
                errorContainer.innerText = "";
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                errorContainer.innerText = "Proszę podać poprawny numer telefonu";
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }

            input.dataset.valid = isValid;
            this.errors = {
                ...this.errors,
                [input.id]: !isValid
            };
        },
        validateEmail: function (input) {
            let isValid = false;
            let email = input.value;
            let errorContainer = input.parentElement.querySelector(".invalid-feedback");
            const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
            isValid = reg.test(email);
            if (isValid) {
                errorContainer.innerText = "";
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                errorContainer.innerText = "Proszę podać poprawny adres email";
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }
            input.dataset.valid = isValid;
            this.errors = {
                ...this.errors,
                [input.id]: !isValid
            };
        },
        validateFiles: function (input) {
            let isValid = true;
            let errorContainer = input.parentElement.querySelector(".invalid-feedback");
            const restricted = {
                types: ["jpg", "jpeg", "png", "bmp"],
                maxSize: 1024000,
                maxAmount: 5,
            };
            let files = input.files;
            if (files.length <= restricted.maxAmount) {
                Array.from(files).forEach((file) => {
                    let fileType = file.type.slice(file.type.indexOf("/") + 1);
                    let fileSize = file.size;
                    if (restricted.types.includes(fileType) && fileSize <= restricted.maxSize) {
                        isValid = true;
                        errorContainer.innerText = "";
                        input.classList.remove('is-invalid');
                        input.classList.add('is-valid');
                    } else {
                        isValid = false;
                        errorContainer.innerText =
                            "Tylko pliki graficzne\n Makymalnie 5 plików\n Maksymalny rozmiar pliku 1mb";
                        input.value = "";
                        input.classList.remove('is-valid');
                        input.classList.add('is-invalid');
                    }
                });
            }
            this.errors = {
                ...this.errors,
                [input.id]: !isValid
            };
            input.dataset.valid = isValid;
        },
        validateRequired: function (input) {
            let isValid = false;
            let errorContainer = input.parentElement.querySelector(".invalid-feedback");
            let value = input.value;
            if (value !== "") {
                errorContainer.innerText = "";
                isValid = true;
            } else {
                errorContainer.innerText = "To pole jest wymagane";
                isValid = false;
            }
            isValid ? (input.dataset.valid = true) : (input.dataset.valid = false);
            input.dataset.valid = isValid;
            this.errors = {
                ...this.errors,
                [input.id]: !isValid
            };
        },
        validateText: function (input) {
            let isValid = false;
            let text = input.value;
            let errorContainer = input.parentElement.querySelector(".invalid-feedback");
            if (text.length >= 3) {
                isValid = true;
            }
            if (isValid) {
                input.dataset.valid = true;
                errorContainer.innerText = "";
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                input.dataset.valid = false;
                errorContainer.innerText = "Wymagana długość co najmniej 3 znaki";
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }

            this.errors = {
                ...this.errors,
                [input.id]: !isValid
            };
        },
        realTimeValidation: function () {
            const validators = {
                tel: this.validatePhone.bind(this),
                text: this.validateText.bind(this),
                textarea: this.validateText.bind(this),
                email: this.validateEmail.bind(this),
                file: this.validateFiles.bind(this),
            };
            Array.from(this.form.elements).forEach((el) => {
                el.addEventListener("input", () => {
                    validators[el.type] && validators[el.type](el);
                });
            });
        },
        validateForm: function () {
            const validators = {
                tel: this.validatePhone.bind(this),
                text: this.validateText.bind(this),
                textarea: this.validateText.bind(this),
                email: this.validateEmail.bind(this),
                file: this.validateFiles.bind(this),
            };
            Array.from(this.form.elements).forEach((el) => {
                if (el.required) {
                    validators[el.type] && validators[el.type](el);
                }
            });
        },
        handleResponse: function (resp) {
            let errList = document.querySelector(".form__errors");
            let respContainer = document.querySelector(".form__resp");
            errList.innerText = "";
            respContainer.innerText = "";
            if (resp.succes) {
                respContainer.innerText = resp.succes.message;
                respContainer.classList.add('alert', 'alert-success');
                if (resp.succes.status && resp.succes.status === "true") {
                    this.resetForm();
                }
            } else if (resp.errors) {
                errList.classList.add('alert', 'alert-danger');
                Object.values(resp.errors).forEach((err) => {
                    errList.innerHTML += `<li>${err}</li>`;
                });
            }
        },
        resetForm: function () {
            [...this.form.elements].forEach((el) => {
                if(el.type != 'submit' && el.type != 'reset') {
                    el.value = "";
                } else {
                el.classList.add('d-none');
                }
            });
        },
        init: function () {
            if (this.form) {
                this.realTimeValidation();
                const submit = this.form.elements.submit;
                
                submit.addEventListener("click", (e) => {
                    e.preventDefault();
                    let errorContainer = e.target.parentElement.parentElement.querySelector(".errors-list");
                    let errorsList = document.querySelector('.form__errors');
                    this.validateForm();
                    let errors = Object.values(this.errors).filter((error) => {
                        return error === true;
                    });
                    if (errors.length > 0) {
                        errorContainer.innerText = "Proszę poprawić błędy w formularzu";
                        errorContainer.classList.add('alert', 'alert-danger');
                    } else {
                        errorContainer.innerText = "";
                        errorContainer.classList.remove('alert', 'alert-danger');
                        errorsList.classList.remove('alert', 'alert-danger');
                        this.send();
                    }
                   
                });
            }
        },
    };
};
export default contactForm;
