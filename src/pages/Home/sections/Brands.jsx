"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Component() {
  return (
    <section className="w-full py-12 bg-white-500">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-8">
          GLOBEFLIGHT KENYA NETWORKS
        </h1>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="bg-sky-500 p-8 flex items-center">
            <p className="text-2xl text-white leading-relaxed">
              We work with an international and reliable network of global agents.
              They facilitate our international shipping.
            </p>
          </Card>
          <Card className="bg-green-600 p-8 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/infinite.png"
                alt="Infinite Connection"
                className="bg-white p-2 rounded"
                height={100}
                width={200}
              />
              <img
                src="/globalink.png"
                alt="Globalink"
                className="bg-white p-2 rounded"
                height={100}
                width={200}
              />
            </div>
          </Card>
        </div>
        <div className="flex justify-center mt-8">
          <Button
            className="bg-green-500 hover:bg-red-600 text-white px-8 py-2 rounded-md text-lg"
          >
            Join Our Networks Today
          </Button>
        </div>
      </div>
    </section>
  );
}
