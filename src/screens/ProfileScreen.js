import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import StylesScreen from '../styles/StylesScreen';
import CustomTextInput from '../components/inputs/CustomTextInput';
import CustomButton from '../components/buttons/CustomButton';

const ProfileScreen = ({ route }) => {
  const { Names, LastNames, username } = route.params;

  const [posts, setPosts] = useState([]);
  const [donePosts, setDonePosts] = useState([]);
  const [postText, setPostText] = useState('');


  const handlePost = () => {
    setPosts(prevPosts => [
      ...prevPosts,
      { id: Date.now(), text: postText, username: route.params.username },
    ]);
    setPostText('');
  };

  const handleDone = (postId) => {
    const post = posts.find(post => post.id === postId);
    setDonePosts(prevDonePosts => [...prevDonePosts, post]);
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  };

  const handleDelete = (postId) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  };

  const renderItem = ({ item }) => (
    <View style={StylesScreen.postContainer}>
      <Text style={StylesScreen.postText}>{item.text}</Text>
      <Text style={StylesScreen.userType}>{item.username}</Text>
      <View style={StylesScreen.buttonContainer}>
        <TouchableOpacity
          style={[StylesScreen.postButton, { backgroundColor: '#4CAF50' }]}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={StylesScreen.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={StylesScreen.postButton}
          onPress={() => handleDone(item.id)}
        >
          <Text style={StylesScreen.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderDoneItem = ({ item }) => (
    <View style={StylesScreen.postContainer}>
      <Text style={StylesScreen.postText}>{item.text}</Text>
      <Text style={StylesScreen.userType}>{item.username}</Text>
    </View>
  );

  return (
    <View style={StylesScreen.container}>
      <Text style={StylesScreen.title}>Welcome Juan, {route.params.username}!</Text>
      <CustomTextInput
        placeholder="Write your post..."
        value={postText}
        onChangeText={text => setPostText(text)}
      />
      <CustomButton title="Post" onPress={handlePost} />
      <Text style={StylesScreen.sectionTitle}>Posts</Text>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={StylesScreen.sectionTitle}>Done Posts</Text>
      <FlatList
        data={donePosts}
        renderItem={renderDoneItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProfileScreen;
