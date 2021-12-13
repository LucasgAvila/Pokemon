import React from "react";
import { StyleSheet, ActivityIndicator, FlatList, Platform } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;

  const leadMore = () => {
    loadPokemons();
  }

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} /> }
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && leadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator 
          size="large"
          style={styles.spinner}
          color="#AEAEAE"
        />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: 40,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  }
});