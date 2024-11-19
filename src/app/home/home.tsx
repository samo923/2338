// pages/index.js
export default function Home() {
  const name = "Tvoje meno"; // Nahrad "Tvoje meno" svojím menom

  return (
    <div>
      <h1>Vitaj na mojej Home stránke!</h1>
      <p>Moje meno je {name}.</p>
    </div>
  );
}
