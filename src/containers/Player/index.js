import { connect } from 'react-redux';

import {setPlaying} from '../../actions/player';


import Player from '../../components/Player';

const mapStateToProps = (state) => ({
    songToPlay : state.player.songToPlay,
    isPlaying :state.player.isPlaying,
    nameSongToPlay : state.player.nameSongToPlay,
    nameUserSongToPlay : state.player.nameUserSongToPlay,
})
const mapDispatchToProps = (dispatch) =>({
    setPlaying:(playBool)=> {
    dispatch(setPlaying(playBool))
    },
})

export default connect(mapStateToProps,mapDispatchToProps)(Player);