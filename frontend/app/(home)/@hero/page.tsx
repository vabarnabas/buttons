import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full flex items-center flex-col">
      <div className="max-w-3xl text-center">
        <p className="mb-4 text-muted-foreground text-lg">Links & More</p>
        <p className="text-6xl font-medium text-center">
          This is the <span className="font-bold">Link Organizer</span> for your
          needs
        </p>
        <p className="mt-6 text-lg opacity-80">
          Forget about collecting links in notes or bookmarks. Here you can
          organize everything neatly in pages and groups, and even share them.
        </p>
        <Button className="mt-6">Get Started</Button>
      </div>
      <div className="mt-16 w-full flex flex-col items-center">
        <Card className="relative w-full aspect-video overflow-clip">
          <Image
            src={"/image.png"}
            alt="product-image"
            fill
            className="object-contain"
          />
        </Card>
      </div>
    </div>
  );
}
