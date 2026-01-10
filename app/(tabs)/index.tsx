import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { TaskInput } from "@/components/task-input";
import { TaskList } from "@/components/task-list";

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Add a new task
  function addTask(title: string) {
    setTasks((prev) => [
      ...prev,
      { id: Date.now().toString(), title, completed: false },
    ]);
  }

  // Toggle completed status
  function toggleTask(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Delete a task
  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* ScrollView allows the list to grow without breaking layout */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ width: "100%", maxWidth: 400 }}>
          <TaskInput onAddTask={addTask} />
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9", // optional nice background
  },
  scrollContainer: {
    flexGrow: 1,               // ensures content takes full height
    justifyContent: "center",  // vertical centering
    alignItems: "center",      // horizontal centering
    padding: 16,
  },
});
