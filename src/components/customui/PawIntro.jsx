import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
// import { CardContent, CardHeader, Card } from "@/components/ui/card";

import cutecat1 from "../../assets/CuteCat1.jpg";
import cutecat2 from "../../assets/CuteCat2.jpg";
import cutecat3 from "../../assets/CuteCat3.jpg";
import cutecat4 from "../../assets/CuteCat4.jpg";
import cutecat5 from "../../assets/CuteCat5.jpg";
import cutecat6 from "../../assets/CuteCat6.jpg";

export default function PawIntro() {
  return (
    <>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 dark:bg-gray-800"
        id="about"
      >
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#FFF0F0] px-3 py-1 text-sm dark:bg-gray-700">
                  End Animal Cruelty
                </div>
                <h1 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Paws for a Cause
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join us in our mission to educate and empower people to take
                  action against animal cruelty and provide a safe haven for
                  stray animals.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#1d683c] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#FF6B6B]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6B6B] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#FF6B6B] dark:text-gray-900 dark:hover:bg-[#FF6B6B]/90 dark:focus-visible:ring-[#FF6B6B]"
                  href="#adopt"
                >
                  Adopt a Pet
                </a>
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md border border-[#6bff77] bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-[#FF6B6B] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6B6B] disabled:pointer-events-none disabled:opacity-50 dark:border-[#FF6B6B] dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-[#FF6B6B] dark:focus-visible:ring-[#FF6B6B]"
                  href="#donate"
                >
                  Donate
                </a>
              </div>
            </div>
            <Carousel
              autoPlay
              autoPlayInterval={2000}
              className="w-full max-w-md"
            >
              <CarouselContent>
                <CarouselItem>
                  <img
                    alt="Pet"
                    className="aspect-video object-cover rounded-md"
                    height={252}
                    src={cutecat1}
                    width={448}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    alt="Pet"
                    className="aspect-video object-cover rounded-md"
                    height={252}
                    src={cutecat2}
                    width={448}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    alt="Pet"
                    className="aspect-video object-cover rounded-md"
                    height={252}
                    src={cutecat3}
                    width={448}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    alt="Pet"
                    className="aspect-video object-cover rounded-md"
                    height={252}
                    src={cutecat4}
                    width={448}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    alt="Pet"
                    className="aspect-video object-cover rounded-md"
                    height={252}
                    src={cutecat5}
                    width={448}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    alt="Pet"
                    className="aspect-video object-cover rounded-md"
                    height={252}
                    src={cutecat6}
                    width={448}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
