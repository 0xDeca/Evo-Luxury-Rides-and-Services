export default function RefundPolicyPage() {
  return (
    <>
      <section className="pt-24 pb-12 bg-[#0a0e13]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Refund <span className="text-[#F8AC28]">Policy</span></h1>
        </div>
      </section>
      <section className="pb-20 bg-[#0a0e13]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-white/70 space-y-6 leading-relaxed">
          <h2 className="text-xl font-semibold text-white">Cancellation and Refund Policy</h2>
          <p>At Eko Luxury Rides and Service Apartments, we strive to provide flexible booking options for our clients. Please review our cancellation and refund policy below.</p>
          <h3 className="text-lg font-semibold text-white">Car Rental Cancellations</h3>
          <ul className="list-disc pl-5 space-y-1"><li>Cancellations made 48 hours or more before the pickup time: Full refund</li><li>Cancellations made between 24-48 hours before pickup: 50% refund</li><li>Cancellations made less than 24 hours before pickup: No refund</li><li>No-show: No refund</li></ul>
          <h3 className="text-lg font-semibold text-white">Apartment Booking Cancellations</h3>
          <ul className="list-disc pl-5 space-y-1"><li>Cancellations made 7 days or more before check-in: Full refund</li><li>Cancellations made between 3-7 days before check-in: 50% refund</li><li>Cancellations made less than 3 days before check-in: No refund</li><li>Early check-out: No refund for remaining nights</li></ul>
          <h3 className="text-lg font-semibold text-white">Security Deposits</h3>
          <p>Security deposits are fully refundable within 7 business days after the vehicle is returned or apartment is vacated, provided there are no damages or violations of terms.</p>
          <h3 className="text-lg font-semibold text-white">How to Request a Refund</h3>
          <p>Contact us via WhatsApp at 0810 783 7959 or email us with your booking details and refund request. We will process your request within 3-5 business days.</p>
        </div>
      </section>
    </>
  )
}