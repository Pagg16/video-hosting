const CHANNELDETAIL = "CHANNELDETAIL";
const CHANNELVIDEOS = "CHANNELVIDEOS";

const defaultState = {
  channelDetail: {},
  channelVideos: {},
};

export default function channelDetailReduser(state = defaultState, action) {
  switch (action.type) {
    case CHANNELDETAIL:
      return { ...state, channelDetail: action.payload };
    case CHANNELVIDEOS:
      return { ...state, channelVideos: action.payload };

    default:
      return state;
  }
}

export const addDetailChannel = (detail) => ({
  type: CHANNELDETAIL,
  payload: detail,
});

export const addVideosChannel = (videos) => ({
  type: CHANNELVIDEOS,
  payload: videos,
});
