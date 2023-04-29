export interface IEvent {
  id: string;
  channelName: string;
  title: string;
  date: Date;
  content: string;
  imageCover?: string;
  likesCount: number;
  goingCount: number;
  isGoing: boolean;
  isLiked: boolean;
  user: string;
}

export interface IEventDetail extends IEvent {
  eventImages: string[];
  desc: string;
  dateStarted: Date;
  dateFinished: Date;
  location: string;
  userLikesThisEvent: string[];
  userGoingThisEvent: string[];
  comments: {
    id: string;
    userID: string;
    body: string;
  }[];
}

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  userProfileImage: string;
}
