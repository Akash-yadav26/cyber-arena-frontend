import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Medal, Trophy, Star, Zap } from "lucide-react";

const Leaderboard = () => {
  const topPlayers = [
    {
      rank: 1,
      username: "ShadowStrike_99",
      avatar: "🥇",
      xp: 2847532,
      level: 89,
      wins: 1247,
      game: "Valorant",
      badge: "Champion",
      winRate: 94.2,
      country: "🇺🇸"
    },
    {
      rank: 2,
      username: "NeonGamer_X",
      avatar: "🥈",
      xp: 2456721,
      level: 82,
      wins: 1098,
      game: "Fortnite",
      badge: "Legend",
      winRate: 91.8,
      country: "🇰🇷"
    },
    {
      rank: 3,
      username: "CyberNinja_42",
      avatar: "🥉",
      xp: 2298453,
      level: 78,
      wins: 987,
      game: "Apex Legends",
      badge: "Master",
      winRate: 89.4,
      country: "🇯🇵"
    },
    {
      rank: 4,
      username: "EliteSniper_Pro",
      avatar: "👤",
      xp: 2156789,
      level: 75,
      wins: 876,
      game: "PUBG",
      badge: "Elite",
      winRate: 87.1,
      country: "🇧🇷"
    },
    {
      rank: 5,
      username: "GameChanger_21",
      avatar: "👤",
      xp: 2034567,
      level: 71,
      wins: 743,
      game: "Valorant",
      badge: "Pro",
      winRate: 85.6,
      country: "🇩🇪"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-400" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-300" />;
      case 3:
        return <Trophy className="h-6 w-6 text-amber-600" />;
      default:
        return <Star className="h-5 w-5 text-neon-blue" />;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Champion":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
      case "Legend":
        return "bg-purple-500/20 text-purple-400 border-purple-500/50";
      case "Master":
        return "bg-red-500/20 text-red-400 border-red-500/50";
      case "Elite":
        return "bg-blue-500/20 text-blue-400 border-blue-500/50";
      default:
        return "bg-green-500/20 text-green-400 border-green-500/50";
    }
  };

  return (
    <section id="leaderboard" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              GLOBAL LEADERBOARD
            </span>
          </h2>
          <p className="text-xl text-foreground/70 font-cyberpunk max-w-2xl mx-auto">
            Witness the legends who dominate the battlefield. Climb the ranks and join the elite.
          </p>
        </div>

        <div className="space-y-4">
          {topPlayers.map((player, index) => (
            <Card 
              key={player.rank} 
              className={`glass-card border-white/10 hover:border-neon-blue/50 transition-all duration-300 transform hover:scale-[1.02] ${
                player.rank <= 3 ? 'ring-2 ring-neon-green/20' : ''
              }`}
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
                  <div className="flex items-center space-x-3 md:space-x-6 w-full lg:w-auto">
                    {/* Rank */}
                    <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full glass-card border border-neon-blue/30">
                      <div className="text-center">
                        {getRankIcon(player.rank)}
                        <div className="text-xs md:text-sm font-gaming font-bold text-neon-blue mt-1">#{player.rank}</div>
                      </div>
                    </div>

                    {/* Avatar & Info */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl md:text-3xl">{player.avatar}</span>
                          <div>
                            <h3 className="text-base md:text-xl font-gaming font-bold text-foreground">
                              {player.username} {player.country}
                            </h3>
                            <p className="text-xs md:text-sm text-neon-cyan font-cyberpunk">Level {player.level} • {player.game}</p>
                          </div>
                        </div>
                        <Badge className={`${getBadgeColor(player.badge)} border font-cyberpunk text-xs`}>
                          {player.badge}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-3 md:gap-6 text-center w-full lg:w-auto">
                    <div>
                      <div className="text-lg md:text-2xl font-gaming font-bold text-neon-green">
                        {(player.xp / 1000000).toFixed(1)}M
                      </div>
                      <div className="text-xs text-foreground/60">XP</div>
                    </div>
                    <div>
                      <div className="text-lg md:text-2xl font-gaming font-bold text-neon-blue">
                        {player.wins}
                      </div>
                      <div className="text-xs text-foreground/60">Wins</div>
                    </div>
                    <div>
                      <div className="text-lg md:text-2xl font-gaming font-bold text-neon-purple">
                        {player.winRate}%
                      </div>
                      <div className="text-xs text-foreground/60">Win Rate</div>
                    </div>
                    <div className="flex items-center justify-center">
                      <Zap className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-foreground/60 font-cyberpunk mb-6">
            Think you have what it takes? Rise through the ranks and claim your spot!
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-neon-green/20 text-neon-green border-neon-green/50 px-4 py-2 text-sm font-cyberpunk">
              🏆 Top 1% Players
            </Badge>
            <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/50 px-4 py-2 text-sm font-cyberpunk">
              ⚡ Updated Live
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;