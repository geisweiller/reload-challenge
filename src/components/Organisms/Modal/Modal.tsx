import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

import Button from '../../Atoms/Button/Button';
import { IModalProps } from './interfaces';
import styles from './styles';

const CustomModal = ({ isOpen, handleClose, children }: IModalProps) => {
  return (
    <Modal
      style={styles.modal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={isOpen}
      coverScreen
      hasBackdrop
      backdropOpacity={0.5}
      onBackdropPress={handleClose}
      onBackButtonPress={handleClose}
      onSwipeStart={handleClose}
    >
      <View style={styles.modalHeader}>
        <TouchableOpacity onPress={handleClose} style={styles.button}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.modalTitle}>Calendar</Text>
      </View>
      {children}
      <Button text="Apply" />
    </Modal>
  );
};

export default CustomModal;
