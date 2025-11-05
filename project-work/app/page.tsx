import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SlidingQuotes } from "@/components/SlidingQuotes";
import { TypingAnimation } from "@/components/TypingAnimation";

const features = [
  {
    title: "Massive Savings",
    description:
      "Reduce your monthly electricity bills and save money for years to come. Solar power offers a significant return on investment.",
  },
  {
    title: "Energy Independence",
    description:
      "Generate your own clean energy and reduce your reliance on the grid. Enjoy peace of mind during power outages.",
  },
  {
    title: "Free Consultation and Custom Design",
    description:
      "Our experts provide a free consultation to assess your needs and design a custom solar solution that's perfect for your home or business.",
  },
  {
    title: "Seamless Integration",
    description:
      "We handle the entire installation process, ensuring a seamless and hassle-free transition to solar power.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-green-50/50 font-sans">
      <div className="mx-auto w-full max-w-7xl">
        <header className="relative h-[500px] w-full overflow-hidden rounded-b-3xl">
          <Image
            src="/solar-field-image.webp"
            alt="Solar field"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800/95 via-40% to-transparent to-75%" />
          <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-16">
            <div className="max-w-2xl">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
                  Sharda Construction
                </h1>
              </div>
              <div className="mt-8">
                <TypingAnimation />
              </div>
            </div>
          </div>
        </header>

        <div className="py-8">
          <SlidingQuotes />
        </div>

        <main className="container mx-auto flex-grow px-4 py-16">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-8 text-3xl font-bold text-green-800">
                Why Go Solar With Us?
              </h2>
              <ul className="space-y-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <svg
                      className="mt-1 h-6 w-6 flex-shrink-0 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-green-900">
                    Ready to Make the Switch?
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-4">
                  <p className="text-center text-gray-600">
                    Get a free, no-obligation quote from our solar experts.
                  </p>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <footer className="bg-green-100/50 py-8">
          <div className="container mx-auto px-4">
            <h3 className="mb-6 text-center text-2xl font-bold text-green-800">
              Our Community Partners
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <Image
                src="/adani-power-logo.webp"
                alt="Adani Power Logo"
                width={120}
                height={60}
                className="object-contain"
              />
              <Image
                src="/tata-power-logo.png"
                alt="Tata Power Logo"
                width={120}
                height={60}
                className="object-contain"
              />
              <Image
                src="/utl-solar-logo.webp"
                alt="UTL Solar Logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
