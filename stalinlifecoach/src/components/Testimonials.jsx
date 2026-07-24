function Testimonials(){

const reviews=[

{

name:"Priya",

review:"Very caring and professional. I felt comfortable sharing my concerns."

},

{

name:"Arun",

review:"Excellent counselling sessions. Helped me overcome anxiety."

},

{

name:"Divya",

review:"A calm and supportive environment with practical guidance."

}

]

return(

<section className="testimonials">

<h2>

What Our Clients Say

</h2>

<div className="testimonial-grid">

{

reviews.map((item,index)=>(

<div

className="testimonial-card"

key={index}

>

<h3>

{item.name}

</h3>

<p>

"{item.review}"

</p>

⭐⭐⭐⭐⭐

</div>

))

}

</div>

</section>

)

}

export default Testimonials;