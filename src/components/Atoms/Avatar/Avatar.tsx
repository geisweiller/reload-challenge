import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import * as Icons from '../../../assets/icons';
import styles from './styles';


const Avatar = () => {
  return (
    <TouchableOpacity>
      <Image source={Icons.UserIcon} style={styles.avatar}/>
    </TouchableOpacity>
  );
};

export default Avatar;
