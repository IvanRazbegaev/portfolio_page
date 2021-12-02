import {sendData} from "./helpers";

const contactForm = async () => {
    const form = document.getElementById('four');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const submit = form.querySelector('input[type="submit"]');
    const reset = form.querySelector('input[type="reset"]');

    const validate = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const validatedEmail = email.value.match(emailPattern);

        if (!validatedEmail){
            alert ('Please enter a valid email!');
            return false;
        }
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
        if (validate()){
            e.preventDefault();
            const sendBody = {
                name: name.value ,
                subject: subject.value,
                email: email.value,
                message: message.value
            }
            console.log(sendBody);
            resetValues();
        }
    })

    name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\D]/gi, '');
    })

    // const response = await sendData();
    // console.log(response);
}

export default contactForm;