import { View, Text, ScrollView } from 'react-native';
import React from 'react';

import { Search } from '~/components/home/Search';
import { MoviesFiltered } from '~/components/home/MoviesFiltered';
import { useQuery } from '@tanstack/react-query';

import { MoviesList } from '~/components/reusable/MoviesList';
import { fetchAll } from '~/lib/fetch';

const Page = () => {
  const {
    data: moviesUpComing,
    isLoading: isLoadingUpComing,
    isError: isErrorUpComing,
  } = useQuery({
    queryKey: ['moviesUpcoming'],
    queryFn: () => fetchAll('/titles/x/upcoming?year=2024'),
  });
  const {
    data: moviesActions,
    isLoading: isLoadingActions,
    isError: isErrorActions,
  } = useQuery({
    queryKey: ['moviesActions'],
    queryFn: () => fetchAll('/titles?genre=Action'),
  });
  const {
    data: moviesHorror,
    isLoading: isLoadingHorror,
    isError: isErrorHorror,
  } = useQuery({
    queryKey: ['moviesHorror'],
    queryFn: () => fetchAll('/titles?genre=Horror'),
  });
  const {
    data: moviesAnimation,
    isLoading: isLoadingAnimation,
    isError: isErrorAnimation,
  } = useQuery({
    queryKey: ['moviesAnimation'],
    queryFn: () => fetchAll('/titles?genre=Animation'),
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-bg flex-1">
      <View className="flex justify-between items-center w-full flex-row my-10 px-5">
        <Text className="text-white text-3xl font-bold italic">Cinem Info</Text>

        <View className="w-12 h-12 bg-input rounded-full"></View>
      </View>

      <View className="flex flex-col gap-y-10 pb-10">
        <Search />
        <MoviesFiltered />
        <MoviesList
          title="Lançamentos"
          data={moviesUpComing}
          isLoading={isLoadingUpComing}
          isError={isErrorUpComing}
        />
        <MoviesList
          title="Ação"
          data={moviesActions}
          isLoading={isLoadingActions}
          isError={isErrorActions}
        />
        <MoviesList
          title="Terror"
          data={moviesHorror}
          isLoading={isLoadingHorror}
          isError={isErrorHorror}
        />
        <MoviesList
          title="Animaçoes"
          data={moviesAnimation}
          isLoading={isLoadingAnimation}
          isError={isErrorAnimation}
        />
      </View>
    </ScrollView>
  );
};

export default Page;
