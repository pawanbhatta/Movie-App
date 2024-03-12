import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

export default function MovieList({ title, data, hideSeeAll }) {
  const navigation = useNavigation();
  const handleClick = (item) => {
    navigation.push("Movie", item);
  };

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title} </Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={styles.text}>See All </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Movie Row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleClick(item)}>
            <View className="space-y-1 mr-4">
              <Image
                source={{
                  uri: "https://i.pinimg.com/originals/32/32/0d/32320dab96d6251ef84fb2d40269ad59.jpg",
                }}
                className="rounded-3xl"
                style={{ width: width * 0.33, height: height * 0.22 }}
              />
              <Text className="text-neutral-300 ml-1 text-center">
                Movie name{" "}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
