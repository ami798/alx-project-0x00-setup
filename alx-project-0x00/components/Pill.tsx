import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
      {title}
    </span>
  );
};

export default Pill;
