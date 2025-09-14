
import { LightBulbIcon, UserGroupIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";

    const About = () => {
  return (
    <section className="mb-12 mt-20 fade-in">
      <h2 className="text-center text-3xl lg:text-4xl font-bold text-apple-accent mb-4">About Us</h2>
      <p className="text-center text-lg text-apple-text-muted max-w-2xl mx-auto mb-8">
        Welcome to the Apple Store! We are dedicated to bringing you the latest and greatest Apple products with a focus on innovation, design, and customer satisfaction. Discover our curated lineup and experience the best of technology.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg border border-apple-border rounded-2xl shadow-lg p-6 text-center">
          <LightBulbIcon className="mx-auto mb-3 h-10 w-10 text-apple-accent" />
          <h3 className="text-xl font-semibold text-apple-accent mb-2">Innovation</h3>
          <p className="text-apple-text-muted">We bring you the latest Apple products, always at the cutting edge of technology and design.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-apple-border rounded-2xl shadow-lg p-6 text-center">
          <UserGroupIcon className="mx-auto mb-3 h-10 w-10 text-apple-accent" />
          <h3 className="text-xl font-semibold text-apple-accent mb-2">Customer Satisfaction</h3>
          <p className="text-apple-text-muted">Our team is dedicated to providing you with the best shopping experience and support.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg border border-apple-border rounded-2xl shadow-lg p-6 text-center">
          <RectangleGroupIcon className="mx-auto mb-3 h-10 w-10 text-apple-accent" />
          <h3 className="text-xl font-semibold text-apple-accent mb-2">Curated Lineup</h3>
          <p className="text-apple-text-muted">Discover a handpicked selection of Apple devices, tailored to meet your needs and preferences.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
