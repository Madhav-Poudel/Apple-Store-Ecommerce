import applestoreImg from "@/assets/applestore.png";

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8 fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-apple-text leading-tight">
                  Welcome to the <span className="text-apple-accent">Apple Store</span>
                </h1>
                <p className="text-2xl lg:text-3xl text-apple-accent font-medium">
                  Discover the best of Apple – all in one place.
                </p>
                <p className="text-lg text-apple-text-muted max-w-xl mx-auto lg:mx-0">
                  Explore the lineup: iPhone, MacBook, iPad, Apple Watch, AirPods and more. Experience innovation, design, and performance across all Apple products.
                </p>
              </div>
            </div>
            {/* Single Image: Apple Products Showcase */}
            <div className="relative scale-in flex justify-center items-center">
              <div className="relative w-full flex justify-center" style={{ paddingBottom: '2.5rem' }}>
                <img
                  src={applestoreImg}
                  alt="Apple Store Products"
                  className="w-full h-auto max-w-lg rounded-xl shadow-lg relative z-20"
                  style={{ position: 'relative', top: '0.5rem' }}
                />
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 rounded-full blur-xl z-10"
                  style={{ bottom: '0.5rem', opacity: 0.5 }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-apple-accent/30 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-6 h-6 bg-apple-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-apple-accent/40 rounded-full animate-pulse"></div>
      </section>
  {/* WhyChooseUs now appears after Explore the lineup */}
    </>
  );
};

export default HeroSection;