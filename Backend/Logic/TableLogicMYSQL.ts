import dal_mysql from "../Utils/dal_mysql";

const createUsersTable = () => {
  const SQLcommand = `
    CREATE TABLE IF NOT EXISTS vacation.users (
    userKey INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(45) NOT NULL,
    lastName VARCHAR(45) NOT NULL,
    email VARCHAR(90) NOT NULL UNIQUE,
    password VARCHAR(45) NOT NULL,
    admin TINYINT NOT NULL,
    PRIMARY KEY (userKey));`
  dal_mysql.execute(SQLcommand);
};

const createVacationsTable = () => {
  const SQLcommand = `
  CREATE TABLE IF NOT EXISTS vacation.vacations (
    vacationKey INT NOT NULL AUTO_INCREMENT,
    vacationDestiny VARCHAR(45) NOT NULL,
    vacationDesc VARCHAR(180) NOT NULL,
    vacationStart VARCHAR(45) NOT NULL,
    vacationEnd VARCHAR(45) NOT NULL,
    price INT NOT NULL,
    photoFile VARCHAR(90) NOT NULL,
    PRIMARY KEY (vacationKey));`
  dal_mysql.execute(SQLcommand)
}

export default {
  createUsersTable,
  createVacationsTable,
}
