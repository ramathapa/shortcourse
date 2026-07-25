export default function EnrolForm({
course
}:any){


return(

<section
id="enrol"
className="
py-20
bg-white
">


<div className="
max-w-5xl mx-auto px-6
">


<h2 className="
text-4xl
font-bold
text-[#0B1F3A]
text-center
mb-10
">

Enrol Now

</h2>



<div
className="
rounded-xl
overflow-hidden
border
"
>


<iframe

src={course.eskilledForm}

width="100%"

height="7900"

scrolling="no"

frameBorder="0"

className="w-full"

>

</iframe>


</div>


</div>


</section>

)

}