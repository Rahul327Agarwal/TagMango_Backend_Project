// send the mail
const transporter = require('./mailtrap_credential');
const sendthemail=async function (to,subject)
{   
    await transporter.sendMail({
        from: 'agarwalr327@gmail.com',
        to: to,
        subject: subject+"  Rahul Agarwal",
        html: "hey this is test email"
    });
}

module.exports=sendthemail;