import { getFirestore, collection, getDocs } from "firebase/firestore";

// Initialize Firestore once
const db = getFirestore();

// Function to load games
const loadGames = async () => {
  // Use a try-catch block for error handling
  try {
    const gamesSnapshot = await getDocs(collection(db, "games"));
    return gamesSnapshot.docs.map(doc => doc.data());
  } catch (error) {
    // Handle errors, such as network issues or permission errors
    console.error("Failed to load games:", error);
    return [];
  }
};
