import React from "react";

function Disclaimer() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-amber-400 inline-block pb-2">
            Disclaimer
          </h1>
          <span className="block text-gray-700 mt-2 text-base sm:text-lg">
            Welcome to <strong>SecureSphere AV!</strong>
          </span>
        </div>
        <section className="space-y-4">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            The information provided by <strong>SecureSphere AV</strong> (“we,” “us,” or “our”) on 
            <a href="https://www.securesphereav.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">
              www.securesphereav.com
            </a>{" "}
            (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">1. Product Information</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We strive to ensure that all product descriptions, images, pricing, and availability are accurate and up-to-date. However, errors may occasionally occur. We reserve the right to correct any errors and to update or change information at any time without prior notice. Product colors may vary slightly due to lighting and monitor settings.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">2. External Links Disclaimer</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, or completeness by us. We do not warrant, endorse, or assume responsibility for any information offered by third-party websites linked through the Site.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">3. No Professional Advice</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            All content on this website is for informational purposes only and should not be considered professional advice. You should consult with a qualified professional before making any decisions based on the content on this site.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">4. Limitation of Liability</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            In no event shall SecureSphere AV, its owners, affiliates, suppliers, or employees be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or inability to use, the materials on this Site or the performance of the products purchased through the Site.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">5. Changes to This Disclaimer</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We reserve the right to update or change this Disclaimer at any time. Any changes will be prominently posted on this page.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            If you have any questions about this Disclaimer, please contact us at:
            <br />
            📧 Email:{" "}
            <a
              href="mailto:contact@securesphereav.com"
              className="text-blue-600 underline"
            >
              contact@securesphereav.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Disclaimer;
