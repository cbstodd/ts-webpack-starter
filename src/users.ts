export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public updatedAt: number
  ) {}
}

const currentDate: number = Date.now();
function createRandomDate(maxNum: number = 100): number {
  return (Date.now() - Math.floor((Math.random() * maxNum) + 1));
}

export const users: User[] = [
  {
    firstName: "Colin",
    lastName: "Stodd",
    age: 41,
    updatedAt: currentDate
  },
  {
    firstName: "Henry",
    lastName: "Rothchild",
    age: 40,
    updatedAt: createRandomDate()
  },
  {
    firstName: "Gunner",
    lastName: "Hathaway",
    age: 69,
    updatedAt: createRandomDate(1000)
  },
];


export const etone: string[] = ['Andy', 'Colin', 'Marshall', 'Rick', 'Tommy'];


module.exports = { User, users, etone };