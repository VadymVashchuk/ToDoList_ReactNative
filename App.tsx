import React, { useState } from "react";
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';
import { Task } from './models/types';
import Header from "./components/Header";
import TaskList from "./components/TaskList";





const App: () => Node = () => {

  const [tasks, setTasks] = useState<Task[]>([
    { id: Math.random().toString().substring(7), body: 'Do some stuff', status: false },
    { id: Math.random().toString().substring(7), body: 'Do something else', status: true },
    { id: Math.random().toString().substring(7), body: 'Finish toDoList', status: false },
    { id: Math.random().toString().substring(7), body: 'Learn react-native', status: false },
  ]);

  return (

    <SafeAreaView style={styles.main}>
      <ImageBackground source={{ uri: 'https://wallpaper-house.com/data/out/6/wallpaper2you_89087.jpg' }} resizeMode="cover" style={styles.image}>
        <Header />
        <TaskList tasks={tasks} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    flex: 1,
    padding: 20,
  }
});

export default App;
