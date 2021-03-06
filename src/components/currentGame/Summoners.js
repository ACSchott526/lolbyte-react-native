import {StyleSheet, View} from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';
import SummonerEntry from '@app/components/currentGame/SummonerEntry';

const Summoners = (props) => {
  var i = 0;
  const SummonerEntries = props.summonerEntries.map((entry) => (
    <SummonerEntry
      key={`summoner_${i++}`}
      championId={entry.champId}
      summonerName={entry.name}
      summonerRank={entry.rank}
      summonerTeamId={entry.teamId}
      selectedSummoner={entry.selected}
      summonerRegion={props.summonerRegion}
    />
  ));
  return (
    <View>
      <View style={styles.summonerEntries}>{SummonerEntries}</View>
    </View>
  );
};

Summoners.defaultProps = {
  summonerEntries: [],
  summonerRegion: '',
};

Summoners.propTypes = {
  summonerEntries: PropTypes.array,
  summonerRegion: PropTypes.string,
};

const styles = StyleSheet.create({
  summonerEntries: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Summoners;
