// components/PrivacyPolicy.tsx

import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <p className="text-sm text-gray-600 mb-4">Last updated: 09/11/2025</p>
      
      <p className="mb-4">
        This Privacy Policy describes how Mediself Limited (“we”, “us”, or “our”) collects, uses, and protects your personal information when you visit thevapingworld.co.uk (the “Website”).
      </p>
      
      <p className="mb-4">
        We are committed to protecting your privacy and complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
      <p className="mb-4">We may collect and process the following types of personal information:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Personal details – name, email address, phone number, postal address.</li>
        <li>Account details – login information, password (encrypted).</li>
        <li>Order details – purchase history, billing and shipping addresses, payment method (handled securely by our payment processors).</li>
        <li>Technical data – IP address, browser type, operating system, referring URLs, pages visited, and time spent on the Website.</li>
        <li>Cookies and tracking data – used to improve your experience and analyse site traffic. See our Cookie Policy for details.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
      <p className="mb-4">We may use your personal data for the following purposes:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>To process and deliver your orders or donations.</li>
        <li>To communicate with you, including responding to your enquiries.</li>
        <li>To send you updates, offers, or newsletters (only if you have consented).</li>
        <li>To improve our products, services, and Website functionality.</li>
        <li>To detect and prevent fraud or other prohibited activities.</li>
        <li>To comply with legal and regulatory obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Legal Basis for Processing</h2>
      <p className="mb-4">We process your personal data only when one of the following applies:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>You have given consent.</li>
        <li>It is necessary for the performance of a contract with you.</li>
        <li>It is required to comply with a legal obligation.</li>
        <li>It is in our legitimate interests, provided your rights do not override those interests.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. How We Protect Your Information</h2>
      <p className="mb-4">
        We implement appropriate technical and organisational security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.
        All data is stored securely, and access is limited to authorised personnel only.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Sharing Your Information</h2>
      <p className="mb-4">We may share your data with:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Service providers who help us operate our business (e.g. payment processors, delivery partners, IT support).</li>
        <li>Regulatory bodies or law enforcement agencies where required by law.</li>
        <li>Analytics or advertising partners (e.g. Google Analytics) to help us understand Website usage.</li>
      </ul>
      <p className="mb-4">We never sell or rent your personal data to third parties.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. International Data Transfers</h2>
      <p className="mb-4">
        If your data is transferred outside the UK or EEA, we ensure that appropriate safeguards (such as Standard Contractual Clauses) are in place to protect your information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Data Retention</h2>
      <p className="mb-4">
        We keep your personal information only as long as necessary for the purposes for which it was collected or as required by law (e.g. tax or accounting regulations).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">8. Your Data Protection Rights</h2>
      <p className="mb-4">You have the following rights under the UK GDPR:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>The right to access your personal data.</li>
        <li>The right to rectify inaccurate or incomplete data.</li>
        <li>The right to erase your data (“right to be forgotten”).</li>
        <li>The right to restrict or object to processing.</li>
        <li>The right to data portability (receive your data in a machine-readable format).</li>
        <li>The right to withdraw consent at any time.</li>
      </ul>
      <p className="mb-4">To exercise these rights, please contact us using the details below.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">9. Cookies</h2>
      <p className="mb-4">
        We use cookies to enhance your browsing experience and analyse traffic.
        You can manage or disable cookies through your browser settings.
        For more details, please see our Cookie Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">10. Third-Party Links</h2>
      <p className="mb-4">
        Our Website may contain links to other websites.
        We are not responsible for the privacy practices or content of those third-party sites.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">11. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time.
        Any changes will be posted on this page with an updated “Last Updated” date.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">12. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy or wish to exercise your rights, please contact:
      </p>
      <p className="mb-2">📧 Sales@medi-self.co.uk</p>
      <p className="mb-4">🏢 Mediself Limited, Unit 1 Sprinfield Industrial Estate, Eastham Street, Preston, PR1 7JD</p>
      <p className="mb-4">
        If you are not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner’s Office (ICO) at https://www.ico.org.uk.
      </p>
    </div>
  );
};

export default PrivacyPolicy;