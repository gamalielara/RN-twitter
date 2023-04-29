import { Text, View } from "react-native";
import {
  ActionButton,
  ActionButtonText,
  ActionButtonsWrapper,
  ChannelBox,
  ChannelText,
  EventBoxWrapper,
  EventDetailBody,
  EventDetailText,
  EventHeader,
  EventThumbnailImage,
  EventTitleText,
  UserProfileBox,
  UserProfileImage,
  UsernameText,
} from "./style";
import { LikeIconOutlined } from "../../../assets/svg/LikeIcon";
import { IEvent, IUser } from "../../../utils/interface";
import { CheckIconOutlined } from "../../../assets/svg/CheckIcon";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../modules/user/context";

export default ({ event }: { event: IEvent }) => {
  const [uname, setUname] = useState<string | null>(null);
  const [userPic, setUserPic] = useState<string | null>(null);

  const {
    channelName,
    title,
    content,
    imageCover,
    likesCount,
    goingCount,
    isLiked,
    isGoing,
    user,
  } = event;

  const { users } = useContext(UserContext);

  const thisUser = (users as IUser[]).find((u) => u.id === user);

  useEffect(() => {
    setUname(thisUser?.username ?? null);
    setUserPic(thisUser?.userProfileImage ?? null);
  }, [thisUser]);

  return (
    <EventBoxWrapper>
      <View>
        <EventHeader>
          <UserProfileBox>
            <UserProfileImage source={{ uri: userPic as string }} />
            <UsernameText>{uname?.toLowerCase()}</UsernameText>
          </UserProfileBox>
          <ChannelBox>
            <ChannelText>{channelName}</ChannelText>
          </ChannelBox>
        </EventHeader>
        <View style={{ marginTop: 10 }}>
          <EventTitleText numberOfLines={2}>{title}</EventTitleText>
          <EventDetailBody>
            <EventDetailText>{content.slice(0, 300)}</EventDetailText>
            <EventThumbnailImage source={{ uri: imageCover }} />
          </EventDetailBody>
        </View>
        <ActionButtonsWrapper>
          <ActionButton>
            <CheckIconOutlined />
            <ActionButtonText>{goingCount} Going</ActionButtonText>
          </ActionButton>

          <ActionButton>
            <LikeIconOutlined />
            <ActionButtonText>{likesCount} Likes</ActionButtonText>
          </ActionButton>
        </ActionButtonsWrapper>
      </View>
    </EventBoxWrapper>
  );
};
