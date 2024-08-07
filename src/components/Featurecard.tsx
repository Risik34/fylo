type FeatureCardProps = {
  icon: string;
  heading: string;
  desc: string;
};

const FeatureCard = ({ icon, heading, desc }: FeatureCardProps) => {
  return (
    <div className="text-center space-y-2 md:p-6 rounded-md hover:bg-gray-300 hover:bg-opacity-10">
      <img src={icon} className="mx-auto" alt={heading} />
      <h2 className="font-raleway font-semibold text-xl">{heading}</h2>
      <p className="font-opensans text-gray-300">{desc}</p>
    </div>
  );
};

export default FeatureCard;
