import { faker } from "@faker-js/faker";
import { IUser } from "../utils/interface";

const NUMBER_OF_USERS = faker.datatype.number(50);
const USER_PROFILES: any[] = [];

const generateUser = (): IUser[] => {
  for (let i = 0; i < NUMBER_OF_USERS - 1; i++) {
    const data = {
      id: faker.helpers.unique(faker.database.mongodbObjectId),
      name: faker.name.findName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      userProfileImage: faker.image.people(640, 480, true),
    };
    USER_PROFILES.push(data);
  }
  return USER_PROFILES;
};

const generateThisUser = () => {
  return {
    id: faker.helpers.unique(faker.database.mongodbObjectId),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    userProfileImage: faker.image.people(640, 480, true),
  };
};

export const user = generateUser();
