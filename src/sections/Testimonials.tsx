import quotes from '/src/assets/bg-quotes.png';
import TestimonialsCard from '../components/TestimonialsCard';
const Testimonials = () => {
  return (
    <section className="px-10 py-10 ">
      <img src={quotes} className="size-6" />
      <div className="grid md:grid-cols-3 gap-6">
        <TestimonialsCard
          review="Fylo
    has improved our team productivity by an order of magnitude. Since making
    the switch our team has become a well-oiled collaboration machine."
          imgSrc="/src/assets/profile-1.jpg"
          name="Satish
    Patel"
          position="Founder & CEO, Huddle"
        />
        <TestimonialsCard
          review="Fylo has improved our team productivity by an
    order of magnitude. Since making the switch our team has become a well-oiled
    collaboration machine."
          imgSrc="/src/assets/profile-2.jpg"
          name="Bruce McKenzie"
          position="Founder & CEO, Huddle"
        />
        <TestimonialsCard
          review="Fylo has
    improved our team productivity by an order of magnitude. Since making the
    switch our team has become a well-oiled collaboration machine."
          imgSrc="/src/assets/profile-3.jpg"
          name="Iva Boyd"
          position="Founder & CEO, Huddle"
        />
      </div>
    </section>
  );
};

export default Testimonials;
