import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SlidingQuotes } from "@/components/SlidingQuotes";
import { TypingAnimation } from "@/components/TypingAnimation";
import { ImageCarousel } from "@/components/ImageCarousel";
import {
  Award,
  CheckCircle,
  CircleDollarSign,
  Cog,
  Feather,
  HeartHandshake,
  Leaf,
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
    <div className="flex min-h-screen flex-col bg-gray-50 font-sans">
      <div className="mx-auto w-full max-w-7xl">
        <header className="relative h-[500px] w-full overflow-hidden rounded-b-3xl shadow-2xl">
          <ImageCarousel />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-green-950 via-green-900/80 to-transparent" />
          <div className="relative z-20 flex h-full flex-col justify-center px-6 md:px-12 lg:px-16">
            <div className="max-w-2xl">
              <div className="mb-4">
                <h1 className="text-5xl font-extrabold text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
                  Sharda Construction
                </h1>
              </div>
              <div className="mt-4">
                <TypingAnimation />
              </div>
            </div>
          </div>
        </header>

        <div className="py-12">
          <SlidingQuotes />
        </div>

        <main className="container mx-auto flex-grow px-4 py-16">
          <section id="features" className="grid grid-cols-1 gap-20 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-12 text-4xl font-bold tracking-tight text-green-900 sm:text-5xl">
                Why Go Solar With Us?
              </h2>
              <div className="space-y-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-lg text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md rounded-2xl bg-white/80 shadow-lg backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center text-3xl font-bold text-green-900">
                    Ready to Make the Switch?
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <p className="text-center text-lg text-gray-600">
                    Get a free, no-obligation quote from our solar experts.
                  </p>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="process" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-base font-semibold leading-7 text-green-600">Our Process</h2>
                <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  A Simple Path to Clean Energy
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                  We've streamlined our process to make your transition to solar as smooth and straightforward as possible.
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {processSteps.map((step) => (
                  <div key={step.title} className="flex flex-col items-center text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 ring-8 ring-green-50">
                      {step.icon}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-7 tracking-tight text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-24 sm:py-32 bg-green-50/70 rounded-3xl">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-base font-semibold leading-7 text-green-600">Testimonials</h2>
                <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  What Our Customers Are Saying
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.author} className="flex flex-col rounded-2xl bg-white shadow-md">
                    <CardContent className="flex-grow p-6">
                      <MessageSquareQuote className="h-8 w-8 text-green-200" />
                      <blockquote className="mt-4 text-lg text-gray-700">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                    <div className="rounded-b-2xl bg-gray-50 p-6">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-gray-200 bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-2xl font-bold text-green-900">Sharda Construction</h3>
                <p className="mt-2 text-gray-600">Your trusted partner in solar energy solutions.</p>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-800">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-600 hover:text-green-700">Features</a></li>
                  <li><a href="#process" className="text-gray-600 hover:text-green-700">Our Process</a></li>
                  <li><a href="#testimonials" className="text-gray-600 hover:text-green-700">Testimonials</a></li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-800">Our Partners</h3>
                <div className="flex items-center gap-6">
                  <Image
                    src="/adani-power-logo.webp"
                    alt="Adani Power Logo"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                  <Image
                    src="/tata-power-logo.png"
                    alt="Tata Power Logo"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                  <Image
                    src="/utl-solar-logo.webp"
                    alt="UTL Solar Logo"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-300 pt-8 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} Sharda Construction. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
