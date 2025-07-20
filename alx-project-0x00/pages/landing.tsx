// pages/landing.tsx
import Card from "@/components/Card";
import Pill from "@/components/Pill";
import Button from "@/components/Button";

export default function Landing() {
  return (
    <main className="flex flex-col h-screen justify-center items-center gap-6 text-center">
      <h1 className="text-3xl font-semibold">Welcome to the Landing Page</h1>

      <Card
        title="Portafy System"
        description="Build your resume website instantly!"
      />

      <Pill title="Next.js + Tailwind" />

      <div className="flex gap-3">
        <Button title="Small" styles="rounded-sm" />
        <Button title="Medium" styles="rounded-md" />
        <Button title="Full" styles="rounded-full" />
      </div>
    </main>
  );
}
