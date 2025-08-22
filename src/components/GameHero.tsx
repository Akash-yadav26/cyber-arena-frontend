import { Button } from "@/components/ui/button";
import { Play, Trophy, Users } from "lucide-react";
import gamingHeroBg from "@/assets/gaming-hero-bg.jpg";

const GameHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${gamingHeroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Particle Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-green rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-blue rounded-full animate-bounce" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-neon-purple rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-neon-cyan rounded-full animate-bounce" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-gaming font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-neon-green via-neon-blue to-neon-purple bg-clip-text text-transparent">
              COMPETE.
            </span>
            <br />
            <span className="bg-gradient-to-r from-neon-purple via-neon-red to-neon-cyan bg-clip-text text-transparent">
              CONQUER.
            </span>
            <br />
            <span className="bg-gradient-to-r from-neon-cyan via-neon-green to-neon-blue bg-clip-text text-transparent">
              CONNECT.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-cyberpunk font-light max-w-3xl mx-auto leading-relaxed">
            Join the ultimate eSports tournament platform. Battle in Fortnite, PUBG, Valorant, and Apex Legends. 
            Rise through the ranks and claim your glory.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="gaming" size="lg" className="text-lg px-8 py-4 min-w-[200px]">
              <Play className="h-5 w-5" />
              Join Now
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 min-w-[200px]">
              <Trophy className="h-5 w-5" />
              Register Tournament
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-card p-6 text-center neon-border">
              <div className="text-3xl font-gaming font-bold text-neon-green mb-2">50K+</div>
              <div className="text-sm text-foreground/70 font-cyberpunk">Active Players</div>
            </div>
            <div className="glass-card p-6 text-center neon-border">
              <div className="text-3xl font-gaming font-bold text-neon-blue mb-2">1.2M</div>
              <div className="text-sm text-foreground/70 font-cyberpunk">Tournaments</div>
            </div>
            <div className="glass-card p-6 text-center neon-border">
              <div className="text-3xl font-gaming font-bold text-neon-purple mb-2">$2.5M</div>
              <div className="text-sm text-foreground/70 font-cyberpunk">Prize Pool</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-neon-green/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-green rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default GameHero;