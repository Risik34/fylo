type InterfaceCardProps = {
  review: string;
  imgSrc: string;
  name: string;
  position: string;
};
const TestimonialsCard = ({
  review,
  imgSrc,
  name,
  position,
}: InterfaceCardProps) => {
  return (
    <div className="bg-testimonialsbg p-6 space-y-4 mb-6">
      <p className="font-opensans text-gray-300">{review}</p>
      <div className="flex justify-start gap-x-2">
        <img src={imgSrc} className="size-12 rounded-full" />
        <div>
          <h3 className="font-raleway ">{name}</h3>
          <p className="font-opensans text-gray-300">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
