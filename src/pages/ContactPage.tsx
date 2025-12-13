import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const Contact: React.FC = () => {
  return (
    <section className="px-6 py-20 mt-10">
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-14 text-center text-6xl sm:text-7xl font-bold tracking-tight text-yellow-400"
      >
        Let’s <span className="text-red-500">Connect</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-ultra glass-hover max-w-3xl mx-auto rounded-3xl p-10"
      >
        <motion.form
          action="https://formspree.io/f/xzznoava"
          method="POST"
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          <motion.div variants={fadeIn} custom={1}>
            <label className="block text-sm font-medium text-neutral-200">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="mt-2 w-full rounded-xl bg-black/40 p-4 border border-white/20 text-neutral-100 focus:ring-2 focus:ring-red-500 glass-ultra"
            />
          </motion.div>

          <motion.div variants={fadeIn} custom={2}>
            <label className="block text-sm font-medium text-neutral-200">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@gmail.com"
              className="mt-2 w-full rounded-xl bg-black/40 p-4 border border-white/20 text-neutral-100 focus:ring-2 focus:ring-red-500 glass-ultra"
            />
          </motion.div>

          <motion.div variants={fadeIn} custom={3}>
            <label className="block text-sm font-medium text-neutral-200">
              Phone No.
            </label>
            <input
              type="text"
              name="phone"
              placeholder="XXXXXXXXXX"
              className="mt-2 w-full rounded-xl bg-black/40 p-4 border border-white/20 text-neutral-100 focus:ring-2 focus:ring-red-500 glass-ultra"
            />
          </motion.div>

          <motion.div variants={fadeIn} custom={4}>
            <label className="block text-sm font-medium text-neutral-200">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Let's talk about something amazing..."
              className="mt-2 w-full rounded-xl bg-black/40 p-4 border border-white/20 text-neutral-100 focus:ring-2 focus:ring-red-500 glass-ultra"
            ></textarea>
          </motion.div>

          <motion.button
            variants={fadeIn}
            custom={5}
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-yellow-400 font-semibold text-black shadow-xl"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
