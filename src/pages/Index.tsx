import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <div
        className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <div className="mb-8">
          <Icon
            name="Rocket"
            size={80}
            className="text-white mx-auto mb-4 animate-pulse"
          />
        </div>

        <h1 className="text-5xl font-bold mb-4 text-white">Дарова! 🚀</h1>

        <p className="text-xl text-purple-100 mb-8 max-w-md mx-auto">
          Рад тебя видеть, космонавт! Готов к новым приключениям в разработке?
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-200 hover:scale-105 transform">
            Поехали! 🌟
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
            Узнать больше
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
