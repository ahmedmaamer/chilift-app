import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import LikeButton from "./LikeButton";

const Article = ({ title, desc }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={require("../../images/img1.jpg")} style={styles.image} />
      <Text style={styles.desc}>{desc}</Text>
      <LikeButton />
    </ScrollView>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginHorizontal: 20,
    padding: 0,
    borderWidth: 1,
  },
  image: {
    height: 250,
    width: "100%",
    marginVertical: 10,
    marginHorizontal: 0,
    borderRadius: 30,
  },
  title: {
    fontSize: 30,
    marginHorizontal: 20,
  },
  desc: {
    margin: 20,
  },
  like: {
    color: "white",
    width: 30,
    borderRadius: 15,
  },
});
