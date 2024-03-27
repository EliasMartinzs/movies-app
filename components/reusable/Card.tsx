import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { cn } from '~/lib/utils/utils';
import { Ionicons } from '@expo/vector-icons';
import { Movie } from '~/interfaces/movies';

interface Props {
  movie: Movie;
}

export const Card = ({ movie }: Props) => {
  return (
    <Link href={`/movies/${movie.id}`} asChild>
      <TouchableOpacity className={cn('w-64 h-96 rounded-3xl gap-y-3 relative')} key={movie.id}>
        <Image
          source={{ uri: movie.primaryImage?.url }}
          className="flex-1 rounded-3xl"
          resizeMode="cover"
        />
        <TouchableOpacity className="absolute top-2 right-2">
          <Ionicons name="heart-outline" color="red" size={28} />
        </TouchableOpacity>
        <Text className="text-white">{movie.originalTitleText.text}</Text>
      </TouchableOpacity>
    </Link>
  );
};
