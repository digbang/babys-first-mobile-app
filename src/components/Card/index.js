import React from 'react';

import {StyleSheet, Text, View, Image} from 'react-native';

import Button from '../Button';

const Card = ({avatar, title, image}) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Button
        rounded
        label={avatar}
        onClick={() => console.log('NAVEGAR AL PROFILE')}
      />
      <View style={styles.cardInfo}>
        <Text style={styles.cardInfoText}>{title}</Text>
      </View>
      <View style={styles.cardHeaderButtons}>
        <Button label="A" onClick={() => console.log('CARD HEADER A')} />
      </View>
    </View>
    <View style={styles.cardBody}>
      <View style={styles.containerImage}>
        <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
      </View>
    </View>
    <View style={styles.cardFooter}>
      <Button label="A" onClick={() => console.log('CARD HEADER A')} />
      <Button label="B" onClick={() => console.log('CARD FOOTER B')} />
      <Button label="C" onClick={() => console.log('CARD FOOTER C')} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginVertical: 10,
  },
  cardBody: {
    width: '100%',
  },
  containerImage: {
    width: '100%',
    height: 300,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    backgroundColor: 'silver',
    alignItems: 'center',
    padding: 5,
  },
  cardInfo: {
    flex: 1,
  },
  cardFooter: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'silver',
  },
});

export default Card;
