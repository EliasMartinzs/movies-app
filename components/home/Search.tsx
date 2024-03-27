import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export const Search = () => {
  const [value, setValue] = useState('');
  const router = useRouter();

  const searched = () => {
    router.push(`/(modals)/search/${value}`);
  };

  return (
    <TouchableOpacity>
      <View className="flex flex-row items-center w-ful bg-input rounded-xl gap-x-4 pl-4 mx-5">
        <Ionicons name="search-outline" size={24} color="#fff" />
        <TextInput
          className="bg-input h-12 flex-1 rounded-xl placeholder:text-white text-white"
          placeholder="Pesquise por filmes, séries Etc..."
          value={value}
          onChangeText={(e) => setValue(e)}
          onSubmitEditing={searched}
        />
      </View>
    </TouchableOpacity>
  );
};
