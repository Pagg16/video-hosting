const SUGGESTED = "SUGGESTED";

const defaultState = {
  suddestedVidos: {},
};

export default function videosReduser(state = defaultState, action) {
  switch (action.type) {
    case SUGGESTED:
      return { ...state, suddestedVidos: action.payload };

    default:
      return state;
  }
}

export const addSuddestedVido = (videos) => ({
  type: SUGGESTED,
  payload: videos,
});
