"use client";


export default function EventPage(){


return(

<main>


<section className="
bg-[#0B1F3A]
text-white
py-20
">


<div className="
max-w-5xl
mx-auto
px-6
">


<h1 className="
text-5xl
font-bold
">

HLTAID011 Provide First Aid

</h1>


</div>


</section>



<section className="py-16">


<div className="
max-w-5xl
mx-auto
px-6
">


<div className="
grid
md:grid-cols-4
gap-6
">


<div>
<h3>Date</h3>
<p>15 August 2026</p>
</div>


<div>
<h3>Time</h3>
<p>9AM - 4PM</p>
</div>


<div>
<h3>Venue</h3>
<p>Cardinal Institute Campus</p>
</div>


<div>
<h3>Price</h3>
<p>$150</p>
</div>


</div>



<a
href="#enrol"
className="
inline-block
mt-10
bg-[#C4A15A]
px-8 py-4
rounded-lg
"
>

Enrol Now

</a>


</div>


</section>



<section
id="enrol"
className="py-20"
>


<div className="
max-w-5xl
mx-auto
"
>


<h2 className="
text-4xl
font-bold
mb-8
">

Enrolment Form

</h2>


<iframe

src="https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=200050&courseCode=HLTAID011&fromIFrame=true"

width="100%"

height="7900"

frameBorder="0"

/>


</div>


</section>


</main>

)

}