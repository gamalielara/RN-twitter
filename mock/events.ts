import { faker } from "@faker-js/faker";
import { user } from "./users";
import { IEvent } from "../utils/interface";

const userListsID = user.map((user) => user.id);

const generateListsOfUsers = (numberOfLikes: number) => {
  const userLikesThisEvent = [];
  for (let i = 0; i < numberOfLikes; i++) {
    const index = faker.datatype.number(userListsID.length - 1);
    const user = userListsID[index];
    userLikesThisEvent.push(user);
  }
  return Array.from(new Set(userLikesThisEvent));
};

const generateComments = (numberOfComments: number) => {
  /* 
    {
      id: "....",
      userID: "....", --> foreign key
      body: "....",
    }
  */
  const comments = [];
  for (let i = 0; i < numberOfComments; i++) {
    const i = faker.datatype.number(userListsID.length - 1);
    const comment = {
      id: faker.helpers.unique(faker.database.mongodbObjectId),
      userID: userListsID[i],
      body: faker.lorem.sentences(),
    };
    comments.push(comment);
  }
  return comments;
};

export const generateEvents = () => {
  const CHANNELNAMES = [
    "All",
    "Channel 1",
    "Channel 2",
    "Channel 3",
    "Short",
    "Channel 4",
    "Channel 5",
    "Channel 6",
    "Short",
    "Channel 7",
    "Channel 8",
    "Channel 9",
    "Channel Long Name",
  ];

  const DUMMYDATA = [];

  for (let i = 0; i < 10; i++) {
    const randomChannelIndex = faker.datatype.number(CHANNELNAMES.length - 1);
    const thisUser = userListsID[faker.datatype.number(userListsID.length - 1)];
    const userLikesThisEvent = generateListsOfUsers(
      faker.datatype.number(userListsID.length)
    );
    const userGoingThisEvent = generateListsOfUsers(
      faker.datatype.number(userListsID.length)
    );

    const data = {
      id: faker.database.mongodbObjectId(),
      channelName: CHANNELNAMES[randomChannelIndex],
      title: faker.lorem.sentence(5),
      date: faker.date.between(
        "2020-01-01T00:00:00.000Z",
        "2023-01-01T00:00:00.000Z"
      ),
      content: faker.lorem.paragraph(),
      desc: faker.lorem.paragraph(10),
      imageCover: faker.image.image(640, 480, true),
      likesCount: userLikesThisEvent.length,
      goingCount: userGoingThisEvent.length,
      isGoing: false,
      isLiked: false,
      user: thisUser,
      userLikesThisEvent,
      userGoingThisEvent,
      eventImages: faker.datatype
        .array(faker.datatype.number({ min: 1, max: 5 }))
        .map((i: any) => (i = faker.image.image(640, 480, false))),
      comments: generateComments(faker.datatype.number(10)),
    };

    DUMMYDATA.push(data);
  }
  return DUMMYDATA;
};

export const events = generateEvents();
