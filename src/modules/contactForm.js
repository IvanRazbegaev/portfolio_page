const contactForm = async () => {

    const form = document.querySelector('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const submit = form.querySelector('input[type="submit"]');
    const reset = form.querySelector('input[type="reset"]');

    console.log(form);

    const validate = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const validatedEmail = email.value.match(emailPattern);
        const validateSubject = Boolean(subject.value);
        const validateName = name.value;

        if (!validatedEmail){
            alert ('Please enter a valid email!');
            return false;
        } else if (!validateSubject) {
            alert ('The subject is empty!');
            return false;
        } else if (validateName.length < 2){
            alert ('Name must be at least 2 characters long!');
            return false;
        }
        return true;
    }
    const resetValues = () => {
        name.value = '';
        subject.value = '';
        email.value = '';
        message.value = '';
    }

    reset.addEventListener('click', (e) => {
        e.preventDefault();
        resetValues();
    })

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (validate()){
            submitForm();
            resetValues();
        }
    })

    name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\D]/gi, '');
    })

    const submitForm = () => {
        form.method = "POST";
        form.action="https://formspree.io/f/mwkyezdj";
        form.submit();
    }

}

export default contactForm;