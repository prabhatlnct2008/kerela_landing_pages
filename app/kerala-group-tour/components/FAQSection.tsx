'use client';

import { useState } from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition text-left"
      >
        <span className="font-medium text-gray-800">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-gray-600 bg-gray-50">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this safe for solo women travellers?",
      answer: "Absolutely. We've hosted hundreds of solo women travelers. Our local guides are trained professionals, and we maintain strict safety protocols. Small group sizes (12-15 people) create a comfortable, secure environment."
    },
    {
      question: "Are houseboats hygienic and private?",
      answer: "Yes. We only work with premium houseboat operators who maintain high hygiene standards. Each houseboat has private rooms with attached bathrooms. We personally inspect all our partner properties."
    },
    {
      question: "Can we customize for a family or private group?",
      answer: "Yes! We offer private group customizations for families and friend groups. Contact us on WhatsApp to discuss your specific requirements and we'll create a tailored itinerary."
    },
    {
      question: "What about cancellations?",
      answer: "We have a clear cancellation/reschedule policy shared at booking. We aim to be flexible within batch constraints and will work with you to find the best solution."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppButton
            message="Hi! I have some questions about the Kerala trip."
            className="text-lg px-8 py-4"
          >
            Ask anything on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
