class Zodiac {
    constructor(begin, end, text){
        this.begin = begin;
        this.end = end;
        this.text = text
    }
}
const Aries = new Zodiac (
    new Date(0,2,21),
    new Date(0,3,20),
    "Овен (21 марта - 20 апреля)"
);

const Scorpion = new Zodiac(
    new Date(0,9, 24),
    new Date(0,10,22),
    "Скорпион (24 октября- 22 ноября)"
);
const Taurus = new Zodiac(
    new Date(0, 3,21),
    new Date(0, 4,20),
    "Телец (21 апреля - 20 мая)"
);
const Gemini = new Zodiac(
    new Date(0, 4, 21),
    new Date(0, 5, 21),
    "Близнецы (21 мая - 21 июня)"
);
const Сrayfish = new Zodiac(
    new Date(0, 5, 22),
    new Date(0, 6,22),
    "Рак (22 июня - 22 июля)"
);
const Lion = new Zodiac(
    new Date (0,6,23),
    new Date(0,7, 23),
    "Лев (23 июль - 23 августа)"
);
const Virgo = new Zodiac(
    new Date(0, 7, 24),
    new Date(0, 8,22),
    "Дева (24 август-22 сентябрь)"
);
const Libra = new Zodiac(
    new Date(0, 8, 23),
    new Date (0, 9, 23),
    " Весы (23 сентябрь - 23 октябрь)"
);
  const Sagittarius = new Zodiac(
      new Date(0, 10,23),
      new Date (0, 11, 21),
      "Стрельцы (23 ноября - 21 декабря) "
  );
  const Capricorn = new Zodiac(
      new Date(0, 11,22),
      new Date(0, 11,31),
      "Козерог (22 декабрь - 19 январь)"
  );
  const Capricorn2 = new Zodiac(
      new Date(0,0,1),
      new Date(0, 0, 19),
      "Козерог (22 декабря - 19 января)"
  );

  const Aquarius = new Zodiac(
      new Date(0, 0, 20),
      new Date(0,1, 18),
      "Водолей (20 января - 18 февраля)"
  );
  const Pisces = new Zodiac(
      new Date(0, 1, 19),
      new Date(0, 2, 20),
      "Рыбы (19 февраля - 20 марта)"
  );
  const zodiacs = [
    Aries, Taurus, Gemini, Сrayfish, Lion, Virgo, Libra, Scorpion, Sagittarius, Capricorn, Capricorn2, Aquarius, Pisces
  ];

  export function findZodiac(arr) {
      for (const zodiac of zodiacs) {
          if (zodiac.begin <= arr && arr <= zodiac.end)
              return zodiac.text;
      }
  }