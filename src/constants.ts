import { Product, CaseStudy } from "./types";

export const CASE_STUDY: CaseStudy = {
  title: "High-Converting Product Listings",
  overview: "This project focuses on creating and optimizing product listings by crafting compelling titles, detailed descriptions, and accurate categorization. The goal is to improve product visibility in search results and increase customer conversion rates.",
  tasks: [
    {
      title: "Product Title Optimization",
      description: "Crafting SEO-optimized titles that include high-volume keywords while remaining clear and compelling for potential buyers.",
      icon: "Type",
    },
    {
      title: "Product Description Writing",
      description: "Writing persuasive copy that highlights benefits over features, using easy-to-read formatting and customer-focused language.",
      icon: "FileText",
    },
    {
      title: "Bullet Point Features",
      description: "Structuring key product highlights into scannable bullet points covering battery life, sound quality, compatibility, and build quality.",
      icon: "ListChecks",
    },
    {
      title: "Product Categorization",
      description: "Ensuring products are assigned to the most accurate categories and tagged with relevant keywords for better discoverability.",
      icon: "Tags",
    },
  ],
  strategy: [
    "Keyword optimization for search visibility",
    "Clear structure for readability",
    "Customer-focused messaging",
    "Consistent formatting across listings",
  ],
  results: [
    "Improved product discoverability",
    "Increased user engagement",
    "Higher conversion potential",
    "Better structured product data",
  ],
};

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    before: {
      title: "Bluetooth Headphones",
      description: "Good headphones with bluetooth and noise cancelling. Long battery.",
      keywords: ["headphones", "bluetooth"],
    },
    after: {
      title: "Wireless Bluetooth Headphones with Noise Cancellation, 40H Battery Life, Over-Ear Stereo Sound",
      description: "Experience unparalleled audio clarity with our premium Wireless Bluetooth Headphones. Designed for all-day comfort and immersive sound, these headphones feature advanced active noise cancellation (ANC) technology to block out the world and let you focus on what matters most.",
      features: [
        "40-Hour Extended Battery Life for multi-day use",
        "Active Noise Cancellation (ANC) for immersive listening",
        "Universal Bluetooth 5.2 Compatibility with seamless pairing",
        "Premium Build Quality with memory foam ear cushions",
        "Hi-Fi Stereo Sound with deep bass and crisp highs",
      ],
      category: "Electronics > Audio > Headphones",
      tags: ["Noise Cancelling", "Wireless", "Bluetooth 5.2", "Long Battery", "Over-Ear"],
    },
    image: "https://picsum.photos/seed/headphones/800/600",
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    before: {
      title: "Fitness Watch",
      description: "Watch that tracks steps and heart rate. Waterproof.",
      keywords: ["watch", "fitness"],
    },
    after: {
      title: "Smart Fitness Watch with Heart Rate Monitor, GPS Tracking, and 5ATM Waterproof Rating",
      description: "Take your fitness journey to the next level with our all-in-one Smart Fitness Watch. Whether you're a professional athlete or just starting out, this watch provides the data you need to succeed, from real-time heart rate monitoring to precise GPS tracking for your outdoor runs.",
      features: [
        "24/7 Heart Rate & Sleep Monitoring",
        "Built-in GPS for accurate distance and pace tracking",
        "5ATM Waterproof Rating (up to 50 meters)",
        "10-Day Battery Life on a single charge",
        "Smart Notifications for calls, texts, and apps",
      ],
      category: "Electronics > Wearables > Smartwatches",
      tags: ["Fitness Tracker", "GPS Watch", "Heart Rate Monitor", "Waterproof", "Smartwatch"],
    },
    image: "https://picsum.photos/seed/smartwatch/800/600",
  },
  {
    id: "3",
    name: "Portable Blender",
    before: {
      title: "Small Blender",
      description: "Portable blender for smoothies. USB charging.",
      keywords: ["blender", "smoothie"],
    },
    after: {
      title: "Portable Blender for Shakes and Smoothies, 6 Stainless Steel Blades, 4000mAh USB Rechargeable",
      description: "Blend on the go with our powerful and compact Portable Blender. Perfect for the gym, office, or travel, this blender features a high-speed motor and 6 stainless steel blades that can crush ice and frozen fruit in seconds, giving you a fresh smoothie anywhere.",
      features: [
        "Powerful 6 Stainless Steel Blades for smooth blending",
        "4000mAh USB Rechargeable Battery (up to 20 blends)",
        "BPA-Free Eco-Friendly Materials",
        "One-Touch Cleaning for effortless maintenance",
        "Compact & Lightweight Design for ultimate portability",
      ],
      category: "Home & Kitchen > Small Appliances > Blenders",
      tags: ["Portable Blender", "USB Rechargeable", "Smoothie Maker", "BPA-Free", "Personal Blender"],
    },
    image: "https://picsum.photos/seed/blender/800/600",
  },
];
