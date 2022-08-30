import { TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "native-base";

export function BackButton() {
  const { goBack } = useNavigation();
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={{
        margin: 35,
        position: "absolute",
        height: 40,
        width: 60,
        borderRadius: 20,
        backgroundColor: colors.gray[500],
        opacity: 0.6,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => {
        goBack();
      }}
    >
      <Ionicons name="ios-arrow-back-circle-outline" size={30} color="white" />
    </TouchableOpacity>
  );
}
