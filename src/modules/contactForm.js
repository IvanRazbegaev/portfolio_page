import {sendData} from "./helpers";

const contactForm = async () => {
    const form = document.getElementById('four');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const submit = form.querySelector('input[type="submit"]');
    const reset = form.querySelector('input[type="reset"]');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


    const validate = () => {
        let validatedEmail = false;
        if (email.value.matches(emailPattern)){
            validatedEmail = true
        } else {
            alert ('Entered email is not valid!');
        }
    }

    name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\D]/gi, '');
    })

    // const response = await sendData();
    // console.log(response);
}

export default contactForm;