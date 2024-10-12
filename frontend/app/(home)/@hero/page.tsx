import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full flex items-center flex-col">
      <div className="max-w-3xl text-center">
        <p className="mb-4 text-muted-foreground text-lg">Links & More</p>
        <p className="md:text-6xl text-5xl font-medium text-center">
          This is the{" "}
          <span className="font-bold text-primary">Link Organizer</span> for
          your needs
        </p>
        <p className="mt-6 md:text-lg opacity-80">
          Forget about collecting links in notes or bookmarks. Here you can
          organize everything neatly in pages and groups, and even share them.
        </p>
        <Button className="mt-6">Get Started</Button>
      </div>
      <div className="mt-16 w-full flex-col items-center hidden md:flex">
        <Card className="relative w-full aspect-video overflow-clip">
          <Image
            src={"/product-light.png"}
            alt="product-image-light"
            fill
            className="object-top object-cover dark:hidden"
          />
          <Image
            src={"/product-dark.png"}
            alt="product-image-dark"
            fill
            className="object-top object-cover hidden dark:block"
          />
        </Card>
      </div>
    </div>
  );
}
