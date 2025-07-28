import React from 'react';

function TermsAndConditions() {
  return (
    <div className="bg-white px-6 py-12 sm:px-12 md:px-20 lg:px-40 text-gray-800">
     
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 border-b-4 border-amber-400 inline-block pb-3">
            Terms and Conditions
          </h1>
      <p className="mb-6">
        Thank you for shopping at <strong>SecureSphereAV</strong>. If, for any reason, you are not
        completely satisfied with a purchase, we invite you to review our policy on refunds and returns.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Interpretation and Definitions</h2>
        <p className="mb-2">
          The words with capitalized initial letters have meanings defined under the conditions below.
          These definitions apply regardless of whether they appear in singular or plural.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Company</strong>: Refers to “onesolutionavshop”, “We”, “Us” or “Our”.</li>
          <li><strong>Goods</strong>: Items offered for sale on our website.</li>
          <li><strong>Orders</strong>: A request to purchase Goods from us.</li>
          <li><strong>Service</strong>: Refers to the Website.</li>
          <li><strong>Website</strong>: Refers to onesolutionavshop, accessible at <a href="https://SecureSphereAV.store" className="text-yellow-600 hover:underline">onesolutionavshop.store</a>.</li>
          <li><strong>You</strong>: The user or legal entity accessing the Service.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Order Cancellation Rights</h2>
        <p className="mb-2">
          You have the right to cancel your Order within 14 days without giving any reason. The cancellation period ends 15 days from the date you received the goods or your appointed third party (not the carrier) took possession.
        </p>
        <p className="mb-2">
          To exercise this right, inform us by sending a clear statement to:
        </p>
        <p className="text-yellow-600">📧 contact@SecureSphereAV.store</p>
        <p className="mt-2">
          We will reimburse you within 15 days of receiving the returned goods using the same payment method you used. You will not incur any fees for the reimbursement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Conditions for Returns</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>The Goods must be purchased within the last 15 days.</li>
          <li>The Goods must be in their original packaging.</li>
        </ul>
        <p className="mt-4">The following Goods cannot be returned:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Goods with revealed product keys or added to a user’s account.</li>
          <li>Personalized or made-to-order items.</li>
          <li>Goods that deteriorate quickly or have passed their expiry.</li>
          <li>Unsealed hygiene-related products.</li>
          <li>Goods inseparably mixed with other items after delivery.</li>
        </ul>
        <p className="mt-4">
          Only regular-priced goods may be refunded. Sale items are non-refundable unless required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Returning Goods</h2>
        <p className="mb-2">
          You are responsible for the return shipping cost and risk. Please send returns to the address provided in our return email instructions.
        </p>
        <p>
          We recommend using a trackable and insured shipping service. We cannot refund without receiving the returned goods or proof of delivery.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Gifts</h2>
        <p className="mb-2">
          If the Goods were marked as a gift and sent directly to you, you’ll receive gift credit once we receive the return. Otherwise, refunds will be issued to the original purchaser.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions about our Terms, Returns, or Refund Policy, please email us at: <br />
          <span className="text-yellow-600">📧 contact@SecureSphereAV.store</span>
        </p>
      </section>
    </div>
  );
}

export default TermsAndConditions;
