// src/pages/About.jsx
import { FaSeedling, FaTractor, FaUsers, FaAward } from "react-icons/fa";
import companyImage from '/img/DinkarCompany.webp'

const About = ({ isMobile }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        { isMobile ? <h1 className="text-5xl md:text-8xl font-bold text-green-700 mb-4 font-amatic ">
          About Dinkar Seeds Limited
        </h1> : <h1 className="text-9xl md:text-8xl font-bold text-green-700 mb-4 font-amatic ">
          About Dinkar Seeds Limited
        </h1>}
        <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Pioneering agricultural excellence in Gujarat since 2002
        </p>
      </div>

      {/* Company Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6 font-amatic ">
            Our Journey
          </h2>
          <p className="text-gray-600 mb-4 text-lg leading-relaxed">
            Founded in 2002 in Himmatnagar, Sabarkantha, Dinkar Seeds Limited
            has been at the forefront of agricultural innovation in Gujarat.
            What started as a small seed distribution business has grown into a
            trusted name serving thousands of farmers across the state.
          </p>
          <p className="text-gray-600 mb-4 text-lg leading-relaxed">
            For over two decades, we've been committed to providing
            high-quality, certified seeds that deliver superior yield and
            disease resistance. Our research-driven approach ensures our
            products meet the unique challenges of Gujarat's diverse
            agricultural landscape.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-700">20+ Years</h3>
              <p className="text-gray-600">of service</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-700">50+ Varieties</h3>
              <p className="text-gray-600">of seeds</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-700">10,000+</h3>
              <p className="text-gray-600">farmers served</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-700">12 Districts</h3>
              <p className="text-gray-600">across Gujarat</p>
            </div>
          </div>
        </div>

        {/* Replace the placeholder div with the actual image */}
        <div className="flex justify-center items-center">
          <img
            src={companyImage}
            alt="Dinkar Seeds Pvt. Ltd. Company"
            className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-green-50 p-8 rounded-2xl">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <FaSeedling className="text-green-700 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
          </div>
          <p className="text-gray-600 text-lg">
            To empower Gujarat's farmers with high-quality seeds and
            agricultural knowledge, enabling sustainable farming practices that
            increase productivity and profitability while preserving our natural
            resources.
          </p>
        </div>

        <div className="bg-secondary/10 p-8 rounded-2xl">
          <div className="flex items-center mb-4">
            <div className="bg-secondary/20 p-3 rounded-full mr-4">
              <FaTractor className="text-secondary text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
          </div>
          <p className="text-gray-600 text-lg">
            To be Gujarat's leading seed provider by 2030, recognized for
            innovation in seed technology and our commitment to farmer
            prosperity through ethical business practices and community
            development.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-poppins">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            icon={<FaSeedling />}
            title="Quality Assurance"
            description="Every seed batch undergoes rigorous testing to ensure germination rates and genetic purity"
          />
          <ValueCard
            icon={<FaUsers />}
            title="Farmer First"
            description="We prioritize farmer needs through direct engagement and responsive support systems"
          />
          <ValueCard
            icon={<FaAward />}
            title="Innovation Driven"
            description="Continuous research to develop seeds suited for Gujarat's unique climatic conditions"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 font-poppins">
          Leadership Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <TeamMember name="Rajesh Patel" position="Founder & CEO" />
          <TeamMember name="Meena Sharma" position="Head of Research" />
          <TeamMember name="Vikram Singh" position="Operations Manager" />
          <TeamMember name="Priya Mehta" position="Farmer Relations" />
        </div>
      </div>
    </div>
  );
};

// Value Card Component
const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-green-100">
    <div className="text-green-600 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Team Member Component
const TeamMember = ({ name, position }) => (
  <div className="text-center">
    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-4" />
    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
    <p className="text-green-600">{position}</p>
  </div>
);

export default About;
