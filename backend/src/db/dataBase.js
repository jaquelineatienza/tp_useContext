import bcrypt from "bcrypt";
export const database = {
  user: [
    {
      id: 1,
      username: "admin",
      password: bcrypt.hashSync("admin", 5),
      role: "admin",
    },
    {
      id: 2,
      username: "user",
      password: bcrypt.hashSync("user", 5),
      role: "user",
    },
    {
      id: 3,
      username: "guest",
      password: bcrypt.hashSync("guest", 5),
      role: "guest",
    },
    {
      id: 4,
      username: "guest2",
      password: bcrypt.hashSync("guest2", 5),
      role: "guest2",
    },
  ],
};
