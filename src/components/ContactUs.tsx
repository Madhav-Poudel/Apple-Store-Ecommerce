import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const ContactUs = () => {
  return (
    <section className="mb-12 pt-8 fade-in bg-apple-surface/80 backdrop-blur-lg border-t border-apple-border">
      <h2 className="text-center text-3xl lg:text-4xl font-bold text-apple-accent mb-4">Contact Us</h2>
      <p className="text-center text-lg text-apple-text-muted max-w-2xl mx-auto mb-8">
        Have questions or need support? Reach out to us anytime!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg border border-apple-border rounded-2xl shadow-lg p-6 text-center">
          <EnvelopeIcon className="mx-auto mb-3 h-10 w-10 text-apple-accent" />
          <h3 className="text-xl font-semibold text-apple-accent mb-2">Email</h3>
          <p className="text-apple-text-muted">applecraftnepal@gmail.com</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-apple-border rounded-2xl shadow-lg p-6 text-center">
          <PhoneIcon className="mx-auto mb-3 h-10 w-10 text-apple-accent" />
          <h3 className="text-xl font-semibold text-apple-accent mb-2">Phone</h3>
          <p className="text-apple-text-muted">+977-9800000000</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-apple-border rounded-2xl shadow-lg p-6 text-center">
          <MapPinIcon className="mx-auto mb-3 h-10 w-10 text-apple-accent" />
          <h3 className="text-xl font-semibold text-apple-accent mb-2">Location</h3>
          <p className="text-apple-text-muted">AppleCraft Store, Kathmandu, Nepal</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
