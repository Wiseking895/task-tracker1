import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

type Props = {
  onAddTask: (title: string) => void;
};

export function TaskInput({ onAddTask }: Props) {
  const [text, setText] = useState("");

  function addTask() {
    if (!text.trim()) return;
    onAddTask(text);
    setText("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New task..."
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Add" onPress={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    padding: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 8,
  },
});
