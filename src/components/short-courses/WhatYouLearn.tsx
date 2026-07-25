export default function WhatYouLearn({
course
}:any){


return(

<section className="
bg-[#E8DFD5]/40
py-16
">


<div className="
max-w-5xl mx-auto px-6
">


<h2 className="
text-4xl font-bold text-[#0B1F3A]
">

What You Will Learn

</h2>


<ul className="
mt-8 space-y-4
">


{
course.learning.map((item:string)=>(


<li
key={item}
className="
flex gap-3
">

<span className="text-[#C4A15A]">
✓
</span>


{item}


</li>


))

}


</ul>


</div>

</section>

)

}