import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="flex items-center justify-around p-6">
        <div className="list1">
          <h3 className="text-2xl mb-4">Quick Links</h3>
          <ul className="space-y-2 ">
            <li className="text-white hover:text-gray-200 hover:underline cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-white hover:text-gray-200 hover:underline cursor-pointer">
              Category
            </li>
            <li className="text-white hover:text-gray-200 hover:underline cursor-pointer">
              About us
            </li>
            <li className="text-white hover:text-gray-200 hover:underline cursor-pointer">
              Careers
            </li>
            <li className="text-white hover:text-gray-200 hover:underline cursor-pointer">
              FAQs
            </li>
          </ul>
        </div>
        <div className="list2">
          <h3 className="text-2xl mb-4">Our Products</h3>
          <ul className="space-y-2 ">
            <li className="text-white hover:text-gray-200 hover:underline cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-white hover:text-gray-200 hover:underline cursor-pointer">
              Category
            </li>
            <li className="text-white hover:text-gray-200 hover:underline cursor-pointer">
              About us
            </li>
            <li className="text-white hover:text-gray-200 hover:underline cursor-pointer">
              Careers
            </li>
            <li className="text-white hover:text-gray-200 hover:underline cursor-pointer">
              FAQs
            </li>
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
      <div className="border-t border-slate-700 mt-8 pt-8 text-center text-white">
        <p>
          &copy; {new Date().getFullYear()} Dinkar Seeds Limited. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
