import { useState } from "react";
import { SafeAreaView, Platform, Keyboard } from "react-native";

import { VStack, useTheme, HStack, Text, FlatList, Center } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

import { ActorsCard } from "../components/ActorsCard";
import { Loading } from "../components/Loading";
import { Input } from "../components/Input";

import NotFound from "../assets/not-found.svg";
import Search from "../assets/search.svg";

import { API } from "../api";

export function Actors() {
  const [actorList, setActorsList] = useState<any[] | undefined>(undefined);
  const [actorName, setActorName] = useState("");
  const [loading, setLoading] = useState(false);

  const { variables, colors } = useTheme();

  const handleGetActorsByName = async () => {
    setLoading(true);
    Keyboard.dismiss();
    setActorName("");
    try {
      const response = await API.PEOPLE_BY_NAME(actorName);
      setLoading(false);
      setActorsList(response.data);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <VStack bg="gray.300" flex={1}>
      {loading ? (
        <Loading />
      ) : (
        <SafeAreaView
          style={{ paddingTop: Platform.OS === "android" ? 35 : 0 }}
        >
          <HStack
            px={4}
            my={6}
            zIndex={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <MaterialIcons
              name="search"
              size={40}
              color="white"
              onPress={handleGetActorsByName}
            />
            <Input
              placeholder="Search"
              onChangeText={setActorName}
              value={actorName}
              onSubmitEditing={handleGetActorsByName}
              autoCorrect={false}
            />
          </HStack>

          <LinearGradient
            colors={[colors.primary[700], "transparent", colors.primary[700]]}
            style={{
              width: variables.width,
              height:
                Platform.OS === "android"
                  ? variables.height * 1.1
                  : variables.height,
              position: "absolute",
            }}
          />

          {actorList ? (
            <VStack p={6} maxH="80%">
              {actorList.length > 0 && (
                <Text
                  color="white"
                  fontSize="2xl"
                  textAlign="center"
                  fontFamily="heading"
                  mt={2}
                >
                  Actors List
                </Text>
              )}

              <FlatList
                bounces={false}
                data={actorList}
                keyExtractor={(item) => String(item.person?.id)}
                decelerationRate={1}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                initialNumToRender={8}
                maxToRenderPerBatch={10}
                snapToInterval={180}
                contentContainerStyle={{
                  paddingBottom: 70,
                }}
                renderItem={({ item }) => {
                  return <ActorsCard item={item.person} />;
                }}
                ListEmptyComponent={() => (
                  <Center>
                    <Text
                      textAlign="center"
                      my={8}
                      fontFamily="heading"
                      color="gray.100"
                      fontSize="2xl"
                    >
                      Sorry,{"\n"} nobody was found {"\n"} for this search!
                    </Text>
                    <NotFound height={350} />
                  </Center>
                )}
              />
            </VStack>
          ) : (
            <Center p={6} h="80%">
              <Text
                color="white"
                fontSize="2xl"
                textAlign="center"
                fontFamily="heading"
                mt={2}
              >
                Search {"\n"} for your favorite Actor
              </Text>
              <Search height={350} />
            </Center>
          )}
        </SafeAreaView>
      )}
    </VStack>
  );
}
