import axios from "axios";

const base_url = "https://api.jikan.moe/v4/anime";

export const animeData = async (search) => {
    try {
        const response = await axios.get(base_url, {
            params: {
                q: search,
                sfw: true,
                limit:20
            }
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
