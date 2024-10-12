import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function PricingSection() {
  return (
    <div className="mt-16">
      <p className="text-4xl font-semibold mt-2">Pricing</p>
      <div className="flex justify-center mt-6">
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
            <SignUpButton>
              <Button className="w-full">Sign Up</Button>
            </SignUpButton>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
