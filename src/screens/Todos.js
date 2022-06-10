// import useState & useEffect

import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';

// import API from CONFIG folder

const Todos = (props) => {
  //Init Todos State

  const [isLoading, setIsLoading] = useState(false);

  // Create getTodos Function to fetch

  // Using useEffect for get trigger Did Mount & call getTodos Function

  //   Create Component List
  const _renderItem = ({ item }) => {
    return (
      <ListItem key={item._id.toString()} bottomDivider>
        <ListItem.Content>
          <ListItem.Title numberOfLines={1}>{item.title}</ListItem.Title>
        </ListItem.Content>
        <CheckBox checked={item.isDone == true ? true : false} />
      </ListItem>
    );
  };

  return (
    <View style={style.container}>
      <View>
        <FlatList
          data={todos}
          renderItem={_renderItem}
          keyExtractor={(item) => item._id.toString()}
          refreshing={isLoading}
          onRefresh={getTodos}
        />
      </View>
    </View>
  );
};

export default Todos;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
