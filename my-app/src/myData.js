import faker from "faker";

export function makeOneNews() {
  return {
    id: faker.datatype.uuid(),
    title: faker.random.words(2),
    text: faker.random.words(4),
    description: faker.random.words(16),
    photo: faker.image.image(),
    hashTags: Array(3)
      .fill(null)
      .map(() => {
        return (TAGS[getRandomInt(0, TAGS.length)].name);
      }),
    author: AUTHORS[getRandomInt(0, AUTHORS.length)].name,
  }
}

export function makeNews(numberOfNews) {
  return Array(numberOfNews)
    .fill(null)
    .map(() => {
      return makeOneNews();
    });
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

export const TAGS = [
  {
    name: "#crime",
    label: "Criminal News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#economy",
    label: "Economy News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#society",
    label: "Society News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#COVID-19",
    label: "Health News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#sport",
    label: "Sport News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#music",
    label: "Music News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#Odesa",
    label: "Odesa News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#technology",
    label: "Technology News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#science",
    label: "Science News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#cars",
    label: "Cars News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#health",
    label: "Health News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#show-biz",
    label: "Show-biz News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#abroad",
    label: "Abroad News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#curiosities",
    label: "curiosities News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#photo report",
    label: "Photo report News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#video",
    label: "Video News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#weather",
    label: "Weather News",
    id: faker.datatype.uuid(),
  },
  {
    name: "#Kyiv",
    label: "Kyiv News",
    id: faker.datatype.uuid(),
  },
];

export const AUTHORS = [
  {
    name: "Andrew Rayel",
    direction: "crime",
  },
  {
    name: "John Newman",
    direction: "economy",
  },
  {
    name: "Sarah Conor",
    direction: "society",
  },
  {
    name: "Fill Jones",
    direction: "Football",
  },
  {
    name: "Anna Sedokova",
    direction: "Fashion",
  },
  {
    name: "Boris Burda",
    direction: "Other",
  },
  {
    name: "Alyona Pechenyuk",
    direction: "Other",
  },
];
