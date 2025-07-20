// pages/landing.tsx
import Card from "@/components/Card";
import Pill from "@/components/Pill";
import Button from "@/components/Button";

export default function Landing() {
  return (
    <main className="p-8 space-y-8">
      {/* Cards */}
      <Card
        title="Card Title"
        description="This is a description of the card. It uses rounded-lg."
      />

      {/* Pills */}
      <Pill title="Example Pill" />

      {/* Buttons with different rounded styles */}
      <div className="flex gap-4">
        <Button title="Small Rounded" styles="rounded-sm bg-blue-500 text-white px-4 py-2" />
        <Button title="Medium Rounded" styles="rounded-md bg-green-500 text-white px-4 py-2" />
        <Button title="Full Rounded" styles="rounded-full bg-red-500 text-white px-4 py-2" />
      </div>
    </main>
  );
}
