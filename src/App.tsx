import { Navigation } from "./components/sections/navigation";
import { Hero } from "./components/sections/hero";
import { About } from "./components/sections/about";
import { Features } from "./components/sections/features";
import { Gallery } from "./components/sections/gallery";
import { VideoStories } from "@/components/sections/video-stories";
import { Rooms } from "./components/sections/rooms";
import { Booking } from "./components/sections/booking";
import { Testimonials } from "./components/sections/testimonials";
import { Footer } from "./components/sections/footer";

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <section id="about">
        <About />
      </section>
      <Features />
      <Gallery />
      <VideoStories />
      <section id="rooms">
        <Rooms />
      </section>
      <Booking />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
