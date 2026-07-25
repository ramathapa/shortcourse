export default function CourseHero(){

return(

<section
className="
relative
bg-[#0B1F3A]
text-white
py-24
">


<div
className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-10
items-center
">


<div>


<span
className="
bg-[#C4A15A]
text-[#0B1F3A]
px-4 py-2
rounded-full
font-semibold
">

Short Course

</span>


<h1
className="
text-5xl
font-bold
mt-8
"
>

HLTAID011
<br/>
Provide First Aid

</h1>


<p
className="
mt-6
text-xl
text-gray-300
"
>

Gain essential first aid skills and confidence
to respond effectively in emergency situations.

</p>


<button
className="
mt-8
bg-[#C4A15A]
text-[#0B1F3A]
px-8
py-4
rounded-full
font-semibold
"
>

Enrol Now

</button>


</div>



<div>

<img
src="/images/first-aid.jpg"
className="
rounded-2xl
"
/>

</div>


</div>


</section>

)

}