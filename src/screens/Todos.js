// import useState & useEffect

import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import API from Config folder

const Todos = (props) => {
  //Init Todos and User State

  const [isLoading, setIsLoading] = useState(false);

  // Create getTodos Function to fetch

  // Using useEffect for get trigger Did Mount & call getTodos Function

  // Create HandleLogout Function

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
    <>
      <Header
        backgroundColor="#9b2226"
        centerComponent={{
          text: `Todos: ${user.firstName} ${user.lastName}`,
          style: { color: '#fff', paddingTop: 3 },
        }}
        rightComponent={{
          icon: 'logout',
          color: 'black',
          onPress: handleLogout,
        }}
      />
      {todos.length != 0 ? (
        <View style={style.container}>
          <FlatList
            data={todos}
            renderItem={_renderItem}
            keyExtractor={(item) => item._id.toString()}
            refreshing={isLoading}
            onRefresh={getTodos}
          />
        </View>
      ) : (
        <View style={style.noData}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={getTodos} />
            }
          >
            <Text>No Data</Text>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default Todos;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  noData: {
    alignItems: 'center',
  },
  logout: {
    color: '#fff',
    backgroundColor: 'red',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
});
