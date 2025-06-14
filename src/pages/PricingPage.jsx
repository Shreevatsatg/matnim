import React from 'react';
import { Sparkles, Check, ArrowRight, CreditCard } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started with basic animations",
      features: [
        "Up to 3 animations per month",
        "Standard resolution (720p)",
        "Basic AI prompts",
        "Community support",
      ],
      buttonText: "Get Started",
      buttonLink: "/signup",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Ideal for educators and content creators",
      features: [
        "Unlimited animations",
        "High resolution (1080p)",
        "Advanced AI prompts",
        "Priority email support",
        "Export to MP4 and GIF",
      ],
      buttonText: "Choose Pro",
      buttonLink: "/signup",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for teams and institutions",
      features: [
        "Unlimited animations",
        "4K resolution",
        "Custom AI model training",
        "Dedicated support",
        "API access",
        "Team collaboration tools",
      ],
      buttonText: "Contact Us",
      buttonLink: "/contact",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400/6 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Flexible Plans
            </span>
            <span className="block text-white text-4xl md:text-5xl">for Every Creator</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan to bring your mathematical animations to life with Matnim's AI-powered platform. Start free or scale with your needs.
          </p>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.highlighted ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 'border-white/10'
                } transition-all hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20`}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-black">{plan.price}</span>
                    {plan.period && <span className="text-gray-300 ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <Check className="w-5 h-5 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.buttonLink}
                  className={`block w-full text-center px-6 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50'
                  }`}
                  aria-label={`Select ${plan.name} plan`}
                >
                  {plan.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
              Start Creating Today
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you're a beginner or a professional, Matnim has a plan to help you create stunning mathematical animations. Get started now!
            </p>
            <a
              href="/signup"
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-xl hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 flex items-center justify-center mx-auto"
              aria-label="Start free trial with Matnim"
            >
              Get Started
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}