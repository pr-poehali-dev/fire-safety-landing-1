import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const RisksSection = () => {
  const risks = [
    {
      icon: "AlertTriangle",
      title: "Штрафы от МЧС",
      amount: "до 800 000 ₽",
      description:
        "Нарушение требований пожарной безопасности влечет крупные штрафы для юридических лиц. При повторных нарушениях сумма увеличивается в 2-3 раза. Дополнительно накладываются штрафы на должностных лиц до 50 000 ₽.",
      color: "text-red-500",
    },
    {
      icon: "Building",
      title: "Приостановка деятельности",
      amount: "до 90 суток",
      description:
        "При серьезных нарушениях МЧС может полностью остановить работу предприятия. Возобновление возможно только после устранения всех нарушений и повторной проверки. Потери прибыли за период простоя не компенсируются.",
      color: "text-orange-500",
    },
    {
      icon: "Flame",
      title: "Ущерб от пожара",
      amount: "до 50 млн ₽",
      description:
        "Неисправные системы не смогут предотвратить или локализовать возгорание. Ущерб включает: уничтожение оборудования, товаров, документов, простой производства, восстановление помещений. Страховые выплаты могут быть существенно снижены из-за нарушений.",
      color: "text-red-600",
    },
    {
      icon: "Scale",
      title: "Уголовная ответственность",
      amount: "до 7 лет",
      description:
        "При пожаре с пострадавшими руководство может понести уголовную ответственность по ст. 219 УК РФ. Наказание включает лишение свободы, крупные штрафы и запрет на занятие определенных должностей. Репутационные потери необратимы.",
      color: "text-red-700",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4">
            <Icon name="AlertCircle" size={16} className="mr-1" />
            Критически важно
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Риски некачественного обслуживания
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Неисправные системы пожарной безопасности — это не просто штрафы,
            это угроза жизни людей и существованию бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {risks.map((risk, index) => (
            <Card
              key={index}
              className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-red-50 ${risk.color}`}>
                      <Icon name={risk.icon as any} size={24} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">
                      {risk.title}
                    </h3>
                    <p className="text-2xl font-bold text-red-600 mb-2">
                      {risk.amount}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {risk.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Icon name="ShieldCheck" className="text-blue-600" size={24} />
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-800">
                  Бесплатный аудит поможет избежать всех рисков
                </p>
                <p className="text-sm text-slate-600">
                  Выявим проблемы до прихода инспектора
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RisksSection;
