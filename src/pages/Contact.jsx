import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSubmit =
      [fullName, mobileNo, emailId, message].every(Boolean) === true;
    if (isSubmit) {
      console.log(
        `Full Name: ${fullName} \nMobile No: ${mobileNo}\nEmail ID: ${emailId}\nMessage: ${message}`
      );
      alert("Thank you for responding we will contact back you soon!");
      setFullName("");
      setMobileNo("");
      setEmailId("");
      setMessage("");
    }
  };

  return (
    <>
      <section className="flex justify-center items-center flex-col mb-11">
        <h1 className="font-amatic text-5xl md:text-8xl text-center mt-16">
          Contact
        </h1>
        <p className="font-amatic text-xl mt-4 text-center italic">
          Feel free to reach out us
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-11/12 mt-8 space-y-6 md:w-4/5"
        >
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="fullname" />
              <input
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                className="text-lg md:text-xl p-3 my-3 md:m-4 border border-slate-300 rounded-lg "
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
              />
              <label htmlFor="mobile" />
              <input
                onChange={(e) => setMobileNo(e.target.value)}
                value={mobileNo}
                className="text-lg md:text-xl p-3 my-3 md:m-4 border border-slate-300 rounded-lg "
                type="tel"
                name="mobile"
                id="mobile"
                placeholder="Mobile Number"
              />
              <label htmlFor="email" />
              <input
                onChange={(e) => setEmailId(e.target.value)}
                value={emailId}
                className="text-lg md:text-xl p-3 my-3 md:m-4 border border-slate-300 rounded-lg "
                type="email"
                name="email"
                id="email"
                placeholder="Email Id"
              />
              <label htmlFor="message" />
            </div>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="text-lg md:text-xl p-3 my-3 md:m-4 border border-slate-300 rounded-lg "
              type="text"
              name="message"
              id="message"
              placeholder="Message"
            />
          </div>
          <div className="flex w-full justify-center items-center">
            <button
              type="submit"
              className="text-2xl border-2 py-3 px-7 bg-green-600 rounded-xl text-white italic hover:bg-green-500 "
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      <section className="max-w-7xl mx-auto px-4 flex flex-col justify-around items-center md:flex-row md:items-start md:justify-between mb-8">
        <div className="space-y-6 mb-10 ">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 font-poppins">
            Dinkar Seeds Limited
          </h2>
          <ContactInfo
            icon={<FaMapMarkerAlt />}
            title="Our Location"
            content="Agricultural Complex, NH-48, Himmatnagar, Sabarkantha, Gujarat 383001"
          />
          <ContactInfo
            icon={<FaPhone />}
            title="Phone"
            content="+91 98765 43210"
          />
          <ContactInfo
            icon={<FaEnvelope />}
            title="Email"
            content="info@dinkarseeds.com"
          />
          <ContactInfo
            icon={<FaClock />}
            title="Working Hours"
            content="Mon-Sat: 9:00 AM - 6:00 PM"
          />
        </div>

        {/* Map */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Our Location</h3>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64">
            {/* Google Maps iframe would go here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.228045282582!2d72.9857401!3d23.7615694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395da4a944af6039%3A0xdb984590486eb55!2sDinkar%20Seeds%20Private%20Limited!5e0!3m2!1sen!2sin!4v1724068799999!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

// Contact Info Component
const ContactInfo = ({ icon, title, content }) => (
  <div className="flex">
    <div className="text-green-600 text-xl mt-1 mr-4">{icon}</div>
    <div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default Contact;
