import axios from "axios";

const caller = async(endpoint, type) => {
    try {
        const response = await axios({
            method: type,
            url: `https://jsonplaceholder.typicode.com/${endpoint}`,
        });

        if(response.status === 200) {
            return response.data;
        } else {
            throw new Error(response);
        }
    } catch(error) {
        console.error("An error occurred while trying to call the API", error);
    }
}

const getCards = async (pag) => {
    const response = await caller(`albums/${pag}/photos`, "GET");
    return response;
}

export {caller, getCards};