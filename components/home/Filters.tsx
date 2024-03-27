import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { listFilter, ListFilter } from '~/constants/list';
import { cn } from '~/lib/utils/utils';
import { Title } from '../reusable/Title';

interface Props {
  category: ListFilter;
  setCategory: React.Dispatch<React.SetStateAction<ListFilter>>;
}

const Filters = ({ category, setCategory }: Props) => {
  return (
    <View className="mx-5">
      <Title title="Filtros" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-4">
        {listFilter.map(({ label, valor }) => (
          <TouchableOpacity
            key={valor}
            className={cn('p-2 bg-input rounded-lg')}
            onPress={() => setCategory({ label, valor })}>
            <Text className={cn(category.label === label ? 'text-active' : 'text-white')}>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Filters;
