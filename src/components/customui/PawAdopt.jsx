import { CardContent, CardHeader, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import milo from "../../assets/AdoptMilo.jpeg";
import daisy from "../../assets/AdoptDaisy.jpeg";
import buddy from "../../assets/AdoptBuddy.jpeg";
export default function PawAdopt() {
  return (
    <>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-[#F9F9F9] dark:bg-gray-800"
        id="adopt"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#FFF0F0] px-3 py-1 text-sm dark:bg-gray-700">
                Adopt a Pet
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Find Your Furry Friend
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Browse our selection of adoptable pets and give a loving home to
                a deserving animal in need.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
            <Card className="rounded-xl overflow-hidden shadow-md">
              <CardContent className="p-0">
                <img
                  alt="Pet"
                  className="aspect-video object-cover"
                  height="300"
                  src={milo}
                  width="400"
                />
              </CardContent>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Buddy</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      2-year-old Labrador Retriever
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Adopt
                  </Button>
                </div>
              </CardHeader>
            </Card>
            <Card className="rounded-xl overflow-hidden shadow-md">
              <CardContent className="p-0">
                <img
                  alt="Pet"
                  className="aspect-video object-cover"
                  height="300"
                  src={daisy}
                  width="400"
                />
              </CardContent>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Daisy</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      4-year-old Domestic Shorthair Cat
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Adopt
                  </Button>
                </div>
              </CardHeader>
            </Card>
            <Card className="rounded-xl overflow-hidden shadow-md">
              <CardContent className="p-0">
                <img
                  alt="Pet"
                  className="aspect-video object-cover"
                  height="300"
                  src={buddy}
                  width="400"
                />
              </CardContent>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Milo</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      1-year-old Mixed Breed
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    <a href="https://www.facebook.com/groups/1608648052799004/">
                      Adopt
                    </a>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            <a
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111827] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#FF6B6B] dark:text-gray-900 dark:hover:bg-[#FF6B6B]/90 dark:focus-visible:ring-[#FF6B6B]"
              href="https://www.facebook.com/groups/1608648052799004/"
            >
              View All Pets
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
