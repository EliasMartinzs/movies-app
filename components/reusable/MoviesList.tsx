import { View, Text, FlatList } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import { Title } from '../reusable/Title';
import { Card } from '../reusable/Card';
import { Movie, Movies } from '~/interfaces/movies';
import { Bounce } from 'react-native-animated-spinkit';
import colors from '~/constants/colors';
import { ListFilter } from '~/constants/list';

interface Props {
  data: Movies | undefined;
  isLoading: boolean;
  isError: boolean;
  title: string;
}

const RenderMovie = ({ movie }: { movie: Movie }) => {
  return <Card movie={movie} />;
};

export const MoviesList = ({ data, isError, isLoading, title }: Props) => {
  if (isLoading) {
    return (
      <View className="items-center">
        <Bounce size={48} color={colors.active} />
      </View>
    );
  }

  if (isError) {
    return (
      <View className="items-center">
        <Text className="text-white text-xl text-center">
          Houve um problema ao realizar o fetch!
        </Text>
      </View>
    );
  }

  if (data?.results.length === 0) {
    return (
      <View className="items-center">
        <Text className="text-white text-xl text-center">
          Houve um problema, Não foi possivel achar dados sobre essa categoria!
        </Text>
      </View>
    );
  }

  return (
    <View className="pl-5 gap-y-5 flex-1">
      <Title title={title} />
      <FlatList
        data={data?.results}
        renderItem={({ item }) => <RenderMovie movie={item} />}
        contentContainerClassName="gap-2"
        horizontal
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};
