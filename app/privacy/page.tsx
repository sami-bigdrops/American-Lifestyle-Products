'use client';

import { useModal } from "../contexts/ModalContext";

export default function PrivacyPolicy() {
  const { openModal } = useModal();
  return (
    <section className="bg-(--color-white) w-full">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:mb-12">
          <h1 className="font-title text-[32px] font-extrabold leading-tight text-(--color-dark-blue) sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[50px]">
            Privacy Policy
          </h1>
          <p className="font-body text-[14px] font-normal text-(--color-black-grey) opacity-70 sm:text-[15px] md:text-[16px]">
            Last Updated: January 1, 2025
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              1. Information We Collect
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              At American Lifestyle Products, we collect information that you provide directly to us, such as when you:
            </p>
            <ul className="ml-6 flex flex-col gap-2 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:ml-8 sm:text-[16px] sm:leading-[28px]">
              <li className="list-disc">Place an order for our products</li>
              <li className="list-disc">Create an account on our website</li>
              <li className="list-disc">Contact us for customer support</li>
              <li className="list-disc">Subscribe to our newsletter</li>
              <li className="list-disc">Participate in surveys or promotions</li>
            </ul>
            <p className="mt-4 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              The types of information we may collect include:
            </p>
            <ul className="ml-6 flex flex-col gap-2 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:ml-8 sm:text-[16px] sm:leading-[28px]">
              <li className="list-disc">Personal identifiers (name, email, phone number, address)</li>
              <li className="list-disc">Payment information (credit card details, billing address)</li>
              <li className="list-disc">Shipping and delivery information</li>
              <li className="list-disc">Usage data and preferences</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              2. How We Use Your Information
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              We use the information we collect to:
            </p>
            <ul className="ml-6 flex flex-col gap-2 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:ml-8 sm:text-[16px] sm:leading-[28px]">
              <li className="list-disc">Process and fulfill your product orders</li>
              <li className="list-disc">Process payments and manage transactions</li>
              <li className="list-disc">Communicate with you about your orders and our products</li>
              <li className="list-disc">Improve our products and customer experience</li>
              <li className="list-disc">Comply with legal and regulatory requirements</li>
              <li className="list-disc">Send promotional materials (with your consent)</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              3. Information Sharing and Disclosure
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              We may share your information with:
            </p>
            <ul className="ml-6 flex flex-col gap-2 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:ml-8 sm:text-[16px] sm:leading-[28px]">
              <li className="list-disc">Payment processors and financial institutions</li>
              <li className="list-disc">Shipping and delivery partners</li>
              <li className="list-disc">Service providers who assist in our operations</li>
              <li className="list-disc">Legal authorities when required by law</li>
            </ul>
            <p className="mt-4 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              4. Data Security
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              We implement industry-standard security measures to protect your personal information, including:
            </p>
            <ul className="ml-6 flex flex-col gap-2 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:ml-8 sm:text-[16px] sm:leading-[28px]">
              <li className="list-disc">256-bit SSL encryption for data transmission</li>
              <li className="list-disc">Secure data storage with limited access</li>
              <li className="list-disc">Regular security audits and monitoring</li>
              <li className="list-disc">Employee training on data protection</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              5. Your Rights and Choices
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              You have the right to:
            </p>
            <ul className="ml-6 flex flex-col gap-2 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:ml-8 sm:text-[16px] sm:leading-[28px]">
              <li className="list-disc">Access and review your personal information</li>
              <li className="list-disc">Request corrections to inaccurate data</li>
              <li className="list-disc">Opt out of promotional communications</li>
              <li className="list-disc">Request deletion of your account and data</li>
              <li className="list-disc">Withdraw consent for data processing</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              6. Cookies and Tracking
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              Our website uses cookies and similar technologies to:
            </p>
            <ul className="ml-6 flex flex-col gap-2 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:ml-8 sm:text-[16px] sm:leading-[28px]">
              <li className="list-disc">Remember your preferences and settings</li>
              <li className="list-disc">Analyze website traffic and usage patterns</li>
              <li className="list-disc">Provide personalized content and advertisements</li>
              <li className="list-disc">Improve website functionality</li>
            </ul>
            <p className="mt-4 font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              You can control cookie settings through your browser preferences.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              7. Third-Party Links
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              8. Children&apos;s Privacy
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              9. Changes to This Policy
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the updated policy on our website and updating the &quot;Last Updated&quot; date.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-title text-[24px] font-bold text-(--color-dark-blue) sm:text-[26px] md:text-[28px]">
              10. Contact Us
            </h2>
            <p className="font-body text-[15px] leading-[26px] text-(--color-black-grey) sm:text-[16px] sm:leading-[28px]">
              If you have any questions about these Terms and Conditions, please <button onClick={() => openModal('contact')} className="text-(--color-blue) underline">Contact Us</button>
            </p>
          </div>

          <div className="mt-8 border-t border-(--color-grey) pt-6 sm:mt-10 sm:pt-8">
            <p className="font-body text-[14px] leading-[24px] text-(--color-black-grey) sm:text-[15px] sm:leading-[26px]">
              By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to our data practices as described herein.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
