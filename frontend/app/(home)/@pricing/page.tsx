import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function PricingSection() {
  return (
    <div className="mt-16 scroll-mt-16">
      <p className="text-4xl font-semibold mt-2">Pricing</p>
      <div className="flex justify-center mt-12">
        <Card className="w-80">
          <CardHeader className="flex justify-center w-full text-center">
            <p className="text-lg">Starter Plan</p>
            <p className="text-3xl font-bold text-primary">FREE</p>
          </CardHeader>
          <CardContent className="">
            <p className="">
              Start your link organizing journey with our free plan
            </p>
            <ul className="list-inside list-disc my-8">
              <li>Unlimited Public Pages</li>
              <li>Unlimited Groups</li>
              <li>Unlimited Links</li>
            </ul>
            <SignedIn>
              <Link
                href="/dashboard"
                className={cn(buttonVariants({ variant: "default" }), "w-full")}
              >
                Go to Dashboard
              </Link>
            </SignedIn>
            <SignedOut>
              <SignUpButton>
                <Button className="w-full">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
