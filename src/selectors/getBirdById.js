import {birds} from '../data/hardcodeddata';

export const getBirdById = (id = '') => {

    return birds.find(bird => bird.id === id);
}