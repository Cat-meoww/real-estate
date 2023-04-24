import { writable } from 'svelte/store';

export let IsGrid = writable(false);
export let IsLoggedIn = writable(false);

export let testmodal = writable(false);
export let registermodal = writable(false);
