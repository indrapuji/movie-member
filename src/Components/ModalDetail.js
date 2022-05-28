import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';

const ModalDetail = ({visible, onClose}) => {
  return (
    <Modal
      onBackdropPress={() => onClose()}
      isVisible={visible}
      style={{margin: 0, justifyContent: 'flex-end'}}
    >
      <View style={styles.root}>
        <Text>Test</Text>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  root: {
    height: 300,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },
});

export default ModalDetail;
