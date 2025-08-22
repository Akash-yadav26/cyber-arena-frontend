import { Button } from "@/components/ui/button";
import { Search, Bell, User, Trophy, Gamepad2 } from "lucide-react";

const GameHeader = () => {
  return (
    <header className="glass-card sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="relative">
              <Gamepad2 className="h-6 w-6 md:h-8 md:w-8 text-neon-green" />
              <div className="absolute inset-0 h-6 w-6 md:h-8 md:w-8 text-neon-green animate-pulse opacity-50" />
            </div>
            <h1 className="text-lg md:text-2xl font-gaming font-bold bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              GameOn!
            </h1>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#tournaments" className="text-foreground hover:text-neon-green transition-colors font-cyberpunk font-medium">
              Tournaments
            </a>
            <a href="#leaderboard" className="text-foreground hover:text-neon-blue transition-colors font-cyberpunk font-medium">
              Leaderboard
            </a>
            <a href="#community" className="text-foreground hover:text-neon-purple transition-colors font-cyberpunk font-medium">
              Community
            </a>
            <a href="#streams" className="text-foreground hover:text-neon-cyan transition-colors font-cyberpunk font-medium">
              Streams
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search players, tournaments..."
                className="glass-button pl-10 pr-4 py-2 w-48 lg:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-neon-green/50"
              />
            </div>
            
            {/* Mobile Search Button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4 md:h-5 md:w-5" />
              <span className="absolute -top-1 -right-1 h-2 w-2 md:h-3 md:w-3 bg-neon-red rounded-full animate-pulse" />
            </Button>

            <Button variant="hero" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4" />
              Profile
            </Button>

            {/* Mobile Profile Icon */}
            <Button variant="hero" size="icon" className="sm:hidden">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;