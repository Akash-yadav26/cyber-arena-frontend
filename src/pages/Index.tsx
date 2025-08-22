import GameHeader from "@/components/GameHeader";
import GameHero from "@/components/GameHero";
import LiveTournaments from "@/components/LiveTournaments";
import Leaderboard from "@/components/Leaderboard";
import CommunityHub from "@/components/CommunityHub";
import TrendingStreams from "@/components/TrendingStreams";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GameHeader />
      <main>
        <GameHero />
        <LiveTournaments />
        <Leaderboard />
        <CommunityHub />
        <TrendingStreams />
      </main>
      
      {/* Footer */}
      <footer className="glass-card border-t border-white/10 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-gaming font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent mb-4">
            GameOn!
          </h3>
          <p className="text-foreground/60 font-cyberpunk mb-6">
            The ultimate eSports tournament platform. Compete. Conquer. Connect.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-foreground/70">
            <a href="#" className="hover:text-neon-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neon-blue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neon-purple transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
