import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { colors } from '../../../constants/theme';
import { IButtonProps } from './interfaces';
import styles from './styles';

const Button = ({ text }: IButtonProps) => {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={[colors.blue, colors.lightBlue]}
      style={styles.button}
      end={{ x: 0.6, y: 0.4 }}
    >
      <TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;
