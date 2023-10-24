import { ADD_MOVIE } from "../Constants/actions-types";
export const addMovie=(payload)=>({
        type:ADD_MOVIE,
        payload,
    });
