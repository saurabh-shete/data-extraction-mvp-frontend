import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and About */}
          <div className="w-full md:w-1/3 mb-4">
            <Link to="/" className="text-2xl font-bold text-white">
              Your Logo
            </Link>
            <p className="mt-4 text-gray-400">
              We provide the best services for your business, with a modern approach and the latest technology.
            </p>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="font-semibold text-lg mb-2">Useful Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link to="/about" className="hover:text-white">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="hover:text-white">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-white">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
            <ul className="flex space-x-4 text-gray-400">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-6 h-6"
                  >
                    <path d="M16 8A8 8 0 1 0 8 16V8h2.25L10.5 6H8V4.5C8 3.67 8.67 3 9.5 3H10.5V1.75C9.46 1.61 8.39 1.5 7.5 1.5 5.71 1.5 4.25 2.96 4.25 4.75V6H2V8H4.25v8A8 8 0 1 0 16 8Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-6 h-6"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.002 9.341-9.341 0-.141 0-.283-.006-.424A6.677 6.677 0 0 0 16 3.543a6.612 6.612 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.607 6.607 0 0 1-2.084.797 3.289 3.289 0 0 0-5.697 2.994A9.325 9.325 0 0 1 1.114 2.1 3.289 3.289 0 0 0 2.13 6.356 3.28 3.28 0 0 1 .64 5.828v.041a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.621-.057 3.288 3.288 0 0 0 3.066 2.281 6.588 6.588 0 0 1-4.862 1.36 9.29 9.29 0 0 0 5.034 1.475" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-6 h-6"
                  >
                    <path d="M0 1.146C0 .513.324 0 .724 0h14.552c.4 0 .724.513.724 1.146v13.708c0 .633-.324 1.146-.724 1.146H.724A.724.724 0 0 1 0 14.854V1.146ZM4.941 12.711V6.327H2.542v6.384h2.4ZM3.744 5.269a1.377 1.377 0 1 1 0-2.754 1.377 1.377 0 0 1 0 2.754ZM13.458 12.711v-3.64c0-1.174-.035-2.683-1.634-2.683-1.636 0-1.887 1.28-1.887 2.6v3.722h2.4v-3.618c0-.87-.017-1.988-1.209-1.988-1.21 0-1.396.945-1.396 1.924v3.682h2.4v-3.64Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;