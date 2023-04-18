import { User } from "../Models/user";
import dalMySQL from "../Utils/dal_mysql";

const addUser = async (newUser: User) => {
  const SQLcommand = `
    INSERT INTO vacation.users 
    (firstName, lastName, email, password, admin)
    VALUES ('${newUser.firstName}', '${newUser.lastName}', 
    '${newUser.email}', '${newUser.password}', '${newUser.admin}');`;
  dalMySQL.execute(SQLcommand);
};

export default {
  addUser,
};
