import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "9979447019";
  const message = "Hello, I want to know more about your seed products";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={35} />
    </a>
  );
};

export default WhatsAppButton;
