const { UserList } = require("../FakeData");

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
    user: (_, args) => {
      return UserList.find((user) => user.id === args.id);
    },
  },
};

module.exports = { resolvers };
