import { HiHeart } from "react-icons/hi";

const Footer = () => {
  const footerLinks = [
    "Privace Policy",
    "Category",
    "About us",
    "Careers",
    "FAQs",
  ];
  const productLinks = [
    "Cereals / Food Grains",
    "Pulses / Legumes",
    "Vegetable Seeds",
    "Oilseeds",
    "Fruit Crop Seeds",
  ];

  return (
    <footer className="w-full bg-white text-black border-t-2">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10 md:flex-row md:justify-around md:items-center">
        <div className="list1">
          <h3 className="text-2xl mb-4">Quick Links</h3>
          <ul className="space-y-2 ">
            {footerLinks.map((link) => (
              <li
                key={link}
                className="text-black hover:text-green-600 hover:underline cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="list2">
          <h3 className="text-2xl mb-4">Our Products</h3>
          <ul className="space-y-2 ">
            {productLinks.map((link) => (
              <li
                key={link}
                className="text-black hover:text-green-600 hover:underline cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="address">
          <address>
            <h3 className="text-2xl mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Phone: +91 9876543210</li>
              <li>Email: info@dinkarseeds.com</li>
              <li>Address: Sabarkantha, Gujarat</li>
            </ul>
          </address>
        </div>
      </div>
      <div className="flex flex-col gap-1 border-t-2 mt-4 pb-8 pt-8 text-center text-black">
        <p>
          &copy; {new Date().getFullYear()} Dinkar Seeds Limited. All rights
          reserved.
        </p>
        <div className="flex items-center justify-center text-sm text-secondary-500 dark:text-secondary-500">
          <span>Made with</span>
          <HiHeart className="w-4 h-4 text-red-500 mx-1" />
          <span>by HARSH VANKAR</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
