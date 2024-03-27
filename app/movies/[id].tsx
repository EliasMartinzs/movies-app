import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { Link, useLocalSearchParams, useNavigation } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { fetchIdMovies, fetchOTTDetails } from '~/lib/fetch';
import { Ionicons } from '@expo/vector-icons';
import colors from '~/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';

const { height } = Dimensions.get('window');

const MoviesDetails = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['movieId', id],
    queryFn: () => fetchIdMovies(id.toString()),
  });
  const { data: ottDetails } = useQuery({
    queryKey: ['ottDetails', id],
    queryFn: () => fetchOTTDetails(id.toString()),
  });

  console.log(id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerTransparent: true,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={'#fff'} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <View style={[styles.backgroundContainer, { height: height / 1.7 }]}>
        <ImageBackground
          source={{ uri: data?.results.primaryImage.url }}
          style={styles.backgroundImage}
          resizeMode="cover"
        />

        <LinearGradient colors={['transparent', 'rgba(31, 29, 43, 1)']} style={styles.gradient} />
        <View style={styles.centered}>
          <Image source={{ uri: data?.results.primaryImage.url }} style={styles.image} />
        </View>
      </View>

      <View className="px-5 my-10 flex flex-col gap-y-8">
        <Text className="text-4xl font-black italic text-white">
          {data?.results.titleText.text}
        </Text>

        <View className="items-center justify-between flex-row gap-10">
          <View className="flex flex-row gap-x-3 items-center">
            {ottDetails?.genre?.map((genre) => (
              <TouchableOpacity key={genre}>
                <Text className="text-white text-lg p-2 border border-active rounded-md">
                  {genre}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View className="items-center flex-row gap-x-1">
            <Ionicons name="star" size={16} color="#fffb00" />
            <Text className="text-white">{ottDetails?.imdbrating}</Text>
          </View>
        </View>

        <Text className="text-white text-xl">
          Released {ottDetails?.released}, {ottDetails?.runtime}
        </Text>

        <Text className="text-white text-xl">{ottDetails?.synopsis}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.5,
  },
  centered: {
    position: 'absolute',
    top: 40,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 380,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});

export default MoviesDetails;
