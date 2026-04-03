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
          "Yes! We’d love to have your little ones join us. Please ensure they are included in your RSVP so we can arrange a baby chair for them.",
      },
    ],
  },
  {
    judul: "ATTIRES & COMFORT",
    items: [
      {
        pertanyaan: "What about the weather?",
        jawaban: "Lembang can be mildly windy with temperatures varying between 19°C–25°C. Please wear something according to your personal tolerance to ensure you stay comfortable.",
      },
      {
        pertanyaan: "What if it rains? ",
        jawaban: "Although it is expected to be sunny, there is another area with roof as our alternative. Umbrella is also provided for the guests.",
      },
    ]
  },
  {
    judul: "TRAVEL",
    items: [
      {
        pertanyaan: "Can I bring my own car?",
        jawaban: "Yes! There is plenty of complimentary parking available at the venue for all guests.",
      },
      {
        pertanyaan: "What if I don’t bring a car?",
        jawaban: "We will provide a shuttle during our day. For those who requested transport in their RSVP, we are providing a shuttle service between our partner hotels, the church, and the venue.For those who are attending the ceremony, you can RSVP the shuttle from the church. ",
      },
      {
        pertanyaan: "How do I get to the venue?",
        jawaban: "If you’re attending the ceremony, you can reach Bandung by car or train. If you’re going straight to the reception, there are 2 options. By car: A little reminder that our reception venue is at Lembang, not Bandung.We highly recommend guests driving from outside the area to take the Subang highway exit.This helps you avoid the heavy Bandung- Lembang traffic. By train: You can use the shuttle provided from the church to, just make sure you RSVP a seat in the shuttle and arrive at the church by 10 a.m.",
      },
      {
        pertanyaan: "Do I need to pay for entrance or parking?",
        jawaban: "The venue is located within Perhutani territory, which requires an entrance fee. However, we have already settled these costs for you. Just let the gate staff know that you are a guest of our wedding.",
      },
]
    },
];

