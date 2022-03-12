const express=require("express");
const transporter = require('./mailtrap_credential');
const sendthemail = require('./sendmail');

const app=express();

app.use(express.json());

app.get("/",(req,res)=>
{
    res.status(201).send("You are successfully connected with Mailtrap service");
})

app.post("/",async (req,res)=>{
    
    let to=req.body.email;
    let time=req.body.time;
    console.log(time)
    let subject=req.body.subject; 


    if(time=="now")
    {
        sendthemail(to,subject);
    }
    else if(time.includes("hour later"))
    {
        let val=+time.replace(" hour later","").trim();
        setTimeout(()=>sendthemail(to,subject),val*3600*1000)

    }
    else 
    {
        let abs = getTimeInMs(time)
        setTimeout(()=>sendthemail(to,subject),abs);
    }
    
    res.status(201).send("Mail has been sent or will be sent to your requested email on your requested time");
})

// to make a server
const port = process.env.PORT || 1234;
app.listen(port,async ()=>{   
console.log("Listening at port 1234");
});

function getTimeInMs(time)
{
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
        
        let today_date=new Date().getTime();
        let abs=Math.abs(dateInMs-today_date)
        console.log(`Your mail will be sent after ${abs/1000} second`);
        return abs;
}
