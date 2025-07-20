import Card from "@/components/Card";
import Pill from "@/components/Pill";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center gap-6 text-4xl font-semibold">
      <h1>Airbnb Application Clone system</h1>

      <Card
        title="Welcome to Portafy"
        description="Easily convert your resume into a sleek personal portfolio site with this app."
      />

      <Pill label="React + Next.js" />

      <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">
        Get Started
      </button>
    </main>
  );
};

export default Home;
