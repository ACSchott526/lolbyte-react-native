import {StyleSheet, Text, View} from 'react-native';

import MostPlayedChampionsEntry from './MostPlayedChampionsEntry';
import PropTypes from 'prop-types';
import React from 'react';

// TODO: look into combining with top champs?
const MostPlayedChampions = (props) => {
  let i = 0;
  const ChampionEntries = props.data.map((entry) => (
    <MostPlayedChampionsEntry
      key={`mostPlayedChampionEntry_${i++}`}
      championId={entry.championId}
      championName={entry.championName}
      gamesPlayed={entry.championGamesPlayed}
    />
  ));
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.entries}>{ChampionEntries}</View>
    </View>
  );
};

MostPlayedChampions.defaultProps = {
  title: 'Most Played (Recent)',
  data: [],
};

MostPlayedChampions.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      championId: PropTypes.number,
      championName: PropTypes.string,
      championGamesPlayed: PropTypes.string,
    }),
  ),
};

const styles = StyleSheet.create({
  entries: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 15,
  },
});

export default MostPlayedChampions;