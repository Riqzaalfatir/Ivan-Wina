export type FAQIsi = {
  pertanyaan: string;
  jawaban: string;
};

export type FAQSection = {
  judul: string;
  items: FAQIsi[];
};

export const faqData: FAQSection[] = [
  {
    judul: "ATTENDANCE & GUESTS",
    items: [
      {
        pertanyaan: "Can I bring a plus one?",
        jawaban:
          "We are keeping our celebration intimate and can only accommodate the guests specifically named on your invitation. We appreciate your understanding!",
      },
      {
        pertanyaan: "Are kids welcome?",
        jawaban:
          "We kindly ask that this be an adults-only celebration.",
      },
    ],
  },
   {
        judul: "ATTIRES & COMFORT",
        items: [
            {
                pertanyaan: "What is the dress code?",
                jawaban: "Formal attire is requested.",
            },
            {
                pertanyaan: "A note on footwear:",
                jawaban: "Please wear comfortable shoes.",
            },
            {
                pertanyaan: "What about the weather?",
                jawaban: "It may be warm, dress accordingly.",
            },
        ]
    },
    {
        judul: "THE LOGISTICS",
        items: [
            {
                pertanyaan: "Can I bring my own car?",
                jawaban: "Yes, parking is available.",
            },
            {
                pertanyaan: "How do I get to the venue?",
                jawaban: "You can use Google Maps or provided directions.",
            },
            {
                pertanyaan: "Do I need to pay for entrance or parking?",
                jawaban: "No, everything is covered.",
            },
            {
                pertanyaan: "Is there shuttle transport available?",
                jawaban: "Yes, shuttle will be provided.",
            },
        ]
    },
];

