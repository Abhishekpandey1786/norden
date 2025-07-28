import React from "react";

function Refund() {
  return (
    <div className="px-6 sm:px-12 md:px-20 py-10 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Page Heading */}
        <section>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-amber-400 inline-block pb-3">
            Refund and Returns Policy
          </h1>

          <p className="pt-5">Thank you for shopping at <strong>SecureSphere AV</strong>.</p>
          <p>
            If, for any reason, you are not completely satisfied with a purchase,
            we invite you to review our policy on refunds and returns.
          </p>
          <p>
            The following terms are applicable for any products that you purchased with us.
          </p>
        </section>

        {/* Interpretation Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Interpretation and Definitions</h2>
          <h3 className="font-medium text-lg mb-1">Interpretation</h3>
          <p>
            Words with capitalized initial letters have meanings defined under the following conditions.
            These definitions apply regardless of whether they appear in singular or plural.
          </p>
        </section>

        {/* Definitions Section */}
        <section>
          <h3 className="font-medium text-lg mb-2">Definitions</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Company</strong> refers to SecureSphere AV ("We", "Us", "Our").</li>
            <li><strong>Goods</strong> refer to the items offered for sale on the Website.</li>
            <li><strong>Orders</strong> mean a request by You to purchase Goods from Us.</li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li><strong>Website</strong> refers to SecureSphere AV, accessible at <em>securesphereav.com</em>.</li>
            <li><strong>You</strong> means the individual using the Service or the legal entity on whose behalf it is being accessed.</li>
          </ul>
        </section>

        {/* Order Cancellation Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Your Order Cancellation Rights</h2>
          <p>
            You may cancel your order within 14 days without providing any reason.
          </p>
          <p>
            The deadline is 15 days from the date you received the goods or when a third party (other than the carrier) took possession of the product.
          </p>
          <p>To cancel, please contact us via:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Email: <a href="mailto:contact@securesphereav.com" className="text-blue-600 underline">contact@securesphereav.com</a></li>
          </ul>
          <p>
            Reimbursement will be issued within 15 days after we receive the returned goods, using the same payment method.
          </p>
        </section>

        {/* Conditions for Returns */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Conditions for Returns</h2>
          <p>Please ensure the following conditions are met:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>The Goods were purchased in the last 15 days.</li>
            <li>The Goods are in the original packaging.</li>
          </ul>
        </section>

        {/* Non-returnable Goods */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Non-returnable Goods</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Goods where the product key is revealed or added to a user account.</li>
            <li>Customized or personalized Goods.</li>
            <li>Goods that deteriorate quickly or expire soon.</li>
            <li>Unsealed Goods not suitable for return due to hygiene reasons.</li>
            <li>Goods inseparably mixed with other items after delivery.</li>
          </ul>
        </section>

        {/* Other Notes */}
        <section>
          <p>
            We reserve the right to refuse returns not meeting the above conditions at our sole discretion.
          </p>
          <p>
            Only regular priced items may be refunded; sale items are non-refundable unless otherwise permitted by law.
          </p>
        </section>

        {/* Returning Goods */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Returning Goods</h2>
          <p>
            You are responsible for the cost and risk of returning the Goods to us. Please use a trackable and insured shipping method.
          </p>
          <p>
            Refunds will not be issued without actual receipt or proof of return delivery.
          </p>
        </section>

        {/* Gifts */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Gifts</h2>
          <p>
            If marked as a gift and shipped directly to you, you will receive a gift credit for the return. If not, the refund goes to the original purchaser.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>For any questions, please contact us at:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Email: <a href="mailto:contact@securesphereav.com" className="text-blue-600 underline">contact@securesphereav.com</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Refund;
