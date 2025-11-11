import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CircleDollarSign,
  Cog,
  Feather,
  HeartHandshake,
  MessageSquareQuote,
  Rocket,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: <CircleDollarSign className="h-10 w-10 text-green-600" />,
    title: "Massive Savings",
    description:
      "Slash your electricity bills and lock in low energy rates for years. A solar investment pays for itself and then some.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-green-600" />,
    title: "Energy Independence",
    description:
      "Generate your own clean power and break free from the grid's unpredictability. Gain true peace of mind.",
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-green-600" />,
    title: "Free Consultation and Custom Design",
    description:
      "Our experts provide a complimentary, in-depth consultation to design a bespoke solar solution tailored to your exact needs.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-green-600" />,
    title: "Seamless Integration",
    description:
      "We manage the entire process from permitting to activation, ensuring a smooth, hassle-free transition to solar energy.",
  },
];

const processSteps = [
  {
    icon: <MessageSquareQuote className="h-12 w-12 text-green-600" />,
    title: "Consultation",
    description: "We start with a free, no-obligation chat to understand your energy goals.",
  },
  {
    icon: <Feather className="h-12 w-12 text-green-600" />,
    title: "Custom Design",
    description: "Our engineers design a high-efficiency solar system tailored to your property.",
  },
  {
    icon: <Wrench className="h-12 w-12 text-green-600" />,
    title: "Expert Installation",
    description: "Our certified technicians install your system with precision and care.",
  },
  {
    icon: <Cog className="h-12 w-12 text-green-600" />,
    title: "Activation & Support",
    description: "We handle the final activation and provide ongoing support for your peace of mind.",
  },
];

const testimonials = [
  {
    quote: "Sharda Construction transformed our home with a seamless solar installation. Our energy bills have plummeted, and the team was professional from start to finish. Highly recommended!",
    author: "The Patel Family",
    location: "Mumbai, MH",
  },
  {
    quote: "I was hesitant about the initial investment, but the savings are real. The free consultation was incredibly insightful, and the custom design perfectly fits our needs. Thank you!",
    author: "R. Sharma",
    location: "Pune, MH",
  },
  {
    quote: "The entire process was surprisingly easy. Sharda Construction handled everything, and their team was always available to answer my questions. A five-star experience.",
    author: "Anjali Desai",
    location: "Nagpur, MH",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col font-sans overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 animate-gradient-xy" />
      
      {/* Glassmorphism overlay pattern */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="mx-auto w-full max-w-7xl relative">
        <header className="relative w-full py-6 md:py-8 px-2 md:px-4">
          <div className="max-w-5xl mx-auto text-center space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 tracking-tight">
              Sharda Construction
            </h1>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <p className="text-2xl md:text-3xl font-light text-emerald-700">
                Go Solar
              </p>
              <span className="text-2xl md:text-3xl text-green-400">•</span>
              <p className="text-2xl md:text-3xl font-light text-teal-700">
                Get Smarter
              </p>
            </div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto pt-1">
              Pioneering Sustainable Energy Solutions for a Brighter Future
            </p>
          </div>
        </header>

        <main className="container mx-auto flex-grow px-4 py-4">
          {/* Hero Section with Header, Features and Contact Form */}
          <section id="features" className="relative overflow-hidden rounded-3xl bg-white/30 backdrop-blur-sm shadow-2xl border border-white/60 mb-8">
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=900&fit=crop"
              alt="Solar Background"
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0 opacity-20"
              priority
            />
            
            {/* Glassy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/40 via-emerald-50/30 to-teal-50/40 backdrop-blur-[1px]" />
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200/30 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 -left-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-2xl animate-pulse animation-delay-2000" />
            
            <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 p-8 md:p-12">
              {/* Features Column */}
              <div className="flex flex-col justify-center">
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                  Why Go Solar With Us?
                </h2>
                <div className="space-y-5">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/70 backdrop-blur-sm shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                        <div className="scale-75">{feature.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-end">
                <div className="w-full max-w-xs">
                  <div className="rounded-2xl bg-white/70 shadow-xl backdrop-blur-sm border border-white/70 p-6 flex flex-col items-center justify-center">
                    <h3 className="text-center text-xl font-bold text-green-900 mb-2">
                      Ready to Make the Switch?
                    </h3>
                    <p className="text-center text-xs text-gray-600 mb-5 leading-relaxed">
                      Get a free, no-obligation quote from our solar experts.
                    </p>
                    <div className="w-full flex justify-center">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section id="process" className="mb-8 relative">
            <div className="bg-white/30 backdrop-blur-sm rounded-3xl py-10 px-6 lg:px-8 shadow-xl border border-white/60 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-10 -right-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-200/20 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-sm font-semibold leading-7 text-green-600 uppercase tracking-wide">Our Process</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    A Simple Path to Clean Energy
                  </p>
                  <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
                    We've streamlined our process to make your transition to solar smooth and straightforward.
                  </p>
                </div>
                <div className="grid max-w-2xl mx-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
                  {processSteps.map((step, index) => (
                    <div key={step.title} className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                      <div className="relative">
                        {/* Step number badge */}
                        <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-white text-xs font-bold z-20 ring-2 ring-white">
                          {index + 1}
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10">
                          <div className="scale-75">{step.icon}</div>
                        </div>
                      </div>
                      <h3 className="mt-4 text-base font-semibold text-gray-900">{step.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="bg-white/30 backdrop-blur-sm rounded-3xl py-10 px-6 lg:px-8 shadow-xl border border-white/60 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-300/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-300/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-sm font-semibold leading-7 text-green-600 uppercase tracking-wide">Testimonials</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  What Our Customers Are Saying
                </p>
              </div>
              <div className="grid max-w-2xl mx-auto grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.author} className="flex flex-col rounded-2xl bg-white/70 shadow-lg backdrop-blur-sm border border-white/60 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                    <div className="flex-grow p-5">
                      <MessageSquareQuote className="h-7 w-7 text-green-400 mb-3" />
                      <blockquote className="text-sm text-gray-700 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 border-t border-green-100">
                      <p className="font-semibold text-sm text-gray-900">{testimonial.author}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/30 bg-white/30 backdrop-blur-sm py-8 shadow-lg relative mt-8">
          <div className="absolute inset-0 bg-gradient-to-t from-green-50/30 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <h3 className="text-xl font-bold text-green-900">Sharda Construction</h3>
                <p className="mt-1 text-sm text-gray-600">Your trusted partner in solar energy solutions.</p>
              </div>
              <div>
                <h3 className="mb-3 text-base font-semibold text-gray-800">Quick Links</h3>
                <ul className="space-y-1.5">
                  <li><a href="#features" className="text-sm text-gray-600 hover:text-green-700">Features</a></li>
                  <li><a href="#process" className="text-sm text-gray-600 hover:text-green-700">Our Process</a></li>
                  <li><a href="#testimonials" className="text-sm text-gray-600 hover:text-green-700">Testimonials</a></li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-base font-semibold text-gray-800">Our Partners</h3>
                <div className="flex items-center gap-4 flex-wrap">
                  <Image
                    src="/adani-power-logo.webp"
                    alt="Adani Power Logo"
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                  <Image
                    src="/tata-power-logo.png"
                    alt="Tata Power Logo"
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                  <Image
                    src="/utl-solar-logo.webp"
                    alt="UTL Solar Logo"
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} Sharda Construction. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
