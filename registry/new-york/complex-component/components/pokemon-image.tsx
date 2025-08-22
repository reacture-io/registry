'use client';

import { usePokemonImage } from '@/registry/new-york/complex-component/hooks/use-pokemon';

export const PokemonImage = ({
  name,
  number,
}: {
  name: string;
  number: number;
}) => {
  const imageUrl = usePokemonImage(number);

  if (!imageUrl) {
    return null;
  }

  return (
    <img
      src={imageUrl}
      alt={name}
    />
  );
};
