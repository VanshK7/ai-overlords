import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">Last Updated: May 22, 2025</p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            AI Overlords ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when you visit our website or use our
            services.
          </p>
          <p className="mt-4">
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please
            do not access the site or use our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

          <h3 className="text-xl font-medium mt-6 mb-3">Personal Data</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Register for an account</li>
            <li>Express interest in obtaining information about us or our products</li>
            <li>Participate in activities on our services</li>
            <li>Contact us</li>
          </ul>
          <p className="mt-4">
            Personal information may include your name, email address, phone number, billing address, and other similar
            information.
          </p>

          <h3 className="text-xl font-medium mt-6 mb-3">Automatically Collected Information</h3>
          <p>
            When you visit our website or use our services, we may automatically collect certain information about your
            device, including:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages you view</li>
            <li>Time and date of your visit</li>
            <li>Time spent on pages</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Provide, operate, and maintain our services</li>
            <li>Improve, personalize, and expand our services</li>
            <li>Understand and analyze how you use our services</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you for customer service, updates, and marketing purposes</li>
            <li>Process transactions</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity</li>
            <li>For other purposes with your consent</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
          <p>We may share your information with:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as
              payment processing, data analysis, email delivery, hosting services, and customer service.
            </li>
            <li>
              <strong>Business Partners:</strong> With your consent, we may share your information with our business
              partners to offer you certain products, services, or promotions.
            </li>
            <li>
              <strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by
              public authorities.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of
              company assets, financing, or acquisition of all or a portion of our business.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our services and hold certain
            information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
          </p>
          <p className="mt-4">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
            you do not accept cookies, you may not be able to use some portions of our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the
            security of any personal information we process. However, please also remember that we cannot guarantee that
            the internet itself is 100% secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">7. Your Data Protection Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>The right to access personal data we hold about you</li>
            <li>The right to request correction of your personal data</li>
            <li>The right to request deletion of your personal data</li>
            <li>The right to request restriction of processing of your personal data</li>
            <li>The right to data portability</li>
            <li>The right to object to processing of your personal data</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, please contact us using the information provided in the "Contact Us"
            section.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
            information from children under 18. If you are a parent or guardian and believe your child has provided us
            with personal information, please contact us.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
          </p>
          <p className="mt-4">
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
            are effective when they are posted on this page.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <p className="mt-2">
            <strong>Email:</strong> privacy@aioverlords.com
            <br />
            <strong>Address:</strong> 123 AI Street, San Francisco, CA 94105
          </p>
        </section>
      </div>

      <div className="mt-12 border-t pt-8">
        <Link href="/" className="text-primary hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  )
}
