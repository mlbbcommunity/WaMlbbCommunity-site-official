import FAQItem from "../components/FAQItem";

const faqs = [
  { question: "How do I join the community?", answer: "Just click the invite link in our WhatsApp group description!" },
  { question: "Are the bots free to use?", answer: "Yes! All bots in WaMLBB〽️ are free for members." },
  { question: "Can I suggest builds or heroes?", answer: "Of course, submit them to the admins and we’ll add them." }
];

export default function FAQ() {
  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem key={i} {...faq} />
        ))}
      </div>
    </div>
  );
}
