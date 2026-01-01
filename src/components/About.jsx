const About = () => {
  return (
    <section className="min-h-[80vh] max-w-7xl mx-auto px-4">
      <h1 className="font-amatic text-5xl md:text-8xl text-center mt-16 text-green-700 font-bold">
        About
      </h1>
      <div
        className=" mt-12 flex flex-col gap-10
        md:flex-row md:items-center"
      >
        <div className="md:w-1/2">
          <img
            src="/img/about.png"
            alt="About Dinkar Seeds"
            className="w-full h-64 sm:h-80 md:h-[420px] object-cover rounded-2xl"
          />
        </div>
        <div className="md:w-1/2">
          <p className="mt-12 text-base text-justify sm:text-lg text-gray-800 leading-relaxed">
            Founded in 2002 in Himmatnagar, Sabarkantha, Dinkar Seeds Limited
            has been at the forefront of agricultural innovation in Gujarat.
            What started as a small seed distribution business has grown into a
            trusted name serving thousands of farmers across the state. For over
            two decades, we've been committed to providing high-quality,
            certified seeds that deliver superior yield and disease resistance.
            Our research-driven approach ensures our products meet the unique
            challenges of Gujarat's diverse agricultural landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
