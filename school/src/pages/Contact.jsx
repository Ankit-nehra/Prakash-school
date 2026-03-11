import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Contact() {
  return (
    <div>
      <Navbar />

      <div className="pt-20 max-w-4xl mx-auto px-6 py-12">

        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info / Map */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Address</h2>
            <p>123 School Street, City, Country</p>

            <h2 className="text-lg font-semibold">Email</h2>
            <p>info@myschool.com</p>

            <h2 className="text-lg font-semibold">Phone</h2>
            <p>+1 234 567 890</p>

            {/* Optional: Google Maps Placeholder */}
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
              Map Placeholder
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;