import Landing from "./components/Landing";
import Navigation from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navigation />
      <Landing />
    </main>
  );
}
