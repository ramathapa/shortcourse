import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Contact from "@/models/Contact";

import { transporter } from "@/lib/mailer";



export async function POST(req:Request){

try{



await connectDB();



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

to:"ramathap130@gmail.com",

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


await connectDB();


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