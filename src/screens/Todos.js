import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';

import API from '../config/api';

const Todos = (props) => {
  //Init State
  const [todos, setTodos] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  // Create Function to fetch
  const getTodos = async () => {
    try {
      setIsLoading(true);
      const { data } = await API.get('/Todo');

      if (data) {
        setTodos(data);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Create LifeCycle
  useEffect(() => {
    //Function Exception
    getTodos();
  }, []);

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
