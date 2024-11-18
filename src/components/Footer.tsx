const Footer = () => {
    return (
      <footer className="bg-primary text-white py-10 px-6 relative">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-8">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>42 Market Avenue</p>
              <p>Westminster London W1B</p>
              <p>4DE United Kingdom</p>
              <p>design@designcube.com</p>
              <p>+44 111 222 333</p>
            </address>
            <button className="mt-4 px-4 py-2 bg-black text-white hover:bg-white hover:text-black border border-black rounded transition">
              Get a Price Quote
            </button>
          </div>
  
          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
            </ul>
          </div>
  
          {/* Useful Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Licensing</li>
              <li>404</li>
            </ul>
          </div>
  
          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <ul className="space-y-2 text-sm">
              <li>X(Twitter)</li>
              <li>LinkedIn</li>
              <li>Framer Profile</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="mt-10 text-center">
          <p>© 2024 by Draco.design</p>
          {/* Large Text Section */}
          <div className="mt-4">
            <h1 className="text-[12vw] font-bold text-black opacity-10">
              DESIGN*DRAFLY
            </h1>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;