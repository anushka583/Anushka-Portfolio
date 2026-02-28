import { useRef } from "react";
import emailjs from "@emailjs/browser";

function CTA() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="relative z-10 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* MAIN WRAPPER CARD */}
        <div className="bg-[#0d1117] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">

          {/* Purple Heading Card */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-10 md:p-14 text-center">

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have an Idea in Mind?
            </h2>

            <p className="text-gray-200">
              Let’s discuss how we can turn it into something real.
            </p>

          </div>

          {/* Form Section */}
          <div className="p-10 md:p-14 space-y-8">

            <form ref={form} onSubmit={sendEmail} className="space-y-8">

              <div>
                <label className="block mb-2 text-lg font-medium text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-4 rounded-xl bg-[#111827] border border-gray-700 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-lg font-medium text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="yourname@gmail.com"
                  className="w-full p-4 rounded-xl bg-[#111827] border border-gray-700 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-lg font-medium text-white">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Let's discuss a project opportunity..."
                  className="w-full p-4 rounded-xl bg-[#111827] border border-gray-700 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-lg font-medium text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Hi Anushka, I'd like to discuss..."
                  className="w-full p-4 rounded-xl bg-[#111827] border border-gray-700 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;