import { useState } from "react";
import { SidebarWrapper } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default ({ setShowSidebar, showSidebar }: any) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <SidebarWrapper
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      ></SidebarWrapper>
      {showSidebar && (
        <TouchableOpacity
          onPress={() => setShowSidebar(false)}
          style={{
            height: "100%",
            width: "25%",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 999999,
          }}
        ></TouchableOpacity>
      )}
    </>
  );
};
