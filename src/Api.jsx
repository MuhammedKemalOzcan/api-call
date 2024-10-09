import axios from "axios";

const getImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID yqyVDbUmk6cbZyYYrbaozOlKY0u2WEm3WuKiqceLB_w",
        },
        params:{
            query:term
        }      
    })
    debugger;
    return response.data.results;
  }

  export default getImages