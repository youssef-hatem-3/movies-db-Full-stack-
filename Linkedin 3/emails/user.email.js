import nodemailer from 'nodemailer'
export const sendEmail = async (options)=>{
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'youssefhatem999@gmail.com', // generated ethereal user
          pass: 'joeljiwbnuvfhpzr', // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: ' " youssef hatem " <youssefhatem999@gmail.com> ', // sender address
        to: `${options.email}`, // list of receivers
        subject: "Hello ✔", // Subject line
        html: options.link, // html body
      },(err,info)=>{
        if(err)
        {
            console.log(err);
        }
        else 
        {
            console.log(info);
        }

      });

      console.log(info);

}