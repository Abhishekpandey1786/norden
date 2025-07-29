import React from "react";
import img5 from './images/l2.png'
function Call() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-xl p-6 max-w-3xl w-full flex flex-col items-center space-y-6">
        
        {/* Norton Logo */}
        <img
          src={img5}
          alt="Norton Support"
          className="w-full max-w-[500px] object-contain"
        />

        {/* Call Now Section */}
        <div className="flex items-center justify-center bg-blue-900 text-white px-6 py-4 rounded-lg border-2 border-yellow-400 space-x-4">
          
          {/* Phone Icon */}
          <div className="border-2 border-yellow-400 rounded-full p-3">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L3.879 5.5c.273-.064.557.03.744.245l1.744 2.034a.75.75 0 01-.04 1.015l-1.334 1.334a11.014 11.014 0 005.303 5.303l1.334-1.334a.75.75 0 011.015-.04l2.034 1.744a.75.75 0 01.245.744l-.384 1.876a.75.75 0 01-.716.602C5.922 18.944 1.057 14.078 1 7.615a.75.75 0 01.602-.731l.401-.001z" />
            </svg>
          </div>

          {/* Phone Number */}
          <span className="text-lg sm:text-xl font-bold">
            +1 (833) 950-5496
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-center max-w-lg">
          Need help with your Norton Antivirus installation, renewal or support? <br />
          Call our toll-free number anytime — we're available 24/7.
        </p>
      </div>
    </div>
  );
}

export default Call;
