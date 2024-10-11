import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full flex items-center flex-col mt-16 sm:mt-24">
      <div className="max-w-3xl text-center">
        <p className="text-6xl font-medium text-center">
          This is the <span className="font-bold">Starter Kit</span> for your
          next SaaS product
        </p>
        <p className="mt-6 text-lg opacity-80">
          Forget about setting up your project from scratch. This kit has all
          you need to get started with your next SaaS product.
        </p>
        <Button className="mt-6">Get Started</Button>
      </div>
      <div className="mt-16 w-full flex flex-col items-center">
        <Card className="relative w-full aspect-video overflow-clip">
          <Image src={"/image.png"} alt="product-image" fill />
        </Card>
      </div>
    </div>
  );
}
