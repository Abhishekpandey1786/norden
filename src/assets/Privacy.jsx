import React from "react";

function Privacy() {
  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50 text-gray-800 space-y-12">
      <section className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-amber-400 inline-block pb-2">
          Privacy Policy
        </h1>
        <p>
          At <strong>SecureSphere AV</strong>, accessible from{" "}
          <a href="https://www.securesphereav.com" className="text-blue-600 underline">
            https://www.securesphereav.com
          </a>
          , we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect the information you provide to us.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>

        <div>
          <h3 className="text-xl font-medium">a. Personal Information</h3>
          <p>When you make a purchase, create an account, or contact us, we may collect:</p>
          <ul className="list-disc ml-6">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Shipping & Billing Address</li>
            <li>Payment Details (handled securely via third-party processors)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium">b. Non-Personal Information</h3>
          <p>We may collect non-personally identifiable information such as:</p>
          <ul className="list-disc ml-6">
            <li>Browser type</li>
            <li>Device information</li>
            <li>IP address</li>
            <li>Pages visited</li>
            <li>Date and time of access</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6">
          <li>Process and fulfill your orders</li>
          <li>Communicate with you about your orders and customer service inquiries</li>
          <li>Improve our website, products, and customer experience</li>
          <li>Send promotional emails and newsletters (if you opt in)</li>
          <li>Prevent fraudulent transactions and protect against misuse</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">3. Sharing Your Information</h2>
        <p>We do not sell, rent, or trade your personal information. However, we may share your data with:</p>
        <ul className="list-disc ml-6">
          <li>Trusted third-party service providers (e.g., payment processors, shipping carriers)</li>
          <li>Legal authorities if required by law or to protect our rights and property</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">4. Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar technologies to enhance your experience on our site. Cookies help us:</p>
        <ul className="list-disc ml-6">
          <li>Remember your preferences</li>
          <li>Understand how you interact with our website</li>
          <li>Offer personalized content and ads</li>
        </ul>
        <p>You can disable cookies in your browser settings, but this may affect website functionality.</p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">5. Data Security</h2>
        <p>We implement industry-standard security measures to protect your personal information. While no method of transmission over the internet is 100% secure, we strive to use commercially acceptable means to safeguard your data.</p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc ml-6">
          <li>Access the personal information we hold about you</li>
          <li>Request corrections or updates to your data</li>
          <li>Request deletion of your data (subject to legal or operational requirements)</li>
          <li>Opt out of marketing communications at any time</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:info@securesphereav.com" className="text-blue-600 underline">
            info@securesphereav.com
          </a>
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">7. Third-Party Links</h2>
        <p>Our website may contain links to external sites. We are not responsible for the privacy practices of those websites and encourage you to read their privacy policies.</p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">8. Children’s Privacy</h2>
        <p>Our website is not intended for children under 13, and we do not knowingly collect personal information from children.</p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">10. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <p>
          <strong>SecureSphere AV</strong>
          <br />
          Email:{" "}
          <a href="mailto:info@securesphereav.com" className="text-black font-bold underline">
            info@securesphereav.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default Privacy;
