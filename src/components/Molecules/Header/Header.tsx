import React from 'react';
import { Image, View } from 'react-native';

import * as Icons from '../../../assets/icons';
import Avatar from '../../Atoms/Avatar/Avatar';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Avatar />
      <Image source={Icons.ChatIcon} />
    </View>
  );
};

export default Header;
