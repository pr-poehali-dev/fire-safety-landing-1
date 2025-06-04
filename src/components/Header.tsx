import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Shield" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">
                ПожБезопасность
              </h1>
              <p className="text-xs text-slate-500">
                Системы пожарной безопасности
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#audit"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Аудит
            </a>
            <a
              href="#contacts"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block text-right">
              <p className="text-sm font-semibold text-slate-800">
                +7 (800) 123-45-67
              </p>
              <p className="text-xs text-slate-500">Круглосуточно</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-1" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
