import {
  View,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "../theme";
import TrendingMovies from "../components/trendingMovies";
import MovieList from "../components/MovieList";

const ios = Platform.OS === "ios";

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  return (
    <View className="flex-1 bg-neutral-800">
      {/* Search bar and logo */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />

        <View className="flex-row justify-between items-center mx-4">
          {/* <icon  */}
          <Icon name="menu" color={"white"} size={30} />

          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>
            ovies
          </Text>

          <TouchableOpacity>
            <Icon name="search" color={"white"} size={30} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Trending movies carousel */}
        <TrendingMovies data={trending} />

        {/* Upcoming movies row */}
        <MovieList data={upcoming} title="Upcoming" />

        {/* TopRated movies row */}
        <MovieList data={topRated} title="Top Rated" />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
