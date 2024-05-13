'use server'

import { Storage } from "@/lib/firebaseConfig";
import { getDownloadURL, listAll, ref } from "firebase/storage";


export async function readImagesBucket() {
    try {
        const storage = Storage;
        const storageRef = ref(storage, '/images/');
        const images = await listAll(storageRef);
        const urls = await Promise.all(images.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return url;
        }));
        return urls;
    } catch (error) {
        console.error('Error fetching hero image:', error);
        throw error; // Fehler weitergeben oder spezifisch behandeln
    }
}