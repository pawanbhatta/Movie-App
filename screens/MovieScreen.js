import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { styles, theme } from "./../theme/index";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/Cast";
import MovieList from "./../components/MovieList";

let { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";
const topMargin = ios ? "" : " mt-3";

const MovieScreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const [isFav, setIsFav] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4]);

  const movieName = "Ant-Man and the Wasp: Quantumania";

  useEffect(() => {
    // call the movie details api
  }, [item]);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 10 }}
      className="flex-1 bg-neutral-900"
    >
      {/* Back button and movie poster */}
      <View className="w-full">
        <SafeAreaView
          className={
            "absolute z-20 w-full flex-row justify-between items-center px-4" +
            topMargin
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
            <Icon
              name="heart"
              color={isFav ? theme.background : "white"}
              size={28}
            />
          </TouchableOpacity>
        </SafeAreaView>

        <View>
          <Image
            source={{
              uri: "https://i.pinimg.com/originals/32/32/0d/32320dab96d6251ef84fb2d40269ad59.jpg",
            }}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            // Button Linear Gradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>

      {/* Movie details */}
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        {/* Title */}
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movieName}
        </Text>

        {/* status, release, and runtime */}
        <Text className="text-neutral-400 text-center text-base font-semibold">
          Released · 2020 · 170 min
        </Text>

        {/* genres */}
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Action ·
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Thrill ·
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Comedy
          </Text>
        </View>

        <Text className="text-neutral-400 mx-4 tracking-wide">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          dolore ut, molestiae nisi saepe velit sunt dicta, sapiente quos ipsam
          numquam debitis temporibus quas ratione, qui magni. Quas esse,
          voluptas accusamus ea culpa deleniti? Obcaecati quae blanditiis
          incidunt laudantium, tempora suscipit quos accusantium eos ad est aut
          sequi mollitia voluptatibus.
        </Text>
      </View>

      {/* Cast */}
      <Cast navigation={navigation} cast={cast} />

      {/* similar movies */}
      <MovieList
        title="Similar Movies"
        hideSeeAll={true}
        data={similarMovies}
      />
    </ScrollView>
  );
};

export default MovieScreen;
