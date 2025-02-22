interface Plant {
  name: string;
  start_date: Date;
  umidity: number;
  temperature: number;
  light_distance: number;
  water: number;
}

const plants: Plant[] = [
  {
    name: "Tomato",
    start_date: new Date("2024-12-01"),
    umidity: 60,
    temperature: 22,
    light_distance: 30,
    water: 500,
  },
  {
    name: "Basil",
    start_date: new Date("2025-01-15"),
    umidity: 70,
    temperature: 25,
    light_distance: 20,
    water: 300,
  },
  {
    name: "Lettuce",
    start_date: new Date("2025-02-01"),
    umidity: 65,
    temperature: 18,
    light_distance: 25,
    water: 400,
  },
  // {
  //   name: "Pepper",
  //   start_date: new Date("2023-06-10"),
  //   umidity: 55,
  //   temperature: 24,
  //   light_distance: 35,
  //   water: 450,
  // },
  // {
  //   name: "Cucumber",
  //   start_date: new Date("2023-07-01"),
  //   umidity: 75,
  //   temperature: 26,
  //   light_distance: 40,
  //   water: 600,
  // },
];

export default plants;
