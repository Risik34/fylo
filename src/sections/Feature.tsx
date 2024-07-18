import FeatureCard from '../components/Featurecard';

import {iconAccessAnywhere,iconAnyFile ,iconSecurity,iconCollaboration} from "../assets"

const Feature = () => {
  return (
    <section
      className="py-20  grid md:grid-cols-2 gap-y-20 md:justify-around items-center"
      id="features"
    >
      <FeatureCard
        icon={iconAccessAnywhere}
        heading="Access your files, anywhere"
        desc="  The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere."
      />

      <FeatureCard
        icon={iconSecurity}
        heading="Security you can trust"
        desc="  2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
      />

      <FeatureCard
        icon={iconCollaboration}
        heading="Real-time collaboration"
        desc="Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required."
      />

      <FeatureCard
        icon={iconAnyFile}
        heading="Store any type of file"
        desc="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared."
      />
    </section>
  );
};

export default Feature;
