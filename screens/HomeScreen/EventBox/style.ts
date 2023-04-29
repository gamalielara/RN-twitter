import styled from "styled-components/native";
import { Color, TextColor } from "../../../utils/constants";

interface IActionButtonText {
  isBoldify?: boolean;
}

export const EventBoxWrapper = styled.TouchableHighlight`
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom-color: ${Color.GRAY};
  border-bottom-width: 1px;
  box-sizing: border-box;
`;

export const EventHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;

export const UserProfileBox = styled.View`
  display: flex;
  gap: 5;
  flex-direction: row;
  align-items: center;
`;

export const UserProfileImage = styled.Image`
  width: 25px;
  aspect-ratio: 1;
  border-radius: 999999;
`;

export const UsernameText = styled.Text`
  font-size: 16px;
`;

export const ChannelBox = styled.TouchableOpacity`
  border-radius: 15px;
  border: 1px solid ${Color.PRIMARY_PURPLE};
  padding: 5px 10px;
`;

export const ChannelText = styled.Text`
  font-size: 12px;
  color: ${TextColor.TEXT_PRIMARY};
`;

export const EventTitleText = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const EventDetailBody = styled.View`
  margin-top: 10px;
  display: flex;
  gap: 20px;
  width: 100%;
  flex-direction: row;
`;

export const EventDetailText = styled.Text`
  min-width: 0;
  flex: 4;
  font-size: 16px;
`;

export const EventThumbnailImage = styled.Image`
  border-radius: 10px;
  width: 64px;
  aspect-ratio: 1;
  object-fit: cover;
  flex: 1;
`;

export const ActionButtonsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 30;
  margin-top: 10px;
  align-items: center;
  width: 50%;
`;

export const ActionButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  gap: 5;
  align-items: center;
`;

export const ActionButtonText = styled.Text<IActionButtonText>`
  color: ${(props) =>
    props.isBoldify ? TextColor.TEXT_PRIMARY : TextColor.SECONDARY_TEXT};
  font-size: 16px;
`;
