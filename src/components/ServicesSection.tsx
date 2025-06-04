import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Search",
      title: "Бесплатный аудит",
      price: "0 ₽",
      popular: true,
      features: [
        "Проверка всех систем пожарной безопасности",
        "Выявление нарушений и рисков",
        "Подробный отчет с рекомендациями",
        "Консультация специалиста",
        "План устранения нарушений",
      ],
    },
    {
      icon: "Wrench",
      title: "Техническое обслуживание",
      price: "от 15 000 ₽/мес",
      popular: false,
      features: [
        "Регулярное обслуживание систем",
        "Плановые проверки и настройки",
        "Замена расходных материалов",
        "Ведение технической документации",
        "Круглосуточная поддержка",
      ],
    },
    {
      icon: "Hammer",
      title: "Монтаж и ремонт",
      price: "по проекту",
      popular: false,
      features: [
        "Установка новых систем",
        "Модернизация существующих",
        "Аварийный ремонт",
        "Пуско-наладочные работы",
        "Гарантия на все работы",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Полный спектр услуг по системам пожарной безопасности — от
            бесплатного аудита до полного технического обслуживания
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative ${service.popular ? "border-blue-500 shadow-lg scale-105" : "border-slate-200"}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white">
                    <Icon name="Star" size={14} className="mr-1" />
                    Популярно
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon
                    name={service.icon as any}
                    className="text-blue-600"
                    size={32}
                  />
                </div>
                <CardTitle className="text-xl text-slate-800">
                  {service.title}
                </CardTitle>
                <div className="text-3xl font-bold text-blue-600">
                  {service.price}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Icon
                        name="Check"
                        className="text-green-500 mt-0.5 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full mt-6 ${service.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-600 hover:bg-slate-700"}`}
                >
                  {service.popular ? "Получить аудит" : "Узнать подробнее"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
