require('dotenv').config()

const  contact =  async (req:any, res:any) => {
  
    let nodemailer = require('nodemailer')

    //Gmail service
    const transporter = nodemailer.createTransport({
        host:'afaktanzania.co.tz/',
        port:465,
        secure:true,
      //Email and password in the .env file
      auth: {
        user: process.env.email, 
        pass: process.env.password  ,
      },
     
    })

    //the mail object
    const mailData = { 
      from: req.body.email,
      to: process.env.email,
      subject: `Message From ${req.body.email}`,
      text: "Hello" + " | Sent from: " + req.body.email,
      html: `<div>Hello there</div><p>Sent from:
      ${req.body.email}</p>`
    }

    //sending the mail
    transporter.sendMail(mailData, function (err: any, info: any) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
}

export default contact