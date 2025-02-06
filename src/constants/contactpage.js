import { Building, HelpCircle, MailOpen, MessageSquareDot } from "lucide-react";

export const contactCards = [
  {
    icon: HelpCircle,
    title: "Knowledgebase",
    desc: "We're here to help with any questions.",
    cta: {
      name: "Contact Support",
      link: "tel:+254795889533",
    },
  },
  {
    icon: MessageSquareDot,
    title: "FAQ",
    desc: "Search our FAQ for answers to anything you might ask.",
    cta: {
      name: "Visit FAQ",
      link: "/contact-us#faq",
    },
  },
  {
    icon: MailOpen,
    title: "Contact us by email",
    desc: "If you wish to write us an email instead please use",
    cta: {
      name: "cs@globeflight.co.ke",
      link: "mailto:cs@globeflight.co.ke",
    },
  },
  {
    icon: Building,
    title: "Location",
    desc: "If you wish to visit our offices",
    location: [
      {
        location: "NEXTGEN MALL, 3rd Floor, Suite 39/40, Mombasa Road",
        country:"Kenya",
        link: "tel:+254729341277",
      },
      {
        location: "Warehouse, Semco Business Park Mombasa Road",
        country:"Kenya",
        link: "tel:+254729341277",
      },
      {
        location: "2006 fort argyle road",
        country:"United States",
        link: "tel:+19124649333",
      },
    ],
  },
];

export const faqs = [
  {
    question: "WHAT REGIONS IN EAST AFRICA DO YOU COVER?",
    answer:
      "We provide distribution services across East Africa, covering countries such as Kenya, Tanzania, Uganda, Rwanda, Ethiopia,and more. Our extensive network ensures seamless transportation within these regions.",
  },
  {
    question: "WHAT TYPES OF GOODS DO YOU TRANSPORT?",
    answer: "We handle a wide range of goods, including perishables, bulk goods, retail products, electronics, pharmaceuticals, and more. Our experienced team ensures the safe and secure transportation of your goods, regardless of their nature.",
  },
  {
    question: "How do I know my freight charges? ",
    answer: "Please send us an email. Value added services such as door delivery and re-packaging for international shipping are chargeable.",
  },
  {
    question: "HOW DO YOU ENSURE THE SAFETY OF MY GOODS DURING TRANSPORTATION?",
    answer:
      "We prioritize the safety and security of your goods. Our fleet of vehicles is regularly maintained, equipped with advanced tracking systems, and operated by skilled drivers trained in safe handling practices. Additionally, we offer insurance coverage options to provide additional peace of mind.",
  },

  {
    question: "CAN YOU ACCOMMODATE SPECIFIC DELIVERY SCHEDULES?",
    answer:
      "Absolutely. We understand the importance ofmeeting delivery deadlines. Our team works closely with you to understand your /n requirements and develop customized delivery schedules that align with your business needs.",
  },
  {
    question: "WHY CHOOSE US AS GLOBEFLIGHT KENYA ?",
    answer:
      "With over 25 years of experience in the logistics industry, we have honed our expertise, developed strong relationships, and gained in-depth knowledge of the East African market.",
  },
  {
    question: "DO YOU OFFER WAREHOUSING AND STORAGE SOLUTIONS?",
    answer:
      "Yes, we offer warehousing and storage solutions to accommodate your inventory needs. Our secure facilities are equipped to handle various types of goods, providing you with flexible storage options as per your requirements.",
  },
  {
    question: "HOW CAN I KEEP TRACK OF MY SHIPMENTS?",
    answer: "We appreciate the importance of tracking your shipments and staying up to date on their journey at Globeflight and Union Green. We have a dedicated customer support team that keeps you informed at all times.When you entrust us with your shipment, our customer service representatives keep you updated on the status and location of your items on a frequent basis. You can count on our team to respond quickly to \n any questions or issues you may have about your cargo.",
  },


  {
    question: "What is minimum chargeable weight and how does it affect me?",
    answer:
      "It is the lowest weight we will accept to render our freighting service. It varies from country to country. Any package that weighs less than minimum weight will be invoiced at minimum weight freight charge. ",
  },
  {
    question: "Can you ship anything I want to?",
    answer: "We will ship all our clients’ general goods. Depending on several factors we will at discretion decide whether to ship hazardous goods. Such include: gases, flammable liquid, flammable solids, oxidizing substances and organic peroxides, toxic and infectious substances, radioactive materials, corrosive materials, magnetized materials, dry ice, machines equipped with fuel tanks. For more information and clarifications you can send us an email .",
  },
];