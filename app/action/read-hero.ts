'use server'

import { Storage } from "@/lib/firebaseConfig";
import { getDownloadURL, ref } from "firebase/storage";


export async function readHero() {
    try {
        const storage = Storage;
        const storageRef = ref(storage, 'hero.mp4');
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error('Error fetching hero image:', error);
        throw error; // Fehler weitergeben oder spezifisch behandeln
    }
}