import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white text-sm relative">
      <div className="max-w-7xl mx-auto px-6 py-10 pb-20">
        {/* Top CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-b border-gray-700 pb-10">
          <div>
            <h2 className="font-semibold text-3xl mb-3">Create your own JoinCircle group.</h2>
            <button className="mt-2 bg-white text-black font-semibold px-4 py-2 text-xl rounded hover:bg-gray-400 transition">
              Get Started
            </button>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-20 w-full md:w-auto">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold mb-3 text-xl text-white">Your Account</h3>
              <ul className="space-y-1 list-none">
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Sign up</a></li>
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Log in</a></li>
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Help</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-semibold mb-3 text-xl text-white">Discover</h3>
              <ul className="space-y-1 list-none">
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Groups</a></li>
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Calendar</a></li>
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Topics</a></li>
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Cities</a></li>
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Online Events</a></li>
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Local Guides</a></li>
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Make Friends</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-semibold mb-3 text-xl text-white">JoinCircle</h3>
              <ul className="space-y-1 list-none">
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">About</a></li>
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Blog</a></li>
                {/* <li><a href="#" className="text-gray-400 hover:text-white no-underline">Meetup Pro</a></li> */}
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Careers</a></li>
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Apps</a></li>
                <li><a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Podcast</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start items-center mt-8 gap-8">
          <span className="text-white text-xl">Follow us</span>
          <img src="/src/assets/facebook.svg" alt="Facebook" className="w-5 h-5 cursor-pointer filter invert hover:opacity-75" />
          <img src="/src/assets/X.svg" alt="Twitter" className="w-4 h-4 cursor-pointer filter invert hover:opacity-75" />
          <img src="/src/assets/youtube.svg" alt="YouTube" className="w-5 h-5 cursor-pointer filter invert hover:opacity-75" />
          <img src="/src/assets/instagram-fill.svg" alt="Instagram" className="w-5 h-5 cursor-pointer filter invert hover:opacity-75" />
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-gray-400 text-xs gap-3">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Terms of Service</a>
            <a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Privacy Policy</a>
            <a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Cookie Policy</a>
            <a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">License Attribution</a>
            <a href="#" className="text-[16px] text-gray-400 hover:text-white no-underline">Help</a>
          </div>
        </div>
      </div>
       {/* Bottom strip */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs text-center">
        © 2025 JoinCircle All Rights Reserved
        </div>
    </footer>
  );
};

export default Footer;
