import React from 'react';

export default function PoliciesPage() {
  return (
    <div className="bg-softwhite text-navy pt-40 pb-32 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-16 border-b border-navy/10 pb-8">
          Support & Policies
        </h1>

        <div className="space-y-24">
          <section id="shipping" className="scroll-mt-40">
            <h2 className="text-2xl font-heading font-bold uppercase tracking-widest mb-6 text-blue-600">
              Shipping Information
            </h2>
            <div className="prose prose-lg text-navy/70 max-w-none font-light leading-relaxed">
              <p>
                At LUXEN, we ensure that your luxury eyewear reaches you with the utmost care and security. 
                We offer complimentary express global shipping on all orders.
              </p>
              <h3 className="text-sm font-bold uppercase tracking-widest text-navy mt-8 mb-4">Delivery Times</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>North America & Europe:</strong> 2-4 business days</li>
                <li><strong>Asia Pacific:</strong> 3-5 business days</li>
                <li><strong>Rest of the World:</strong> 5-7 business days</li>
              </ul>
              <p className="mt-6">
                All shipments are fully insured and require a signature upon delivery to guarantee secure transit. 
                Once your order is dispatched from our Zurich facility, you will receive a tracking link via email.
              </p>
            </div>
          </section>

          <section id="returns" className="scroll-mt-40">
            <h2 className="text-2xl font-heading font-bold uppercase tracking-widest mb-6 text-blue-600">
              Returns & Exchanges
            </h2>
            <div className="prose prose-lg text-navy/70 max-w-none font-light leading-relaxed">
              <p>
                We offer a 14-day complimentary return window from the date of delivery. 
                To be eligible for a return or exchange, the eyewear must be unworn, in its original pristine condition, 
                and include all original packaging, certificates of authenticity, and accessories.
              </p>
              <p className="mt-4">
                To initiate a return, please contact our concierge team at <a href="mailto:contact@luxen.com" className="text-navy font-bold hover:text-blue-600 transition-colors">contact@luxen.com</a>. 
                We will provide you with a pre-paid, fully insured shipping label. Refunds will be processed to the original payment method within 3-5 business days after inspection.
              </p>
            </div>
          </section>

          <section id="warranty" className="scroll-mt-40">
            <h2 className="text-2xl font-heading font-bold uppercase tracking-widest mb-6 text-blue-600">
              Warranty
            </h2>
            <div className="prose prose-lg text-navy/70 max-w-none font-light leading-relaxed">
              <p>
                Every LUXEN frame is a masterclass in optical engineering. We stand behind our craftsmanship 
                with a comprehensive 2-year international warranty against manufacturing defects in materials and workmanship.
              </p>
              <h3 className="text-sm font-bold uppercase tracking-widest text-navy mt-8 mb-4">What is Covered</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Defects in the titanium or acetate frame structure</li>
                <li>Hinge mechanism failures under normal use</li>
                <li>Delamination of the Sapphire Anti-Reflective lens coating</li>
              </ul>
              <p className="mt-6">
                Please note that this warranty does not cover normal wear and tear, scratched lenses resulting from daily use, 
                or damage caused by accidents, negligence, or unauthorized modifications.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
