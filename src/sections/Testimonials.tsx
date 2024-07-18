import {quotes,profile_1,profile_2,profile_3} from "../assets"
import TestimonialsCard from '../components/TestimonialsCard';
const Testimonials = () => {
  return (
    <section id="testimonials">
      <img src={quotes} className="size-6" />
      <div className="grid md:grid-cols-3 gap-6">
        <TestimonialsCard
          review="Fylo
    has improved our team productivity by an order of magnitude. Since making
    the switch our team has become a well-oiled collaboration machine."
          imgSrc={profile_1}
          name="Satish
    Patel"
          position="Founder & CEO, Huddle"
        />
        <TestimonialsCard
          review="Fylo has improved our team productivity by an
    order of magnitude. Since making the switch our team has become a well-oiled
    collaboration machine."
          imgSrc={profile_2}
          name="Bruce McKenzie"
          position="Founder & CEO, Huddle"
        />
        <TestimonialsCard
          review="Fylo has
    improved our team productivity by an order of magnitude. Since making the
    switch our team has become a well-oiled collaboration machine."
          imgSrc={profile_3}
          name="Iva Boyd"
          position="Founder & CEO, Huddle"
        />
      </div>
    </section>
  );
};

export default Testimonials;
