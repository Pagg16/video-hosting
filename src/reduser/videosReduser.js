const SUGGESTED = "SUGGESTED";
const SEARCHVIDEO = "SEARCHVIDEO";

const defaultState = {
  suddestedVidos: {},
  searchVideo: {},
};

export default function videosReduser(state = defaultState, action) {
  switch (action.type) {
    case SUGGESTED:
      return { ...state, suddestedVidos: action.payload };

    case SEARCHVIDEO:
      return { ...state, searchVideo: action.payload };

    default:
      return state;
  }
}

export const addSuddestedVido = (videos) => ({
  type: SUGGESTED,
  payload: videos,
});

export const addSearchVideo = (videos) => ({
  type: SEARCHVIDEO,
  payload: videos,
});
