const SUGGESTED = "SUGGESTED";
const SEARCHVIDEO = "SEARCHVIDEO";
const VIDEODETAILS = "VIDEODETAILS";
const SEARCHTERM = "SEARCHTERM";
const SETREGIONCODE = "SETREGIONCODE";

const defaultState = {
  suddestedVidos: {},
  searchVideo: {},
  detailsVideo: {},
  searchTerm: "",
  regionCode: "US",
};

export default function videosReduser(state = defaultState, action) {
  switch (action.type) {
    case SUGGESTED:
      return { ...state, suddestedVidos: action.payload };

    case SEARCHVIDEO:
      return { ...state, searchVideo: action.payload };

    case VIDEODETAILS:
      return { ...state, detailsVideo: action.payload };

    case SEARCHTERM:
      return { ...state, searchTerm: action.payload };

    case SETREGIONCODE:
      return { ...state, regionCode: action.payload };

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

export const addDetailsVideo = (video) => ({
  type: VIDEODETAILS,
  payload: video,
});

export const setSearchTermReduser = (term) => ({
  type: SEARCHTERM,
  payload: term,
});

export const setRegionCodeReduser = (region) => ({
  type: SETREGIONCODE,
  payload: region,
});
