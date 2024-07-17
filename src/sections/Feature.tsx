import FeatureCard from '../components/Featurecard';

// Icons
import accessAnywhereIcon from '/src/assets/icon-access-anywhere.svg';
import securityIcon from '/src/assets/icon-security.svg';
import collaborationIcon from '/src/assets/icon-collaboration.svg';
import anyFileIcon from '/src/assets/icon-any-file.svg';
const Feature = () => {
  return (
    <section
      className="py-20 px-10 md:px-20 grid md:grid-cols-2 gap-y-20 md:justify-around items-center"
      id="features"
    >
      <FeatureCard
        icon={accessAnywhereIcon}
        heading="Access your files, anywhere"
        desc="  The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere."
      />

      <FeatureCard
        icon={securityIcon}
        heading="Security you can trust"
        desc="  2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
      />

      <FeatureCard
        icon={collaborationIcon}
        heading="Real-time collaboration"
        desc="Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required."
      />

      <FeatureCard
        icon={anyFileIcon}
        heading="Store any type of file"
        desc="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared."
      />
    </section>
  );
};

export default Feature;
