import "../App.css";

function App() {
  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">Clash Royale Companion</p>

        <h1>Build better decks. Understand better battles.</h1>

        <p className="heroText">
          Explore cards, compare decks, look up players, and analyze match data
          using real Clash Royale information.
        </p>

        <div className="heroActions">
          <button>Explore Cards</button>
          <button className="secondary">Look Up Player</button>
        </div>
      </section>

      <section className="features">
        <article className="featureCard">
          <h2>Card Browser</h2>
          <p>View card stats, elixir cost, rarity, and upgrade information.</p>
        </article>

        <article className="featureCard">
          <h2>Deck Builder</h2>
          <p>Create deck ideas and review average elixir cost and card roles.</p>
        </article>

        <article className="featureCard">
          <h2>Player Lookup</h2>
          <p>Search player profiles, trophies, arenas, and favorite cards.</p>
        </article>

        <article className="featureCard">
          <h2>Battle Analysis</h2>
          <p>Review recent battles and find patterns in wins, losses, and decks.</p>
        </article>
      </section>
    </main>
  );
}

export default App;