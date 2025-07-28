import React from "react";

const Cookies = () => {
  return (
    <div className=" min-h-screen px-4 py-10 md:px-12 lg:px-32 text-gray-800">
      <div className="  rounded-2xl p-8 md:p-12 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-amber-400 inline-block pb-3">
          Cookies Policy
        </h1>
        <section className="space-y-4">
          <p>
            We employ the use of cookies. By accessing{" "}
            <strong> SecureSphereAV,</strong>, you agree to our use of cookies
            in accordance with the{" "}
            <strong> SecureSphereAV, Partners’s Privacy Policy</strong>.
          </p>
          <p>
            This Cookies Policy explains what cookies are, how we use them, and
            the types of information we collect. Cookies generally do not
            identify you personally, but may be linked to other information we
            store.
          </p>
          <p>
            We do not store sensitive personal information like mailing
            addresses or account passwords in the cookies we use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mt-6">
            Interpretation and Definitions
          </h2>

          <div className="mt-4 space-y-2">
            <h3 className="text-lg font-medium text-black">Interpretation</h3>
            <p>
              Capitalized words have defined meanings as outlined below. These
              definitions apply equally in singular and plural form.
            </p>

            <h3 className="text-lg font-medium text-black mt-4">Definitions</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>
                <strong>Company:</strong> Refers to{" "}
                <strong> SecureSphereAV</strong>.
              </li>
              <li>
                <strong>Cookies:</strong> Small files placed on your device
                storing information like browsing history.
              </li>
              <li>
                <strong>Website:</strong> Refers to our website,{" "}
                <strong>SecureSphereAV.store</strong>.
              </li>
              <li>
                <strong>You:</strong> The individual or entity accessing or
                using the Website.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mt-6">
            Use of Cookies
          </h2>
          <p className="mt-2">We use both session and persistent cookies:</p>

          <div className="space-y-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-lg font-medium text-black">
                1. Necessary / Essential Cookies
              </h4>
              <p>
                <strong>Type:</strong> Session Cookies
              </p>
              <p>
                <strong>Administered by:</strong> Us
              </p>
              <p>
                These cookies ensure core functionalities like authentication
                and fraud prevention. Without them, the site can't function
                correctly.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-lg font-medium text-black ">
                2. Functionality Cookies
              </h4>
              <p>
                <strong>Type:</strong> Persistent Cookies
              </p>
              <p>
                <strong>Administered by:</strong> Us
              </p>
              <p>
                These remember user preferences (e.g., login, language),
                offering a smoother and personalized experience.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mt-6">
            Your Choices Regarding Cookies
          </h2>
          <p className="mt-2">
            You can disable cookies via your browser. Some features may not
            function correctly if cookies are turned off.
          </p>

          <div className="mt-4">
            <p>Browser support links:</p>
            <ul className="list-disc pl-5 space-y-2 text-black underline">
              <li>
                <a
                  href="https://support.google.com/accounts/answer/32050"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chrome
                </a>
              </li>
              <li>
                <a
                  href="http://support.microsoft.com/kb/278835"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Internet Explorer
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black  mt-6">
            More Information
          </h2>
          <p>
            Learn more about cookies here:{" "}
            <a
              className="text-black font-bold underline"
              href="https://www.allaboutcookies.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              What Are Cookies?
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mt-6">Contact Us</h2>
          <p>If you have questions about this Cookies Policy:</p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              className="text-black font-bold underline"
              href="mailto:contact@onesolutionavshop.store"
            >
              contact@SecureSphereAV.store
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Cookies;
