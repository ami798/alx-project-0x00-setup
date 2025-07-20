import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

const Landing = () => {
  return (
    <main className="p-8 space-y-8">
      {/* Buttons section (keep as is) */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Buttons</h1>
        <div className="flex gap-4">
          <Button title="Small Rounded" styles="rounded-sm bg-blue-500 text-white px-4 py-2" />
          <Button title="Medium Rounded" styles="rounded-md bg-green-500 text-white px-4 py-2" />
          <Button title="Large Rounded" styles="rounded-lg bg-purple-600 text-white px-4 py-2" />
          <Button title="Full Rounded" styles="rounded-full bg-red-500 text-white px-4 py-2" />
        </div>
      </section>

      {/* Pill component section */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Pill Component</h1>
        <Pill title="Sample Pill" />
      </section>

      {/* Card component section - MAKE SURE THIS EXISTS */}
      <section>
        <h1 className="text-3xl font-bold mb-4">Card Component</h1>
        <Card
          title="Card Title"
          description="This is a sample card description."
          buttonText="Learn More"
        />
      </section>
    </main>
  );
};

export default Landing;
