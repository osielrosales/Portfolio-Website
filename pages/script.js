function sendMail(e) {
    e.preventDefault();

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_mk6x4lo", "template_hnwou3o", params)
        .then(() => {
            alert("Email sent!");
            document.getElementById("contact-form").reset();
        })
        .catch((err) => {
            console.log(err);
            alert("Failed to send email");
        });
}

window.onload = function () {
    document.getElementById("contact-form")
        .addEventListener("submit", sendMail);
};