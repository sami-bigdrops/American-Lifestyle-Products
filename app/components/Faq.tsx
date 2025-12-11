'use client';

import { useState } from "react";

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How quickly will I receive my order?",
            answer: "We offer fast and reliable shipping to get your products to you as quickly as possible. Standard shipping typically takes 3-5 business days, while expedited options are available for faster delivery. You'll receive a tracking number once your order ships so you can monitor its progress every step of the way.",
        },
        {
            question: "What is your return policy?",
            answer: "We stand behind the quality of our products and offer a hassle-free return policy. If you're not completely satisfied with your purchase, you can return it within 30 days of delivery for a full refund or exchange. Products must be in their original condition with packaging. We'll provide you with a prepaid return label to make the process as easy as possible.",
        },
        {
            question: "How do you ensure product quality?",
            answer: "Every product in our collection is carefully selected and tested to meet our high standards of quality, durability, and functionality. We work directly with trusted manufacturers and suppliers to ensure that every item we offer provides real value and enhances your daily life. We're committed to only offering products that we would use ourselves.",
        },
        {
            question: "Do you ship nationwide?",
            answer: "Yes, we ship to all 50 states across the USA. We offer various shipping options to accommodate your needs, from standard delivery to expedited shipping. Our shipping partners ensure your products arrive safely and on time, no matter where you're located in the country.",
        },
        {
            question: "What makes your products different?",
            answer: "Our products are thoughtfully curated to solve real problems and make daily life easier and more meaningful. We focus on quality over quantity, selecting items that are well-designed, durable, and genuinely useful. Every product is chosen with the goal of simplifying routines, adding comfort, and bringing value to your everyday moments.",
        },
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-[#EFF7FF] w-full">
            <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
                <div className="mb-6 flex flex-col items-center gap-2 text-center sm:mb-8 md:mb-10 lg:mb-12 sm:gap-3">
                    <h2 className="font-title text-[24px] font-extrabold text-(--color-dark-blue) sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">
                        Frequently Asked Questions
                    </h2>
                    <p className="font-body text-[14px] font-light text-(--color-black-grey) sm:text-[15px] md:text-[16px] lg:text-[17px]">
                        Everything You Need to Know Before Getting Started
                    </p>
                </div>

                <div className="mx-auto max-w-3xl space-y-4 sm:space-y-5">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg border border-(--color-grey) bg-(--color-white) shadow-sm transition-shadow hover:shadow-md"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <p className="flex-1 font-body text-[15px] font-medium text-(--color-black-grey) sm:text-[16px] md:text-[17px]">
                                    {faq.question}
                                </p>
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--color-blue) text-(--color-white) transition-transform sm:h-9 sm:w-9">
                                    <svg
                                        className={`h-4 w-4 transition-transform sm:h-5 sm:w-5 ${
                                            openIndex === index ? 'rotate-45' : ''
                                        }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="border-t border-(--color-grey) p-5 sm:p-6">
                                    <p className="font-body text-[14px] leading-[22px] text-(--color-black-grey) sm:text-[15px] sm:leading-[24px] md:text-[16px]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
