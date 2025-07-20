// components/Pill.tsx
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label }) => {
  return (
    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
      {label}
    </span>
  );
};

export default Pill;
