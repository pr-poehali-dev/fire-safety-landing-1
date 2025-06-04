import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-slate-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                Защитите свой бизнес от
                <span className="text-red-500 block">штрафов МЧС</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Бесплатный аудит систем пожарной безопасности поможет избежать
                штрафов до 800 000 рублей и остановки деятельности
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                <Icon name="Shield" className="mr-2" />
                Получить бесплатный аудит
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-slate-300"
              >
                <Icon name="Phone" className="mr-2" />
                Консультация
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>Аудит за 1 день</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={16} />
                <span>15 лет опыта</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} />
                <span>500+ клиентов</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/files/632a2d43-f7bb-44f7-aaac-569f02b77348.jpg"
                alt="Сотрудники МЧС проводят проверку пожарного оборудования"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Icon
                    name="CheckCircle"
                    className="text-green-600"
                    size={20}
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    Система проверена
                  </p>
                  <p className="text-sm text-slate-500">
                    Соответствует требованиям МЧС
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
