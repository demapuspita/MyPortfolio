function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    subject: document.getElementById("subject").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_tbiffpi";
  const templateID = "template_1ki82jp";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Pesan berhasil dikirim!")

    })
    .catch(err=>console.log(err));

}
