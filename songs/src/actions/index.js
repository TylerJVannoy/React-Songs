//Action Creator

export const selectSong = () => {
  //Return Action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
