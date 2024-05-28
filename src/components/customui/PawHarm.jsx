import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";

import dogSad from "../../assets/dogSad.jpg";
import poorDog from "../../assets/PoorDoggo.jpeg";
import poorchick from "../../assets/PoorChickens.jpg";

export default function PawHarm() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32" id="learn">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#FFF0F0] px-3 py-1 text-sm dark:bg-gray-700">
                Learn About Animal Cruelty
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                The Harsh Realities
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Educate yourself on the devastating impacts of animal cruelty
                and how you can make a difference.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
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
                    src={dogSad}
                    width={448}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    alt="Pet"
                    className="aspect-video object-cover rounded-md"
                    height={252}
                    src={poorDog}
                    width={448}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    alt="Pet"
                    className="aspect-video object-cover rounded-md"
                    height={252}
                    src={poorchick}
                    width={448}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Animal Consumption</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      The consumption of animals is a practice that raises
                      ethical, environmental, and health concerns. It's
                      important to consider the impact of our dietary choices on
                      animal welfare, biodiversity, and our own well-being.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Animal Skinning for Fashion
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      The fashion industry's use of animal skins often involves
                      practices that are detrimental to animal welfare. It's
                      crucial to consider the ethical implications of our
                      fashion choices and to explore alternatives that are both
                      stylish and cruelty-free.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Stray Animals</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Stray animals are an integral part of our urban and rural
                      landscapes. They often face hardships such as lack of
                      food, shelter, and medical care. Remember, compassion
                      towards all beings is the hallmark of a civilized society.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
