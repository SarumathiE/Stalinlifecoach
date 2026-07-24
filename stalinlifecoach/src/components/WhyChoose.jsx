import {
FaUserMd,
FaShieldAlt,
FaClock,
FaAward
} from "react-icons/fa";

function WhyChoose(){

return(

<section className="why">

<h2>Why Choose Us?</h2>

<div className="why-grid">

<div className="why-card">

<FaUserMd/>

<h3>Expert Guidance</h3>

<p>
Professional psychiatric care and
life coaching.
</p>

</div>

<div className="why-card">

<FaShieldAlt/>

<h3>100% Confidential</h3>

<p>
Your privacy is always protected.
</p>

</div>

<div className="why-card">

<FaClock/>

<h3>Flexible Appointment</h3>

<p>
Choose your convenient schedule.
</p>

</div>

<div className="why-card">

<FaAward/>

<h3>Trusted Service</h3>

<p>
Helping people achieve better
mental wellness.
</p>

</div>

</div>

</section>

)

}

export default WhyChoose;