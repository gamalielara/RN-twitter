import styled from "styled-components/native";
import { Color, TextColor } from "../../utils/constants";
import { PrimaryText } from "../../utils/globalStyles";

export const LoginScreenBackgroundImage = styled.Image`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index; 99
`;

export const LoginViewContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Color.PRIMARY_PURPLE};
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.85;
  z-index: 99999;
`;

export const MainContainer = styled.View`
  width: 100%
  z-index: 999999999;
`;

export const LoginTitleText = styled(PrimaryText)`
  font-size: 16px;
  text-align: center;
  padding-right: auto;
  padding-left: auto;
  padding-top: 25%;
  font-weight: 700;
`;

export const BlackCatText = styled(PrimaryText)`
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  margin-top: 17px;
  margin-bottom: 40px;
`;

export const UsernameTextField = styled.TextInput`
  margin: 0 40px;
  border: 1px solid ${Color.WHITE};
  border-radius: 20px;
  padding: 9px 13px;
  color: ${TextColor.TEXT_PRIMARY};
  font-size: 16px;
  margin-top: 100px;
`;

export const PasswordTextField = styled.TextInput`
  margin: 0 40px;
  border: 1px solid ${Color.WHITE};
  border-radius: 20px;
  padding: 9px 13px;
  color: ${TextColor.TEXT_PRIMARY};
  font-size: 16px;
  margin-top: 16px;
`;

export const BottomLoginButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.YELLOW};
  height: 72px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
  height: 10%;
`;

export const LoginButtonText = styled.Text`
  color: ${TextColor.TEXT_PRIMARY};
  font-size: 20px;
  font-weight: 500;
`;
