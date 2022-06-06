import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';

// Import Axios
import axios from 'axios';

const Todos = (props) => {
  //Init State
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Create LifeCycle
  useEffect(() => {
    //Function Exception
    getTodos();
  }, []);

  // Create Function to fetch
  const getTodos = () => {
    setIsLoading(true);
    axios
      .get(`https://api.kontenbase.com/query/api/v1/YOUR_API_KEY/Todos`)
      .then((res) => {
        setTodos(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert('Error Fetch Data');
        setIsLoading(false);
      });
  };

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
