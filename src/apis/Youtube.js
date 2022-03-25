import axios from "axios";

const KEY ='AIzaSyAgBB7md6rxuWNgsqYNE48yuVpP0YfeL8k'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
  },
});
