import styled from "styled-components/native";
import { Color } from "../../utils/constants";
import { Animated, FlatList } from "react-native";

export const Header = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Color.PRIMARY_PURPLE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  flex-direction: row;
  position: absolute;
  zindex: -1;
`;

export const UserImage = styled.Image`
  border-radius: 9999999px;
`;

export const MainWrapper = styled(Animated.View)`
  display: flex;
  flex-direction: row;
  min-height: 100%;
  width: auto;
  min-width: 100%;
`;

export const HomeWrapper = styled.TouchableWithoutFeedback`
  min-height: 100%;
  width: 100%;
`;

export const EventListWrapper = styled.View`
  background-color: ${Color.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  z-index: 999;
  height: 100%;
  padding-top: 30px;
`;
