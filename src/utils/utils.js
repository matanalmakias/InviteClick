import { v4 } from "uuid";
// export const serverUrl = `http://localhost:3001`;
export const serverUrl = `https://miricatering.herokuapp.com`;

export const useSocket = (socket) => {
  socket.emit("update");
};
export const dayList = [
  "יום ראשון",
  "יום שני",
  "יום שלישי",
  "יום רביעי",
  "יום חמישי",
];

export const shekelSymbol = String.fromCharCode(8362);

export const trainingList = [
  {
    id: 1,
    date: new Date("2023-04-15T10:00:00"),
    title: "Introduction to Python",
    duration: 90,
    user: null,
  },
  {
    id: 2,
    date: new Date("2023-04-20T14:00:00"),
    title: "Web Development Basics",
    duration: 120,
    user: `userId`,
  },
  {
    id: 3,
    date: new Date("2023-04-25T09:30:00"),
    title: "Data Analysis with Pandas",
    duration: 90,
    user: null,
  },
  {
    id: 4,
    date: new Date("2023-04-30T13:00:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: `userId`,
  },
  {
    id: 5,
    date: new Date("2023-05-05T15:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: `userId`,
  },
  {
    id: 6,
    date: new Date("2023-05-05T12:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: null,
  },
  {
    id: 7,
    date: new Date("2023-05-05T17:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: `userId`,
  },
  {
    id: 8,
    date: new Date("2023-05-05T18:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: null,
  },
  {
    id: 9,
    date: new Date("2023-05-05T18:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: null,
  },
  {
    id: 10,
    date: new Date("2023-05-06T18:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: null,
  },
  {
    id: 11,

    date: new Date("2023-05-07T18:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: null,
  },
  {
    id: 12,

    date: new Date("2023-05-07T13:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: `userId`,
  },
  {
    id: 13,

    date: new Date("2023-05-06T14:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: `userId`,
  },
  {
    id: 14,

    date: new Date("2023-05-09T15:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: null,
  },
  {
    id: 15,

    date: new Date("2023-05-10T17:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: `userId` || null,
  },
  {
    id: 16,

    date: new Date("2023-05-10T15:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: null,
  },
  {
    id: 17,

    date: new Date("2023-04-02T15:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: `userId`,
  },
  {
    id: 18,

    date: new Date("2023-04-04T15:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: `userId`,
  },
  {
    id: 19,

    date: new Date("2023-05-10T15:30:00"),
    title: "Machine Learning Fundamentals",
    duration: 180,
    user: `userId`,
  },
];
const today = new Date();
export const dates = Array.from({ length: 7 }, (_, i) => {
  const date = new Date(today);
  date.setDate(today.getDate() + i);
  return date;
});
export const user = {
  id: 1,
  phone: `0526757706`,
  schudeledTrainings: [
    {
      id: v4(),

      date: new Date("2023-05-10T15:30:00"),
      title: "Machine Learning Fundamentals",
      duration: 180,
      user: `userId`,
    },
    {
      id: v4(),

      date: new Date("2023-05-10T15:30:00"),
      title: "Machine Learning Fundamentals",
      duration: 180,
      user: `userId`,
    },
    {
      id: v4(),

      date: new Date("2023-05-10T15:30:00"),
      title: "Machine Learning Fundamentals",
      duration: 180,
      user: `userId`,
    },
    {
      id: v4(),

      date: new Date("2023-05-10T15:30:00"),
      title: "Machine Learning Fundamentals",
      duration: 180,
      user: `userId`,
    },
  ],
};
