import React from "react";

function FAQ() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-amber-400 inline-block pb-2">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">
            Is McAfee a good antivirus program?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Yes. McAfee is a good antivirus and worth the investment. It offers an
            extensive security suite that will keep your computer safe from
            malware and other online threats. It works really well on Windows,
            Android, Mac and iOS and the McAfee LiveSafe plan works on an
            unlimited number of personal devices. McAfee’s security software is
            available in a web app, mobile app and a browser extension.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">
            What is the difference between McAfee LiveSafe and Total Protection?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            The main difference between McAfee Total Protection and McAfee
            LiveSafe is that you can use the McAfee LiveSafe plan on an unlimited
            number of personal devices. This is the only real difference between
            the two plans. You’ll find all the same security features on both.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">
            Is Norton Antivirus better than McAfee?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Yes. Although both offer excellent antivirus protection, Norton offers
            better speeds, security and overall performance. It has more security
            features than McAfee and it’s more effective at protecting against
            malware and other online threats. However, McAfee’s plans are a bit
            cheaper. And more importantly, McAfee’s LiveSafe plan can be used on
            unlimited personal devices, whereas even Norton’s 360 Premium plan is
            still limited to a maximum of 10 devices.
          </p>
        </div>

        
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">
            How to claim a McAfee subscription refund?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            After purchase, within 30 days, you can receive a full refund for your
            subscription. However, you won’t be able to do it via live chat.
            You’ll have to telephone customer service and confirm your decision.
            So, make sure that you’re sure about this service before you commit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
