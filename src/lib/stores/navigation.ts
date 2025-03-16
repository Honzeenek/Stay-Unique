import { writable } from "svelte/store";

export const targetSection = writable<string | null>(null);
