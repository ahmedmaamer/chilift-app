import "react-native-gesture-handler";
import * as React from "react";
import { Button, View, StyleSheet, ScrollView } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./componenet/Home/Header";
import Items from "./componenet/Home/Items";
import Article from "./componenet/Articles/Article";
import CustumeDrawer from "./componenet/Home/CustumeDrawer";
import Table from "./componenet/TableControl/Table";
import FeedBack from "./componenet/feedback/Feedback";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />

      <Items navigation={navigation} />
    </View>
  );
}

function ArticleScreen({ navigation }) {
  return (
    <ScrollView>
      <Article title={"article 1"} desc={"description"} />
      <Article
        title={"article 2"}
        desc={
          "description ncnsnckncsclql xkqnxlq x lj pql n kqp n qùq,mclc  ,ls"
        }
      />
      <Article title={"article 3"} desc={"description"} />
    </ScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustumeDrawer {...props} />}
        screenOptions={{
          headerShown: true,
          drawerActiveBackgroundColor: "#5F7045",
          drawerActiveTintColor: "white",
          drawerLabelStyle: {
            fontSize: 20,
            marginLeft: -18,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            headerStyle: { backgroundColor: "white" },
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
          component={HomeScreen}
        />
        <Drawer.Screen
          options={{
            headerStyle: { backgroundColor: "white" },
            drawerIcon: ({ color }) => (
              <Ionicons name="book" size={22} color={color} />
            ),
          }}
          name="Article"
          component={ArticleScreen}
        />
        <Drawer.Screen
          options={{
            headerStyle: { backgroundColor: "white" },
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="desk" size={26} color={color} />
            ),
          }}
          name="Table"
          component={Table}
        />
        <Drawer.Screen
          options={{
            headerStyle: { backgroundColor: "white" },
            drawerIcon: ({ color }) => (
              <MaterialIcons name="feedback" size={22} color={color} />
            ),
          }}
          name="FeedBack"
          component={FeedBack}
        />

        <Drawer.Screen
          options={{
            headerStyle: { backgroundColor: "white" },
            drawerIcon: ({ color }) => (
              <MaterialIcons name="logout" size={22} color={color} />
            ),
          }}
          name="logout"
          component={FeedBack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  drawer: {},
});
