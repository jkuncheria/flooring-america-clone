import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'How quickly will you respond to my inquiry?',
          answer: 'We typically respond to all inquiries within 24 hours. For urgent matters or immediate assistance, please call us directly at 1-800-FLOORING. Our team is available Monday through Saturday to help with your flooring needs.'
        },
        {
          question: 'Do you offer free estimates?',
          answer: 'Yes! We offer free, no-obligation estimates for all flooring projects. Our experts will visit your home, measure your space, and provide a detailed quote. Schedule a consultation today to get started.'
        },
        {
          question: 'What areas do you serve?',
          answer: 'We serve Mundelein, Libertyville, Lake Forest and surrounding areas throughout the region. Contact us to confirm if we service your specific area. We are now open regular hours to help you with all your flooring needs!'
        },
        {
          question: 'Can I visit your showroom?',
          answer: 'Absolutely! Our showroom is open during regular business hours. No appointment is needed for browsing, but we recommend calling ahead for large groups or if you\'d like a guided tour. Our showroom features thousands of flooring samples you can see and feel in person.'
        }
      ]
    },
    {
      category: 'Products & Selection',
      questions: [
        {
          question: 'What types of flooring do you carry?',
          answer: 'We carry a complete selection of flooring including hardwood, carpet, luxury vinyl, tile, and laminate. Each category offers numerous styles, colors, and price points to fit any budget and design preference.'
        },
        {
          question: 'Do you have samples I can take home?',
          answer: 'Yes! We encourage you to take samples home to see how they look in your space with your lighting and décor. Samples are available for all our flooring products at no charge.'
        },
        {
          question: 'Can I see flooring options in my actual room?',
          answer: 'Yes! We offer a Room Visualizer tool that allows you to upload a photo of your room and see how different flooring options would look. Visit our showroom or use the visualizer on our website to try it out.'
        },
        {
          question: 'Do you offer eco-friendly flooring options?',
          answer: 'Absolutely! We carry a wide selection of eco-friendly flooring including bamboo, cork, and sustainable hardwood options. Many of our products are also low-VOC and contribute to better indoor air quality.'
        }
      ]
    },
    {
      category: 'Installation & Service',
      questions: [
        {
          question: 'Do you provide installation services?',
          answer: 'Yes! We have certified, professional installers who are trained and experienced in all types of flooring installation. Our installation team ensures proper preparation, precise installation, and quality finishing for lasting results.'
        },
        {
          question: 'How long does installation take?',
          answer: 'Installation time varies depending on the type of flooring and size of the project. Most residential installations take 1-3 days. We\'ll provide a timeline during your consultation and work efficiently to minimize disruption to your daily routine.'
        },
        {
          question: 'Do I need to move my furniture?',
          answer: 'Our installation team can move furniture for an additional fee, or you can move it yourself. We\'ll discuss this during your consultation and provide recommendations based on your specific situation.'
        },
        {
          question: 'What is your installation warranty?',
          answer: 'We stand behind our installation work with a comprehensive warranty. Specific warranty terms vary by product type and will be detailed in your installation agreement. Our certified installers ensure quality workmanship.'
        }
      ]
    },
    {
      category: 'Pricing & Financing',
      questions: [
        {
          question: 'What financing options do you offer?',
          answer: 'We offer flexible financing options including up to 18 months of interest-free financing on qualifying purchases. No down payment required on most plans. Apply online or in-store for instant approval.'
        },
        {
          question: 'Do you price match?',
          answer: 'We work hard to offer competitive pricing on all our products. If you find a lower price on an identical item from a local competitor, bring it to our attention and we\'ll do our best to match it.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No, we believe in transparent pricing. All costs including materials, installation, and any additional services will be clearly outlined in your estimate. There are no surprise charges or hidden fees.'
        },
        {
          question: 'Do you offer discounts or promotions?',
          answer: 'Yes! We regularly offer promotions and special deals on flooring products and installation. Check our website, visit our showroom, or sign up for our newsletter to stay informed about current offers.'
        }
      ]
    },
    {
      category: 'Care & Maintenance',
      questions: [
        {
          question: 'How do I care for my new floors?',
          answer: 'Care instructions vary by flooring type. We provide detailed care and maintenance guides with every purchase. Generally, regular sweeping/vacuuming and occasional mopping with appropriate cleaners will keep your floors looking beautiful.'
        },
        {
          question: 'Do you offer maintenance services?',
          answer: 'Yes, we offer professional cleaning and maintenance services for all types of flooring. This includes deep cleaning, refinishing for hardwood, and specialized treatments to keep your floors in top condition.'
        },
        {
          question: 'What if my floor gets damaged?',
          answer: 'Contact us immediately if your floor sustains damage. Many issues can be repaired without replacing the entire floor. Our team can assess the damage and recommend the best solution, which may be covered under warranty.'
        },
        {
          question: 'How long will my floors last?',
          answer: 'Floor lifespan varies by product type. Hardwood can last generations with proper care, while luxury vinyl and laminate typically last 15-25 years. We\'ll discuss expected lifespan during your consultation based on your chosen product and usage.'
        }
      ]
    },
    {
      category: 'Warranty & Guarantees',
      questions: [
        {
          question: 'What is the Adore Your Floor Guarantee?',
          answer: 'Our Adore Your Floor Guarantee means if you don\'t love your new 5-Star floor, we\'ll replace it for free. This is our commitment to your complete satisfaction with your flooring purchase.'
        },
        {
          question: 'What does the warranty cover?',
          answer: 'Warranty coverage varies by product and manufacturer. Most warranties cover manufacturing defects and premature wear. Installation warranties cover workmanship issues. We\'ll explain all warranty details before your purchase.'
        },
        {
          question: 'How do I file a warranty claim?',
          answer: 'Contact us directly if you believe you have a warranty issue. We\'ll guide you through the process, which typically involves photos and a brief description of the issue. Our team will work with the manufacturer to resolve your claim quickly.'
        },
        {
          question: 'Are warranties transferable?',
          answer: 'Most product warranties are transferable to new homeowners, which can add value to your home. Installation warranties typically apply to the original purchaser. Specific terms will be outlined in your warranty documentation.'
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Flatten all FAQs for easier management
  const allFaqs = faqs.flatMap(category => category.questions);

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
            Frequently Asked Questions
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our products, services, installation, and more. 
            Can't find what you're looking for? <Link to="/contact" className="text-blue-900 font-semibold hover:underline">Contact us</Link> and we'll be happy to help.
          </p>
        </div>

        {/* FAQ Categories */}
        {faqs.map((category, categoryIdx) => (
          <div key={categoryIdx} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-blue-50 p-3 rounded-xl mr-4">
                <HelpCircle className="w-6 h-6 text-blue-900" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.category}</h2>
            </div>
            
            <div className="space-y-4">
              {category.questions.map((faq, idx) => {
                const globalIndex = faqs.slice(0, categoryIdx).reduce((acc, cat) => acc + cat.questions.length, 0) + idx;
                return (
                  <div 
                    key={idx}
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-900 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(globalIndex)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                      {openFaq === globalIndex ? (
                        <ChevronUp className="w-5 h-5 text-blue-900 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === globalIndex && (
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our flooring experts are here to help. Contact us today and we'll answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </Link>
            <a 
              href="tel:18475665990"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Call (847) 566-5990
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

