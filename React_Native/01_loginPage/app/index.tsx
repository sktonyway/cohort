import { View } from "react-native";
import Page from "./page";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Page />
    </View>
  );
}
