import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

export function TaskItem({ title, completed, onToggle, onDelete }: Props) {
  return (
    <View style={styles.item}>
      <Pressable onPress={onToggle}>
        <Text style={[styles.text, completed && styles.done]}>
          {title}
        </Text>
      </Pressable>

      <Pressable onPress={onDelete}>
        <Text style={styles.delete}>✕</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
  },
  done: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  delete: {
    color: "red",
    fontSize: 18,
  },
});
