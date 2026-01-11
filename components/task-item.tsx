import {View, Text, Pressable, StyleSheet} from 'react-native';

type Props ={
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

export function TaskItem({title,completed, onToggle, onDelete}:Props){
  return(
    <View style={styles.container}>
      <Pressable onPress={onToggle} style={[styles.task, completed && styles.completedTask]}>
      <Text style={[styles.title, completed && styles.completedTitle]}>{title}</Text>
      </Pressable>

      <Pressable onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Del</Text>
      </Pressable>
    </View>
  );  
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:12,
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
  },
  task:{
    flex:1,
    padding:8,
    borderWidth:1,
    borderColor:'#000',
    borderRadius:4,
  },
  completedTask:{
    backgroundColor:'#d3ffd3',
    borderColor:'#0a0',
  },
  title:{
    fontSize:16,
    color:'blue',
  },
  completedTitle:{
    textDecorationLine:'line-through',
    color:'gray',
  },
  deleteButton:{
    marginLeft:12,
    padding:8,
    backgroundColor:'#ff4d4d',
    borderRadius:4,
  },
  deleteButtonText:{
    color:'#fff',
    fontWeight:'bold',
  },
});

