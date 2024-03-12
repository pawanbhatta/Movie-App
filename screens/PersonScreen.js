import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { theme } from "./../theme/index";
import MovieList from "../components/MovieList";

let { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";
const verticalMargin = ios ? "" : " my-3";

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFav, setIsFav] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4]);

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

      {/* Person details */}
      <View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: "gray",
            shadowRadius: 40,
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
          }}
        >
          <View className="overflow-hidden items-center rounded-full h-72 w-72 border-2 border-neutral-500">
            <Image
              source={{
                uri: "https://a1png.com/wp-content/uploads/2021/06/Keanu-Reeves-6-1.png",
              }}
              style={{ height: height * 0.43, width: width * 0.74 }}
            />
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-3xl text-white font-bold text-center">
            Keanu Reeves
          </Text>
          <Text className="text-base text-neutral-500 text-center">
            Keanu Reeves
          </Text>
        </View>

        <View className="mx-3 p-4 flex-row justify-between items-center bg-neutral-700 rounded-full">
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300 text-sm">Male</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-300 text-sm">1998-08-24</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Known For</Text>
            <Text className="text-neutral-300 text-sm">Acting</Text>
          </View>
          <View className="px-2 items-center">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-300 text-sm">78.65</Text>
          </View>
        </View>

        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
            repudiandae nisi corrupti, hic rerum omnis ex dolore suscipit minima
            quisquam delectus veniam culpa non nihil nemo neque. Nihil veniam
            officiis, quaerat deleniti autem repudiandae est, officia dolore
            explicabo voluptatum ipsam libero aut eveniet incidunt voluptatem,
            dignissimos doloremque vero non ab?
          </Text>
        </View>

        {/* Movies */}
        <MovieList data={personMovies} title={"Movies"} hideSeeAll={true} />
      </View>
    </ScrollView>
  );
}
