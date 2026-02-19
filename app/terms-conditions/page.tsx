export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-blue-100">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-xl border p-8 md:p-12 prose prose-lg max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using Collegium (&quot;the Platform&quot;), you
              agree to be bound by these Terms and Conditions
              (&quot;Terms&quot;). If you do not agree with any part of these
              Terms, you may not access or use our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              Collegium provides an online platform for students to discover
              colleges, compare educational institutions, access information
              about courses and exams, read reviews, and receive personalized
              recommendations. Our services include:
            </p>
            <ul>
              <li>College and course information database</li>
              <li>College predictor tools</li>
              <li>College comparison features</li>
              <li>User reviews and ratings</li>
              <li>Educational content and articles</li>
              <li>Application tracking</li>
            </ul>

            <h2>3. User Accounts</h2>
            <h3>3.1 Registration</h3>
            <p>
              To access certain features, you must create an account. You agree
              to provide accurate, current, and complete information during
              registration.
            </p>
            <h3>3.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities under your account.
              Notify us immediately of any unauthorized use.
            </p>
            <h3>3.3 Age Requirement</h3>
            <p>
              You must be at least 13 years old to use our services. If you are
              under 18, you represent that you have parental or guardian
              consent.
            </p>

            <h2>4. User Content</h2>
            <h3>4.1 Reviews and Comments</h3>
            <p>
              When you submit reviews, comments, or other content, you grant us
              a non-exclusive, royalty-free, perpetual license to use, modify,
              and display such content.
            </p>
            <h3>4.2 Content Guidelines</h3>
            <p>You agree not to submit content that:</p>
            <ul>
              <li>Is false, misleading, or defamatory</li>
              <li>Infringes on intellectual property rights</li>
              <li>Contains offensive, abusive, or discriminatory language</li>
              <li>Violates any applicable laws or regulations</li>
              <li>Contains spam, advertisements, or promotional material</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              All content on the Platform, including text, graphics, logos, and
              software, is the property of Collegium or its licensors. You may
              not copy, modify, distribute, or reproduce any content without
              prior written consent.
            </p>

            <h2>6. Accuracy of Information</h2>
            <p>
              While we strive to provide accurate and up-to-date information, we
              do not guarantee the accuracy, completeness, or reliability of any
              information on the Platform. College details, fees, cutoffs, and
              other data are subject to change and should be verified with the
              respective institutions.
            </p>

            <h2>7. Third-Party Services</h2>
            <p>
              The Platform may contain links to third-party websites or
              services. We are not responsible for the content or practices of
              these external sites. Your interactions with third parties are
              governed by their respective terms and policies.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Collegium shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of your use of the Platform,
              including but not limited to:
            </p>
            <ul>
              <li>Loss of data or information</li>
              <li>Decisions made based on Platform information</li>
              <li>Inability to access or use the services</li>
              <li>Any errors or omissions in content</li>
            </ul>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Collegium, its officers,
              directors, employees, and agents from any claims, damages, losses,
              or expenses arising from your use of the Platform or violation of
              these Terms.
            </p>

            <h2>10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any
              time, without prior notice, for conduct that we believe violates
              these Terms or is harmful to other users, us, or third parties.
            </p>

            <h2>11. Modifications to Terms</h2>
            <p>
              We may modify these Terms at any time. We will notify users of
              significant changes by posting a notice on the Platform. Your
              continued use after such changes constitutes acceptance of the
              modified Terms.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising from these Terms shall be
              subject to the exclusive jurisdiction of the courts in Mumbai,
              Maharashtra.
            </p>

            <h2>13. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision shall be limited or eliminated to the
              minimum extent necessary, and the remaining provisions shall
              remain in full force and effect.
            </p>

            <h2>14. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the
              entire agreement between you and Collegium regarding your use of
              the Platform.
            </p>

            <h2>15. Contact Information</h2>
            <p>For questions about these Terms, please contact us at:</p>
            <ul>
              <li>Email: legal@collegium.in</li>
              <li>
                Address: 123 Business Park, Andheri East, Mumbai, Maharashtra
                400069
              </li>
              <li>Phone: +91 1800-XXX-XXXX</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
