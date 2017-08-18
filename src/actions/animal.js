import { ADD_ANIMAL } from './actionTypes'

export function addAnimal(animal) {
    return { type: ADD_ANIMAL, animal }
}