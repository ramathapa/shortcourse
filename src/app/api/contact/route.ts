import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/mongodb";

import Contact from "@/lib/models/Contact";

import { transporter } from "@/lib/mailer";



export async function POST(req:Request){

try{


await connectToDatabase();



const body = await req.json();



const {
name,
lastName,
email,
phone,
message
}=body;



if(!name || !lastName || !email || !message){

return NextResponse.json(
{
success:false,
message:"Required fields missing"
},
{
status:400
}
);

}




// Save database

const contact = await Contact.create({

name,
lastName,
email,
phone,
message

});





// Send email


await transporter.sendMail({

from:`"Cardinal Website Contact" <${process.env.EMAIL_USER}>`,

to:"info@cardinalinstitute.edu.au",

replyTo:email,

subject:"New Contact Form Enquiry - Cardinal Institute",

html:`

<div style="font-family:Arial">

<h2>New Contact Enquiry</h2>


<p>
<b>Name:</b> ${name} ${lastName}
</p>


<p>
<b>Email:</b> ${email}
</p>


<p>
<b>Phone:</b> ${phone || "Not provided"}
</p>


<p>
<b>Message:</b>
</p>

<p>
${message}
</p>


</div>

`

});

// Send confirmation to customer
await transporter.sendMail({
  from: `"Cardinal Institute of Education" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "Thank you for contacting Cardinal Institute of Education",
  html: `
    <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto">

      <h2>Thank You for Contacting Cardinal Institute of Education</h2>

      <p>Dear ${name},</p>

      <p>
        Thank you for contacting <strong>Cardinal Institute of Education</strong>.
      </p>

      <p>
        We have successfully received your enquiry.
      </p>

      <p>
        One of our team members will review your message and contact you as soon as possible.
      </p>

      <hr>

      <h3>Your Enquiry</h3>

      <p><strong>Name:</strong> ${name} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

      <p><strong>Message:</strong></p>

      <p>${message}</p>

      <br>

      <p>Kind regards,</p>

      <strong>Cardinal Institute of Education</strong><br>
      https://cardinalinstitute.edu.au

    </div>
  `,
});



return NextResponse.json({

success:true,

contact

});



}

catch(error){

console.error("CONTACT ERROR:",error);


return NextResponse.json(

{
success:false,
message:"Server error"
},

{
status:500
}

);


}

}







export async function GET(){


try{


await connectToDatabase();


const contacts = await Contact
.find()
.sort({
createdAt:-1
});


return NextResponse.json({

success:true,

contacts

});


}

catch(error){


return NextResponse.json(
{
success:false
},
{
status:500
}
);


}


}