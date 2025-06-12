import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slots = [
    {
      id: 1,
      name: "Базовый слот",
      price: "150₽",
      features: ["Доступ к серверу", "Базовые динозавры"],
      status: "available",
    },
    {
      id: 2,
      name: "VIP слот",
      price: "300₽",
      features: ["Все динозавры", "Приоритетная очередь", "VIP чат"],
      status: "available",
    },
    {
      id: 3,
      name: "Premium слот",
      price: "500₽",
      features: ["Эксклюзивные виды", "Личный остров", "Все привилегии"],
      status: "occupied",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-emerald-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div
            className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <div className="mb-8">
              <Icon
                name="Zap"
                size={80}
                className="text-emerald-400 mx-auto mb-4 animate-pulse"
              />
            </div>

            <h1 className="text-6xl font-bold mb-6 text-white">
              ENERGIE SURVIVAL
            </h1>
            <h2 className="text-3xl font-semibold mb-4 text-emerald-400">
              THE ISLE EVRIMA
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Выживи в мире доисторических хищников. Стань частью экосистемы или
              погибни в когтях древних существ.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <Icon name="Play" size={20} />
                Играть сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black"
              >
                <Icon name="Info" size={20} />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Server Info */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="text-center">
              <Icon
                name="Users"
                size={40}
                className="text-emerald-400 mx-auto mb-2"
              />
              <CardTitle className="text-white">Онлайн игроки</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold text-emerald-400">47/100</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="text-center">
              <Icon
                name="Globe"
                size={40}
                className="text-emerald-400 mx-auto mb-2"
              />
              <CardTitle className="text-white">Регион</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl text-gray-300">Санкт-Петербург #15 Intel</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="text-center">
              <Icon
                name="Activity"
                size={40}
                className="text-emerald-400 mx-auto mb-2"
              />
              <CardTitle className="text-white">Аптайм</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-xl text-emerald-400">99.7%</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Slots Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Слоты для покупки
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {slots.map((slot) => (
              <Card
                key={slot.id}
                className="bg-slate-900 border-slate-600 hover:border-emerald-500 transition-colors"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white">{slot.name}</CardTitle>
                    <Badge
                      variant={
                        slot.status === "available" ? "default" : "destructive"
                      }
                    >
                      {slot.status === "available" ? "Доступен" : "Занят"}
                    </Badge>
                  </div>
                  <CardDescription className="text-emerald-400 text-2xl font-bold">
                    {slot.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {slot.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-gray-300 flex items-center"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-emerald-400 mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    disabled={slot.status === "occupied"}
                    variant={
                      slot.status === "available" ? "default" : "secondary"
                    }
                  >
                    {slot.status === "available" ? "Купить слот" : "Недоступен"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Правила сервера
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-emerald-400 flex items-center">
                <Icon name="Shield" size={24} className="mr-2" />
                Основные правила
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>• Запрещено использование читов и багов</p>
              <p>• Уважайте других игроков</p>
              <p>• Не спамьте в чате</p>
              <p>• Играйте честно и по ролям</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-emerald-400 flex items-center">
                <Icon name="Gamepad2" size={24} className="mr-2" />
                Игровые особенности
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p>• Реалистичная экосистема</p>
              <p>• Система роста динозавров</p>
              <p>• Смена дня и ночи</p>
              <p>• Погодные условия</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 ENERGIE SURVIVAL THE ISLE EVRIMA. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
