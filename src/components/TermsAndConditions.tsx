// components/TermsAndConditions.tsx
import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      
      <p className="text-sm text-gray-600 mb-6">Last updated: 09/11/2025</p>
      
      <p className="mb-6">
        Welcome to <a href="https://thevapingworld.co.uk" className="underline">https://thevapingworld.co.uk/</a> (the “Website”), operated by Mediself Limited (“we”, “us”, or “our”).
        By accessing or using this Website, you agree to be bound by these Terms and Conditions.
        If you do not agree, please do not use this Website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Use of the Website</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          You agree to use this Website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else’s use and enjoyment of the Website.
        </li>
        <li>
          You must not misuse the Website by knowingly introducing viruses, trojans, worms, logic bombs, or other harmful material.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          All content on this Website, including text, images, graphics, logos, and design, is the property of Mediself Limited or its licensors, unless otherwise stated.
        </li>
        <li>
          You may not copy, reproduce, distribute, or modify any part of this Website without our prior written consent.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Products and Services (if applicable)</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          All products or services listed on this Website are subject to availability and may be withdrawn at any time.
        </li>
        <li>
          Prices are correct at the time of publication but may change without notice.
        </li>
        <li>
          We reserve the right to refuse any order placed through the Website.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Account Registration (if applicable)</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          You may need to register an account to use certain features of the Website.
        </li>
        <li>
          You must ensure that the details you provide are accurate and kept up to date.
        </li>
        <li>
          You are responsible for maintaining the confidentiality of your account details and password.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          The Website and its content are provided “as is” and “as available” without any warranties, express or implied.
        </li>
        <li>
          Mediself Limited will not be liable for any indirect, incidental, or consequential loss or damage arising out of or in connection with your use of the Website.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Links to Other Websites</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          This Website may contain links to third-party websites. We have no control over, and assume no responsibility for, the content or practices of those websites.
        </li>
        <li>
          The inclusion of any link does not imply endorsement by us.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Privacy and Data Protection</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          We are committed to protecting your privacy. Please refer to our{' '}
          <a href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800">
            Privacy Policy
          </a>{' '}
          for details on how we handle your personal data.
        </li>
        <li>
          By using this Website, you consent to such processing and warrant that all data provided by you is accurate.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          We may suspend or terminate your access to the Website at any time without notice if you breach these Terms.
        </li>
        <li>
          Upon termination, your right to use the Website will immediately cease.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to These Terms</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          We may revise these Terms from time to time by updating this page.
        </li>
        <li>
          Your continued use of the Website after changes are posted means you accept those changes.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
      <ol className="list-decimal pl-6 mb-6 space-y-3">
        <li>
          These Terms are governed by and construed in accordance with the laws of England and Wales.
        </li>
        <li>
          Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms and Conditions, please contact us at:
      </p>
      <ul className="space-y-2 mb-6">
        <li>📧 <a href="mailto:sales@medi-self.co.uk" className="underline">sales@medi-self.co.uk</a></li>
        <li>📞 [Your Contact Number]</li>
        <li>🏢 Unit 1 Springfield Industrial Estate, Eastham Street, Preston, PR1 7JD</li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;