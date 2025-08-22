import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Clock, Trophy, Users, PlayCircle } from "lucide-react";

const LiveTournaments = () => {
  const liveTournaments = [
    {
      id: 1,
      title: "Valorant Champions League",
      game: "Valorant",
      status: "LIVE",
      viewers: "45.2K",
      timeLeft: "2h 34m",
      prizePool: "$50,000",
      teams: 16,
      matches: "Quarter Finals"
    },
    {
      id: 2,
      title: "Fortnite Battle Royale Cup",
      game: "Fortnite",
      status: "LIVE",
      viewers: "78.9K",
      timeLeft: "1h 12m",
      prizePool: "$100,000",
      teams: 100,
      matches: "Final Circle"
    },
    {
      id: 3,
      title: "PUBG Mobile Championship",
      game: "PUBG Mobile",
      status: "STARTING SOON",
      viewers: "32.1K",
      timeLeft: "45m",
      prizePool: "$75,000",
      teams: 32,
      matches: "Group Stage"
    },
    {
      id: 4,
      title: "Apex Legends Pro League",
      game: "Apex Legends",
      status: "LIVE",
      viewers: "21.5K",
      timeLeft: "3h 45m",
      prizePool: "$25,000",
      teams: 20,
      matches: "Semi Finals"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "LIVE":
        return "text-neon-red bg-neon-red/20 border-neon-red/50";
      case "STARTING SOON":
        return "text-neon-cyan bg-neon-cyan/20 border-neon-cyan/50";
      default:
        return "text-neon-green bg-neon-green/20 border-neon-green/50";
    }
  };

  return (
    <section id="tournaments" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-red to-neon-purple bg-clip-text text-transparent">
              LIVE TOURNAMENTS
            </span>
          </h2>
          <p className="text-xl text-foreground/70 font-cyberpunk max-w-2xl mx-auto">
            Watch epic battles unfold in real-time. Join the action or spectate the best players compete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {liveTournaments.map((tournament) => (
            <Card key={tournament.id} className="glass-card border-white/10 hover:border-neon-green/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-cyberpunk font-bold border ${getStatusColor(tournament.status)}`}>
                    {tournament.status === "LIVE" && <span className="inline-block w-2 h-2 bg-neon-red rounded-full mr-2 animate-pulse" />}
                    {tournament.status}
                  </span>
                  <div className="flex items-center text-sm text-foreground/60">
                    <Eye className="h-4 w-4 mr-1" />
                    {tournament.viewers}
                  </div>
                </div>
                <CardTitle className="text-xl font-gaming text-foreground group-hover:text-neon-green transition-colors">
                  {tournament.title}
                </CardTitle>
                <p className="text-neon-blue font-cyberpunk font-medium">{tournament.game}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-foreground/70">
                    <Clock className="h-4 w-4 mr-2 text-neon-cyan" />
                    {tournament.timeLeft} left
                  </div>
                  <div className="text-neon-purple font-cyberpunk font-semibold">
                    {tournament.matches}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-neon-green font-gaming font-bold">{tournament.prizePool}</div>
                    <div className="text-xs text-foreground/60">Prize Pool</div>
                  </div>
                  <div className="text-center">
                    <div className="text-neon-blue font-gaming font-bold">{tournament.teams}</div>
                    <div className="text-xs text-foreground/60">Teams</div>
                  </div>
                  <div className="text-center">
                    <div className="text-neon-purple font-gaming font-bold">{tournament.viewers}</div>
                    <div className="text-xs text-foreground/60">Viewers</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="tournament" size="sm" className="flex-1">
                    <PlayCircle className="h-4 w-4" />
                    Watch Live
                  </Button>
                  <Button variant="hero" size="sm" className="flex-1">
                    <Trophy className="h-4 w-4" />
                    Join
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="gaming" size="lg">
            View All Tournaments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveTournaments;