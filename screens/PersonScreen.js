import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { theme } from "./../theme/index";

let { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";
const verticalMargin = ios ? "" : " my-3";

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFav, setIsFav] = useState(false);

  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Back button */}
      <SafeAreaView
        className={
          "z-20 w-full flex-row justify-between items-center px-4" +
          verticalMargin
        }
      >
        <TouchableOpacity
          style={{ backgroundColor: "#eab308" }}
          className="rounded-xl p-1"
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" color={"white"} size={28} />
        </TouchableOpacity>
        <TouchableOpacity
          className="rounded-xl p-1"
          onPress={() => setIsFav(!isFav)}
        >
          <Icon name="heart" color={isFav ? "red" : "white"} size={28} />
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}
