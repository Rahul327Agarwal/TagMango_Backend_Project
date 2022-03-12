const express=require("express");
const nodemailer = require('nodemailer');

//nodemailer settings.
const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    secure: false,
    requireTLS:true,
    auth: {
        user: '2ce6baec7326e0',
        pass: '2b5e321dbcdb25'
    }
});

const app=express();

app.use(express.json());

app.post("/",async (req,res)=>{
    
    let to=req.body.email;
    let time=req.body.time;
    let subject=req.body.subject; 


    if(time=="now")
    {
        sendthemail(to,subject);
    }
    else if(time.includes("hour later"))
    {
        let val=+time.replace(" hour later","").trim();
        console.log(val,typeof val);
        setTimeout(()=>sendthemail(to,subject),val*3600*1000)

    }
    else 
    {
        // "21st march,2022,6:00 AM " to March 11, 2022, 11:40 PM
        let date = time;
            // date to be converted
        let day = "";
        for (let i = 0; i < date.length; i++) {
        // if its number
        if (date[i] >= "0" && date[i] <= "9") {
        day += date[i];
        } else break;
        }
        let str = date.split(",");
        let month = str[0].split(" ")[1];
        month = month.charAt(0).toUpperCase() + month.slice(1);

        // year
        let year = str[1];
        // time
        let time2 = str[2];
        // now makeing a string like that March 11, 2022, 11:40 PM
        let final = month + " " + day + ", " + year + ", " + time2;
        // date in ms
        let dateInMs = new Date(final).getTime();
        console.log(dateInMs);
        let today_date=new Date().getTime();
        let abs=Math.abs(dateInMs-today_date)
        console.log(abs);
        setTimeout(()=>sendthemail(to,subject),abs);
    }
    
    res.status(201).send("Hi everyone");
})

// to make a server
const port = process.env.PORT || 1234;
app.listen(port,async ()=>{   
console.log("Listening at port 1234");
});

// send the mail
const sendthemail=async function (to,subject)
{   
    await transporter.sendMail({
        from: 'agarwalr327@gmail.com',
        to: to,
        subject: subject+"  Rahul Agarwal",
        html: "hey this is test email"
    });
}