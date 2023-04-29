import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  BlackCatText,
  BottomLoginButton,
  LoginButtonText,
  LoginScreenBackgroundImage,
  LoginTitleText,
  LoginViewContainer,
  MainContainer,
  PasswordTextField,
  UsernameTextField,
} from "./styles";
import BlackCatLogo from "../../assets/svg/BlackCatLogo";
import { Color, TextColor } from "../../utils/constants";
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from "react-native";

export default ({ navigation }: any) => {
  const { top, bottom, right, left } = useSafeAreaInsets();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView behavior="height">
        <MainContainer
          style={{
            paddingRight: right,
            paddingLeft: left,
            height: Dimensions.get("window").height,
          }}
        >
          <LoginTitleText>FIND THE MOST LOVED ACTIVITY</LoginTitleText>
          <BlackCatText>BLACK CAT</BlackCatText>
          <BlackCatLogo />

          <UsernameTextField
            placeholder="Username"
            placeholderTextColor={TextColor.PLACEHOLDER_TEXT}
          />
          <PasswordTextField
            placeholder="Pasword"
            placeholderTextColor={TextColor.PLACEHOLDER_TEXT}
            secureTextEntry={true}
          />

          <BottomLoginButton
            onPress={() => {
              Keyboard.dismiss();
              navigation.navigate("Home");
            }}
            style={{
              marginLeft: left,
              marginRight: right,
              minHeight: bottom + top,
            }}
          >
            <LoginButtonText>SIGN IN</LoginButtonText>
          </BottomLoginButton>
        </MainContainer>

        <LoginViewContainer></LoginViewContainer>
        <LoginScreenBackgroundImage
          source={require("../../assets/img/login-screen.png")}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
