// import React, { useState } from "react";
// import WaterEffects from "./WaterEffects";

// const faqsData = [
//   {
//     question: "What is the deepest borewell you can drill?",
//     answer:
//       "With our state-of-the-art equipment, we can drill up to 1,500 feet. Depth may vary depending on soil conditions and water table levels in your location.",
//   },
//   {
//     question: "Which drilling techniques do you use?",
//     answer:
//       "We employ a combination of modern rotary and DTH (Down-The-Hole) drilling methods to ensure efficiency and safety.",
//   },
//   {
//     question: "How long does a typical borewell installation take?",
//     answer:
//       "Depending on depth and soil conditions, most residential borewells are completed within 3–7 days.",
//   },
//   {
//     question: "Do you provide water quality testing?",
//     answer:
//       "Yes, we offer comprehensive water testing to ensure safety and potability before the borewell is commissioned.",
//   },
  
//   {
//     question: "Do you offer maintenance services?",
//     answer:
//       "Absolutely. Our team provides regular maintenance, pump servicing, and troubleshooting.",
//   },
//   {
//     question: "Which locations do you cover?",
//     answer: "We serve across Gujarat for residential, commercial, and agricultural projects.",
//   },
//   {
//     question: "Do you handle emergencies?",
//     answer: "Yes, our emergency response team is available for urgent support.",
//   },
//   {
//     question: "What is the approximate cost of drilling a borewell?",
//     answer:
//       "Pricing varies based on depth, soil type, and equipment. Contact us for an estimate.",
//   },  
//   {
//     question: "How do you ensure water availability before drilling?",
//     answer:
//       "We conduct geological surveys and use advanced ground testing equipment.",
//   },
// ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section
//       id="faq"
//       className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden water-wave-bg water-surface"
//     >
//       {/* Water Effects */}
//       <WaterEffects variant="waves" />

//       {/* Bubbles */}
//       <div className="water-bubbles">
//         <div className="water-bubble"></div>
//         <div className="water-bubble"></div>
//         <div className="water-bubble"></div>
//         <div className="water-bubble"></div>
//         <div className="water-bubble"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10 faq-page">
        
//         {/* Header */}
//         <div className="faq-header text-center mb-12">
//           <h1 className="text-5xl font-bold text-gray-900 mb-4">
//             Frequently Asked Questions
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Everything you need to know about our borewell and water solutions.
//           </p>
//         </div>

//         {/* FAQ List */}
//         <div className="faq-container max-w-4xl mx-auto">
//           {faqsData.map((faq, index) => (
//             <div
//               key={index}
//               className={`faq-card ${openIndex === index ? "open" : ""}`}
//               onClick={() => toggleFAQ(index)}
//             >
//               <div className="faq-question">
//                 <h3>{faq.question}</h3>
//                 <span>{openIndex === index ? "−" : "+"}</span>
//               </div>

//               {/* Answer – shown only when open */}
//               {openIndex === index && (
//                 <div className="faq-answer">
//                   <p>{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Contact Section */}
//         <div className="faq-contact mt-16 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Still Have Questions?
//           </h2>
//           <p className="text-gray-600 mb-6 max-w-xl mx-auto">
//             Our experts are ready to assist you with your borewell project.
//           </p>
//           <button
//             className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
//             onClick={() => (window.location.href = 'tel:+919106604895')}
//           >
//             Call Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;


import React, { useState } from "react";
import WaterEffects from "./WaterEffects";

const faqsData = [
  {
    question: "What is the deepest borewell that can be drilled in Vadodara?",
    answer:
      "Using advanced rotary and DTH drilling machinery, we can drill borewells up to 1,500 feet deep depending on the soil structure and groundwater level in your area.",
  },
  {
    question: "Which borewell drilling techniques do you use?",
    answer:
      "We use modern Rotary and DTH (Down-The-Hole) drilling technology, which ensures faster drilling and greater precision for residential, commercial, and agricultural projects.",
  },
  {
    question: "How long does a borewell installation take in Vadodara?",
    answer:
      "Most borewell drilling and installation projects take around 3–7 days depending on depth and soil conditions.",
  },
  {
    question: "Do you provide water quality testing services?",
    answer:
      "Yes, we offer complete water testing including TDS, pH, hardness and safety checks to ensure the water is suitable for drinking or usage.",
  },
  {
    question: "Do you offer borewell maintenance and repair?",
    answer:
      "Yes, we provide repair, cleaning, pump servicing, borewell flushing, and troubleshooting for low water output or pump failure.",
  },
  {
    question: "Which locations do you cover?",
    answer:
      "We serve the entire Vadodara region including Tarsali, Manjalpur, Makarpura, Atladara, Gotri, Waghodia Road, Ajwa Road, and nearby areas across Gujarat.",
  },
  {
    question: "Do you provide emergency borewell services?",
    answer:
      "Yes, we offer 24/7 emergency borewell and submersible pump support for urgent breakdowns.",
  },
  {
    question: "What is the approximate cost of a borewell in Vadodara?",
    answer:
      "Borewell drilling cost depends on depth, diameter, soil, and pump type. Contact us for a free estimate.",
  },
  {
    question: "How do you check water availability before drilling?",
    answer:
      "We perform geological and geophysical groundwater surveys to ensure the most promising drilling point.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden water-wave-bg water-surface"
    >
      <WaterEffects variant="waves" />

      <div className="container mx-auto px-4 relative z-10 faq-page">

        <header className="faq-header text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Borewell FAQ – Common Questions Answered
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Helpful answers related to borewell drilling, maintenance, pumps, and water solutions in Vadodara.
          </p>
        </header>

        <div className="faq-container max-w-4xl mx-auto">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className={`faq-card ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span>{openIndex === index ? "−" : "+"}</span>
              </div>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-contact mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions? We’re Here to Help!
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Speak to our experts today for accurate guidance and project assessment.
          </p>
          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            onClick={() => (window.location.href = "tel:+919106604895")}
          >
            Call Now – +91 91066 04895
          </button>
        </div>
        {/* <div>
          <p class="text-gray-700 mt-6">
          Still unsure about the right borewell solution? 
          Visit our <a href="#services" class="text-blue-600 font-semibold underline">Services</a> page 
          or check real project results in our 
          <a href="#gallery" class="text-blue-600 font-semibold underline">Gallery</a>.
          </p>

        </div> */}
      </div>

      {/* FAQ Schema For SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqsData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })
      }} />
    </section>
  );
};

export default FAQ;
