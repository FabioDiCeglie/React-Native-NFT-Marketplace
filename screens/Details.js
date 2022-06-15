import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDescription,
  DetailsBid,
} from "../components";

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="trasparent"
        transLucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
    </SafeAreaView>
  );
};

export default Details;
