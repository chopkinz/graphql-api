const UserList = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    age: 32,
    nationality: "CANADA",
    friends: [
      {
        id: 3,
        name: "Kevin Smith",
        username: "ksmitty",
        age: 55,
        nationality: "INDIA",
        friends: null,
      },
      {
        id: 2,
        name: "Mike Jones",
        username: "mjoness",
        age: 25,
        nationality: "BRAZIL",
      },
    ],
  },
  {
    id: 2,
    name: "Mike Jones",
    username: "mjoness",
    age: 25,
    nationality: "BRAZIL",
    friends: [
      {
        id: 3,
        name: "Kevin Smith",
        username: "ksmitty",
        age: 55,
        nationality: "INDIA",
        friends: null,
      },
      {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        age: 32,
        nationality: "CANADA",
      },
    ],
  },
  {
    id: 3,
    name: "Kevin Smith",
    username: "ksmitty",
    age: 55,
    nationality: "INDIA",
    friends: [
      {
        id: 2,
        name: "Mike Jones",
        username: "mjoness",
        age: 25,
        nationality: "BRAZIL",
      },
      {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        age: 32,
        nationality: "CANADA",
      },
    ],
  },
];

module.exports = { UserList };
