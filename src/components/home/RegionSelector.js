import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';
import RegionArrowSvg from '../../svg/regionArrow.svg';
import {useNavigation} from '@react-navigation/native';

const RegionSelector = (props) => {
  const navigation = useNavigation();

  const selectRegionHandler = () => {
    // TODO: make these constants
    navigation.navigate('Select Region');
  };

  return (
    <TouchableWithoutFeedback onPress={() => selectRegionHandler()}>
      <View style={styles.regionSelector}>
        <Text style={styles.regionText}>{props.selectedRegion} </Text>
        <RegionArrowSvg
          style={styles.regionArrow}
          width={props.regionArrowWidth}
          height={props.regionArrowHeight}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

RegionSelector.defaultProps = {
  selectedRegion: '',
  regionArrowWidth: 10,
  regionArrowHeight: 24,
};

RegionSelector.propTypes = {
  selectedRegion: PropTypes.string,
  regionArrowWidth: PropTypes.number,
  regionArrowHeight: PropTypes.number,
};

const styles = StyleSheet.create({
  regionSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#50525D',
    borderWidth: 10,
    borderRadius: 6,
    marginLeft: 5,
  },
  regionText: {
    color: '#22A8CE',
    backgroundColor: '#50525D',
    fontSize: 20,
  },
  regionArrow: {
    backgroundColor: '#50525D',
  },
});

export default RegionSelector;
