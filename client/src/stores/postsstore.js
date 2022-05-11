import { writable } from 'svelte/store';

function getPosts() {
    const {subscribe, set, update} = writable(0)
        posts = {}
    return {
        subscribe,

    }
}

export const posts = getPosts()