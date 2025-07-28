import React from "react";

function About() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-amber-400 inline-block pb-2">
            About Us
          </h1>
        </div>
        <section className="space-y-4">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Welcome to SecureSphere AV, your number one source for all the
            latest computer security programs. We’re dedicated to giving you the
            very best of antivirus security programs, with a focus on affordable
            and latest security programs.
          </p>
        </section>
        <section className="space-y-4">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            SecureSphere AV is a Professional Antivirus Products Platform.
            We’re dedicated to providing you the best of Antivirus Products,
            with a focus on dependability and Latest Security. SecureSphere AV
            also offers you the latest security programs at competitive prices.
            We now serve customers all over United States and are thrilled that
            we’re able to turn our passion into our own website.
          </p>
        </section>
        <section className="space-y-4">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We hope you enjoy the available products as much as we enjoy
            offering them to you. If you have any questions or comments, please
            don’t hesitate to contact https://www.SecureSphereAV.store/
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
