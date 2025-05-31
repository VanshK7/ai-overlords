import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">Last Updated: May 22, 2025</p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            Welcome to AI Overlords. By accessing or using our website, services, applications, or products
            (collectively, the "Services"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree
            to these Terms, please do not use our Services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">2. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of any material changes by
            updating the "Last Updated" date at the top of these Terms. Your continued use of our Services after such
            changes constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">3. User Eligibility</h2>
          <p>
            You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that
            you meet all eligibility requirements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">4. Account Registration</h2>
          <p>
            Some of our Services may require you to create an account. You agree to provide accurate, current, and
            complete information during the registration process and to update such information to keep it accurate,
            current, and complete. You are responsible for safeguarding your password and for all activities that occur
            under your account.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
          <p>
            The Services and their entire contents, features, and functionality (including but not limited to all
            information, software, text, displays, images, video, and audio, and the design, selection, and arrangement
            thereof) are owned by AI Overlords, its licensors, or other providers of such material and are protected by
            copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p className="mt-4">
            These Terms permit you to use the Services for your personal, non-commercial use only. You must not
            reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish,
            download, store, or transmit any of the material on our Services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">6. User Conduct</h2>
          <p>You agree not to use our Services:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
            <li>
              To transmit, or procure the sending of, any advertising or promotional material, including any "junk
              mail," "chain letter," "spam," or any other similar solicitation.
            </li>
            <li>
              To impersonate or attempt to impersonate AI Overlords, an AI Overlords employee, another user, or any
              other person or entity.
            </li>
            <li>
              To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or
              which, as determined by us, may harm AI Overlords or users of the Services or expose them to liability.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p>
            In no event will AI Overlords, its affiliates, or their licensors, service providers, employees, agents,
            officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in
            connection with your use, or inability to use, the Services, including any direct, indirect, special,
            incidental, consequential, or punitive damages.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
          <p>
            We may terminate or suspend your access to all or part of the Services, without notice, for any conduct that
            we, in our sole discretion, believe is in violation of these Terms or is harmful to other users of the
            Services, us, or third parties, or for any other reason.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p>
            These Terms and any dispute or claim arising out of or related to them, their subject matter, or their
            formation shall be governed by and construed in accordance with the laws of the State of California, without
            giving effect to any choice or conflict of law provision or rule.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p className="mt-2">
            <strong>Email:</strong> legal@aioverlords.com
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
