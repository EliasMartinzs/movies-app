import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { listFilter, ListFilter } from '~/constants/list';
import { useQuery } from '@tanstack/react-query';
import { fetchAll } from '~/lib/fetch';

import { Bounce } from 'react-native-animated-spinkit';
import colors from '~/constants/colors';
import Filters from './Filters';
import { Movie } from '~/interfaces/movies';
import { Card } from '../reusable/Card';

const RenderMovie = ({ movie }: { movie: Movie }) => {
  return <Card movie={movie} />;
};

export const MoviesFiltered = () => {
  const [category, setCategory] = useState<ListFilter>({
    label: listFilter[0].label,
    valor: listFilter[0].valor,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ['moviesFilter', category.valor],
    queryFn: () => fetchAll(`/titles?list=${category.valor}`),
  });

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
    <View className="flex flex-col gap-y-10">
      <Filters category={category} setCategory={setCategory} />

      <View className="pl-5">
        <FlatList
          data={data?.results}
          renderItem={({ item }) => <RenderMovie movie={item} />}
          contentContainerClassName="gap-2"
          horizontal
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
};
