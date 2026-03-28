import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Type,
  FileText,
  ListChecks,
  Tags,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Layout,
  ChevronRight,
  ShoppingCart,
  Star,
  ShieldCheck,
  Zap,
  Battery,
  Music,
  Bluetooth,
  Smartphone,
  Heart,
  Droplets,
  Timer,
  Navigation,
  Activity,
  Coffee,
  Wind
} from "lucide-react";
import { CASE_STUDY, SAMPLE_PRODUCTS } from "./constants";
import { Product } from "./types";

const IconMap: Record<string, React.ReactNode> = {
  Type: <Type className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  ListChecks: <ListChecks className="w-6 h-6" />,
  Tags: <Tags className="w-6 h-6" />,
};

const FeatureIconMap: Record<string, React.ReactNode> = {
  "Battery": <Battery className="w-4 h-4" />,
  "Sound": <Music className="w-4 h-4" />,
  "Compatibility": <Bluetooth className="w-4 h-4" />,
  "Build": <ShieldCheck className="w-4 h-4" />,
  "GPS": <Navigation className="w-4 h-4" />,
  "Heart": <Activity className="w-4 h-4" />,
  "Water": <Droplets className="w-4 h-4" />,
  "Smart": <Smartphone className="w-4 h-4" />,
  "Blades": <Wind className="w-4 h-4" />,
  "Cleaning": <Zap className="w-4 h-4" />,
};

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product>(SAMPLE_PRODUCTS[0]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="font-bold text-xl tracking-tight">Portfolio.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#overview" className="hover:text-blue-600 transition-colors">Overview</a>
            <a href="#process" className="hover:text-blue-600 transition-colors">Process</a>
            <a href="#comparison" className="hover:text-blue-600 transition-colors">Before & After</a>
            <a href="#strategy" className="hover:text-blue-600 transition-colors">Strategy</a>
            <a href="/#results" className="hover:text-blue-600 transition-colors">Results</a>
          </div>
          <a href="https://sunday-o.vercel.app/#contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
              Hire Me
            </button>
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-32">
        {/* Hero Section */}
        <section id="overview" className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-3 h-3" />
              E-commerce Optimization
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              {CASE_STUDY.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              {CASE_STUDY.overview}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                SEO Optimized
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Conversion Focused
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Data Driven
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl overflow-hidden shadow-2xl border border-white/50">
              <img
                src={SAMPLE_PRODUCTS[0].image}
                alt="Product Optimization"
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl border border-white max-w-xs space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase">Conversion Rate</div>
                      <div className="text-2xl font-bold text-gray-900">+42%</div>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-blue-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Process Section */}
        <section id="process" className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Optimization Process</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A systematic approach to transforming vague product data into high-performing sales assets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CASE_STUDY.tasks.map((task, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {IconMap[task.icon]}
                </div>
                <h3 className="text-xl font-bold mb-3">{task.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {task.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Before & After Comparison */}
        <section id="comparison" className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Before vs. After</h2>
              <p className="text-gray-500">Select a product to see the transformation.</p>
            </div>
            <div className="flex bg-gray-100 p-1 rounded-2xl overflow-x-auto max-w-full">
              {SAMPLE_PRODUCTS.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`px-6 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${selectedProduct.id === product.id
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                    }`}
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Before Card */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider">
                  Before Optimization
                </div>
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 space-y-6 opacity-60 grayscale">
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-gray-400 uppercase">Product Title</div>
                    <div className="text-xl font-medium text-gray-800">{selectedProduct.before.title}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-gray-400 uppercase">Description</div>
                    <div className="text-sm text-gray-600 leading-relaxed">{selectedProduct.before.description}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-gray-400 uppercase">Keywords</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.before.keywords.map((kw, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-200 rounded-lg text-xs font-medium text-gray-500">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* After Card */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wider">
                  After Optimization
                </div>
                <div className="bg-blue-50/30 rounded-3xl p-8 border border-blue-100 space-y-6 shadow-sm">
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-blue-400 uppercase">SEO-Optimized Title</div>
                    <div className="text-xl font-bold text-gray-900 leading-tight">{selectedProduct.after.title}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-blue-400 uppercase">Persuasive Description</div>
                    <div className="text-sm text-gray-700 leading-relaxed">{selectedProduct.after.description}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-blue-400 uppercase">Key Benefits</div>
                    <div className="grid gap-2">
                      {selectedProduct.after.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Strategy & Results */}
        <section className="grid lg:grid-cols-2 gap-12">
          <motion.div
            id="strategy"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A] text-white rounded-[3rem] p-12 space-y-8"
          >
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400">
              <Layout className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Core Strategy</h2>
            <div className="space-y-6">
              {CASE_STUDY.strategy.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    0{i + 1}
                  </div>
                  <span className="text-lg text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            id="results"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-600 text-white rounded-[3rem] p-12 space-y-8"
          >
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Project Impact</h2>
            <div className="grid gap-4">
              {CASE_STUDY.results.map((result, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-center justify-between group hover:bg-white/20 transition-all cursor-default">
                  <span className="text-lg font-medium">{result}</span>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Bonus: Sample Listing (Amazon Style) */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Sample Product Listing</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A deep dive into the final output for our flagship product optimization.
            </p>
          </div>

          <div className="bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Product Image Gallery Simulation */}
              <div className="p-8 lg:p-12 bg-gray-50 flex flex-col gap-6">
                <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200">
                  <img
                    src={SAMPLE_PRODUCTS[0].image}
                    alt={SAMPLE_PRODUCTS[0].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer hover:border-blue-500 transition-all">
                      <img
                        src={`https://picsum.photos/seed/hp-${i}/200/200`}
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details Simulation */}
              <div className="p-8 lg:p-12 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-blue-600 uppercase tracking-widest">
                    <ShoppingCart className="w-4 h-4" />
                    Premium Listing
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                    {SAMPLE_PRODUCTS[0].after.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <span className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">4,821 ratings</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">150+ answered questions</span>
                  </div>
                </div>

                <div className="h-px bg-gray-100" />

                <div className="space-y-4">
                  <div className="text-sm font-bold text-gray-900 uppercase">About this item</div>
                  <ul className="space-y-3">
                    {SAMPLE_PRODUCTS[0].after.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="text-sm font-bold text-gray-900 uppercase">Categorization & Tags</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold border border-blue-100">
                      {SAMPLE_PRODUCTS[0].after.category}
                    </span>
                    {SAMPLE_PRODUCTS[0].after.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium border border-gray-200">
                        #{tag.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-gray-900 font-bold py-3 rounded-full shadow-sm transition-all flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="font-bold text-xl tracking-tight">Portfolio.</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Helping e-commerce brands scale through high-performance product data and customer-centric messaging.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                <Zap className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                <Layout className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                <Smartphone className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-[2rem] p-10 space-y-6">
            <h3 className="text-2xl font-bold">Ready to optimize your store?</h3>
            <p className="text-gray-600">Let's discuss how we can improve your conversion rates and search visibility.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 High-Converting Product Listings Case Study. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
