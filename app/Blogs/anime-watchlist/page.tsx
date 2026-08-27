import type { Metadata } from "next";
import styles from "./anime-watchlist.module.css";

export const metadata: Metadata = {
  title: "Anime I've Watched",
  description: "A personal list of anime I've watched.",
};

const animeList = [
  "I Want to Eat Your Pancreas",
  "Your Name",
  "A Silent Voice",
  "Weathering with You",
  "Jujutsu Kaisen 0",
  "Demon Slayer",
  "Attack on Titan",
  "Chainsaw Man",
  "One Piece 👑",
  "Vinland Saga",
  "Skip and Loafer",
  "The Way of the Househusband",
  "World's End Harem",
  "Monster",
  "Tokyo Ghoul",
  "Black Clover",
  "Berserk",
  "Death Note",
  "Jujutsu Kaisen (Series)",
  "Junji Ito Maniac: Japanese Tales of the Macabre",
  "The Garden of Words",
  "Bleach",
  "Solo Leveling",
  "Erased",
  "ReLIFE",
  "Grave of the Fireflies",
  "One Punch Man",
  "My Hero Academia",
  "Spy x Family",
  "Ghost Stories",
  "Neon Genesis Evangelion",
  "Cowboy Bebop",
  "Fullmetal Alchemist",
  "Hunter x Hunter",
  "Naruto",
  "The Seven Deadly Sins",
  "JoJo's Bizarre Adventure",
  "Gintama",
  "Cyberpunk: Edgerunners",
  "GTO: Great Teacher Onizuka",
  "Takopi's Original Sin",
  "Gachiakuta",
  "Vampire Hunter D: Bloodlust",
  "Ichigo Mashimaro",
  "Sakamoto Days",
  "Devilman Crybaby",
  "Bludgeoning Angel Dokuro-chan",
  "Mob Psycho 100",
  "Golden Kamuy",
  "...",
];

export default function AnimeWatchlistPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>
            Anime I've Watched
          </h1>
        </header>

        {/* Anime List */}
        <ol className={styles.animeList}>
          {animeList.map((anime, index) => (
            <li
              key={`${anime}-${index}`}
              className={styles.animeCard}
            >
              {anime}
            </li>
          ))}
        </ol>

      </div>
    </main>
  );
}