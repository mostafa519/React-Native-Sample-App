import React from 'react';
import {View,Text} from 'react-native';
import styles from '../styles/styles';
const MyColors = (props) => {
    const {colorName,hexCode}=props;
    return (
        <View style={[styles.txtContainer,{backgroundColor:hexCode}]}>
        <Text style={styles.txtt}>{colorName} {hexCode}</Text>
      </View>
    );
}

  
export default MyColors;
