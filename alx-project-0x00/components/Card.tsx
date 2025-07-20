// components/Card.tsx
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="p-6 border shadow-lg rounded-lg max-w-sm text-center">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
