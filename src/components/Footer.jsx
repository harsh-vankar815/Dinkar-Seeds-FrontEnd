const Footer = ({isMobile}) => {
  return (
    <footer className="w-full bg-white text-black border-t-2">
      {isMobile ? (
        <div className="p-8 my-10 flex flex-col gap-8">
          <div className="list1">
            <h3 className="text-2xl mb-4">Quick Links</h3>
            <ul className="space-y-2 ">
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Category
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                About us
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Careers
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                FAQs
              </li>
            </ul>
          </div>
          <div className="list2">
            <h3 className="text-2xl mb-4">Our Products</h3>
            <ul className="space-y-2 ">
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Cereals / Food Grains
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Pulses / Legumes
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Vegetable Seeds
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Oilseeds
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Fruit Crop Seeds
              </li>
            </ul>
          </div>
          <div className="list3 address">
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
      ) : (
        <div className="flex items-center justify-around p-6">
          <div className="list1">
            <h3 className="text-2xl mb-4">Quick Links</h3>
            <ul className="space-y-2 ">
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Category
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                About us
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Careers
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                FAQs
              </li>
            </ul>
          </div>
          <div className="list2">
            <h3 className="text-2xl mb-4">Our Products</h3>
            <ul className="space-y-2 ">
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Cereals / Food Grains
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Pulses / Legumes
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Vegetable Seeds
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Oilseeds
              </li>
              <li className="text-black hover:text-green-600 hover:underline cursor-pointer">
                Fruit Crop Seeds
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
      )}
      <div className="border-t-2 mt-4 pb-8 pt-8 text-center text-black">
        <p>
          &copy; {new Date().getFullYear()} Dinkar Seeds Limited. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
