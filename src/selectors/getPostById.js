import { blogentries } from "../data/blogdata";

export const getPostbyId = (id = '') => {

    return blogentries.find(post => post.id === id);
}