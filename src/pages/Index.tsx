import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Difficulty {
  id: string;
  title: string;
  icon: string;
  color: string;
  details: string[];
}

const difficulties: Difficulty[] = [
  {
    id: 'emotional',
    title: 'Эмоциональные трудности',
    icon: 'Heart',
    color: 'bg-pink-100 hover:bg-pink-200 border-pink-300',
    details: ['Страхи темноты и одиночества', 'Частые капризы', 'Вспышки агрессии', 'Трудности с выражением эмоций']
  },
  {
    id: 'cognitive',
    title: 'Когнитивные трудности',
    icon: 'Brain',
    color: 'bg-purple-100 hover:bg-purple-200 border-purple-300',
    details: ['Рассеянное внимание', 'Трудности с запоминанием', 'Медленное мышление', 'Сложности с логикой']
  },
  {
    id: 'physical',
    title: 'Физические трудности',
    icon: 'Sparkles',
    color: 'bg-blue-100 hover:bg-blue-200 border-blue-300',
    details: ['Слабая мелкая моторика', 'Проблемы с координацией', 'Неуклюжесть движений', 'Трудности с балансом']
  },
  {
    id: 'social',
    title: 'Социальные трудности',
    icon: 'Users',
    color: 'bg-green-100 hover:bg-green-200 border-green-300',
    details: ['Застенчивость', 'Конфликты со сверстниками', 'Трудности адаптации', 'Нежелание делиться']
  },
  {
    id: 'speech',
    title: 'Речевые трудности',
    icon: 'MessageCircle',
    color: 'bg-orange-100 hover:bg-orange-200 border-orange-300',
    details: ['Неправильное произношение', 'Маленький словарный запас', 'Трудности построения фраз', 'Заикание']
  },
  {
    id: 'behavioral',
    title: 'Поведенческие трудности',
    icon: 'AlertCircle',
    color: 'bg-red-100 hover:bg-red-200 border-red-300',
    details: ['Слабый самоконтроль', 'Игнорирование правил', 'Импульсивность', 'Гиперактивность']
  }
];

const Index = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Типовые трудности дошкольного возраста
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Интерактивная карта для понимания особенностей развития детей 3-7 лет
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full animate-pulse-glow -z-10" />
          
          <Card className="max-w-xs mx-auto mb-8 p-6 text-center bg-primary text-primary-foreground shadow-2xl animate-scale-in">
            <Icon name="Baby" size={48} className="mx-auto mb-3" />
            <h2 className="text-2xl font-bold">Дошкольный возраст</h2>
            <p className="text-sm opacity-90 mt-2">3-7 лет</p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {difficulties.map((difficulty, index) => (
              <Card
                key={difficulty.id}
                className={`p-6 cursor-pointer transition-all duration-300 ${difficulty.color} border-2 hover:shadow-xl hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedDifficulty(
                  selectedDifficulty === difficulty.id ? null : difficulty.id
                )}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Icon name={difficulty.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground flex-1">
                    {difficulty.title}
                  </h3>
                  <Icon 
                    name={selectedDifficulty === difficulty.id ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-muted-foreground"
                  />
                </div>

                {selectedDifficulty === difficulty.id && (
                  <div className="mt-4 space-y-2 animate-accordion-down">
                    {difficulty.details.map((detail, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-2 text-sm text-foreground/80 bg-white/60 p-3 rounded-lg"
                      >
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-muted-foreground text-sm animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="mb-2">💡 Нажмите на любую категорию, чтобы узнать подробнее</p>
          <p className="text-xs">Информация носит ознакомительный характер. При возникновении трудностей обратитесь к специалисту.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
