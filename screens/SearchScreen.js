import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function SearchScreen() {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  const movieName = "Ant-Man and the Wasp: Quantumania";

  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View className="mx-4 mb-3 flex-row justify-between items-center border-2 border-neutral-500 rounded-full">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={"lightgray"}
          className="pb-1 pl-6 text-base font-semibold text-white tracking-wider"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="rounded-full p-3 m-1 bg-neutral-500"
        >
          <Icon name="x" color={"white"} size={25} />
        </TouchableOpacity>
      </View>

      {/* results */}
      {results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="text-white font-semibold ml-1">
            Results ({results.length}){" "}
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {results.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.push("Movie", item)}
              >
                <View className="space-y-2 mb-4">
                  <Image
                    className="rounded-3xl"
                    source={{
                      uri: "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/230717/AMATWQ_FAMILY_Payoff2_1-Sht_v4_lg.jpg",
                    }}
                    style={{ width: width * 0.44, height: height * 0.3 }}
                  />
                  <Text className="text-neutral-300 ml-1">
                    {movieName.length > 22
                      ? movieName.slice(0, 22) + "..."
                      : movieName}{" "}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-row justify-center mt-24">
          <Image
            source={{
              uri: "https://clipart-library.com/newhp/202-2024583_teen-movie-thursday-september-28-family-movie-time.png",
            }}
            // className="h-96 w-80"
            style={{ width, height: height * 0.5 }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
