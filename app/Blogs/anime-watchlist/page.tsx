import type { Metadata } from "next";
import styles from "./anime-watchlist.module.css";

export const metadata: Metadata = {
  title: "Anime I've Watched",
  description: "A personal archive of anime I've watched.",
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
];

export default function AnimeWatchlistPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Top Navigation */}
        <div className={styles.topBar}>
          <span className={styles.terminal}>
            / personal / anime_archive
          </span>

          <span className={styles.status}>
            ● ARCHIVE ONLINE
          </span>
        </div>

        {/* Hero */}
        <header className={styles.hero}>
          <div className={styles.heroLabel}>
            MY PERSONAL ARCHIVE
          </div>

          <h1 className={styles.title}>
            Anime I&apos;ve
            <span> Watched.</span>
          </h1>

          <p className={styles.subtitle}>
            A collection of stories, characters and worlds that
            stayed with me long after the credits rolled.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>{animeList.length}</strong>
              <span>WATCHED</span>
            </div>

            <div className={styles.stat}>
              <strong>∞</strong>
              <span>MEMORIES</span>
            </div>

            <div className={styles.stat}>
              <strong>01</strong>
              <span>OBSESSION</span>
            </div>
          </div>
        </header>

        {/* Section Heading */}
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionNumber}>01 /</span>
            <h2>THE WATCHLIST</h2>
          </div>

          <span className={styles.count}>
            {animeList.length} TITLES
          </span>
        </div>

        {/* Anime Grid */}
        <ol className={styles.animeList}>
          {animeList.map((anime, index) => (
            <li
              key={`${anime}-${index}`}
              className={styles.animeCard}
            >
              <div className={styles.cardNumber}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className={styles.cardContent}>
                <span className={styles.cardLabel}>
                  ANIME_{String(index + 1).padStart(2, "0")}
                </span>

                <h3>{anime}</h3>
              </div>

              <span className={styles.arrow}>↗</span>
            </li>
          ))}
        </ol>

        {/* Footer */}
        <footer className={styles.footer}>
          <span>END OF ARCHIVE</span>
          <span>— KEEP WATCHING —</span>
        </footer>
      </div>
    </main>
  );
}