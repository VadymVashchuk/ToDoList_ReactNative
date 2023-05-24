import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TaskList = ({ tasks }) => {
  return (
    <View>
      {tasks.map(task => {
        return (
          <TaskItem task={task} />
        )
      })}
    </View>
  )
}

const TaskItem = ({ task }) => {
  return (
    <View style={styles.singleTaskContainer}>
      <Text>{task.body}</Text>
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
  singleTaskContainer: {
    height: 80,
    marginTop: 20,
    backgroundColor: 'rgba(253, 253, 253, 0.6)',
    borderRadius: 10,

  }
})