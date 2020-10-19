import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Button,
  View,
} from "react-native";
import Constants from "expo-constants";
import * as Font from "expo-font";
import Snow from "../assets/snow-background.jpg";

export default function UserAccountPage({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();

  const loadUser = async () => {
    setLoading(true);
    const res = await fetch("https://randomuser.me/api/?");
    const data = await res.json();
    await Image.prefetch(data.results[0].picture.large);
    setUser(data);
    setLoading(false);
  };

  useEffect(() => {
    loadUser();
  }, []);

  if (!user) return <ActivityIndicator size="large" />;

  return (
    <View style={styles.container}>
      <Image
        style={styles.pic}
        source={{ uri: user.results[0].picture.large }}
      />
      <Text style={styles.paragraph}>
        {user.results[0].name.first} {user.results[0].name.last} {"\n"}
        Skier {"\n"}
        Member Since: 2020
      </Text>
      <Text style={styles.Headers}>
        <Text style={styles.Headers}>Info:{"\n"}</Text>
        <Text style={styles.bio}>
          {"\n"}American former World Cup alpine ski racer. Olympic and World
          Championship gold medalist, a two-time overall World Cup champion in
          2005 and 2008, and the most successful American alpine ski racer of
          all time. He is the only skier with five or more victories in each
          discipline. {"\n"}
        </Text>
        <Text style={styles.preferences}>
          {"\n"}Smoking: No{"\n"}Pets: No{"\n"}Loud Music: No
        </Text>
      </Text>
      <Button
        style={styles.tripButton}
        title="Find A Trip"
        onPress={() => navigation.navigate("Trips")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  pic: {
    height: 200,
    width: 200,
  },
  tripButton: {
    // color: "#841584",
    position: "absolute",
    bottom: 0,
  },
  bio: {
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginHorizontal: 10,
    flexDirection: "row",
  },
  preferences: {
    margin: 10,
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginHorizontal: 10,
    flexDirection: "row",
  },
  Headers: {
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginHorizontal: 10,
    flexDirection: "row",
  },
});
