/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Button from '../../components/Button';
import Card from '../../components/Card';

const Home = () => {
  const [publications, setPublications] = useState([
    {
      id: 1,
      avatar: 'J',
      title: 'Juan Perez',
      image: 'https://picsum.photos/400',
    },
    {
      id: 2,
      avatar: 'P',
      title: 'Pedro Pablo',
      image: 'https://picsum.photos/400',
    },
    {
      id: 3,
      avatar: 'L',
      title: 'Lebron James',
      image: 'https://picsum.photos/400',
    },
  ]);

  const addPublications = () => {
    setPublications(oldValue => [
      {
        id: new Date().getTime(),
        avatar: 'A',
        title: new Date().getTime(),
        image: 'https://picsum.photos/400',
      },
      ...oldValue,
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainerTitle}>
          <Text style={styles.headerTitle}>My baby first app</Text>
        </View>
        <View style={styles.headerContainerButtons}>
          <Button label="A" onClick={() => console.log('BUTTON HEADER A')} />
          <Button label="B" onClick={() => console.log('BUTTON HEADER B')} />
          <Button label="+" onClick={() => addPublications()} />
        </View>
      </View>
      <ScrollView style={styles.body}>
        {publications.map(({id, avatar, title, image}) => (
          <Card key={id} avatar={avatar} title={title} image={image} />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Button label="A" onClick={() => console.log('BUTTON FOOTER A')} />
        <Button label="B" onClick={() => console.log('BUTTON FOOTER B')} />
        <Button label="C" onClick={() => console.log('BUTTON FOOTER C')} />
        <Button label="D" onClick={() => console.log('BUTTON FOOTER D')} />
        <Button label="E" onClick={() => console.log('BUTTON FOOTER E')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'silver',
    padding: 5,
  },
  headerContainerTitle: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  headerContainerButtons: {
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    paddingHorizontal: 10,
  },
  footer: {
    backgroundColor: 'silver',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
});

export default Home;
