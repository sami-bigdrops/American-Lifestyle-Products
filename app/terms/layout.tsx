import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Modal } from "../components/Modal";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "American Lifestyle Products - Terms & Conditions",
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <Modal />
    </div>
  );
}