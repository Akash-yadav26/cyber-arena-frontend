import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, Mic, Video, UserPlus, Hash } from "lucide-react";

const CommunityHub = () => {
  const squads = [
    {
      id: 1,
      name: "Cyber Legends",
      members: 24,
      game: "Valorant",
      status: "recruiting",
      level: "Pro",
      wins: 89,
      description: "Elite Valorant squad looking for skilled duelists"
    },
    {
      id: 2,
      name: "Storm Breakers",
      members: 18,
      game: "Fortnite",
      status: "active",
      level: "Champion",
      wins: 156,
      description: "Fortnite build battle masters and Victory Royale hunters"
    },
    {
      id: 3,
      name: "Apex Predators",
      members: 32,
      game: "Apex Legends",
      status: "recruiting",
      level: "Master",
      wins: 203,
      description: "Aggressive Apex squad seeking skilled teammates"
    }
  ];

  const liveChannels = [
    { name: "general", members: 1247, active: true },
    { name: "valorant-pro", members: 892, active: true },
    { name: "fortnite-builds", members: 634, active: false },
    { name: "apex-legends", members: 445, active: true },
    { name: "tournaments", members: 2156, active: true }
  ];

  const getStatusColor = (status: string) => {
    return status === "recruiting" 
      ? "bg-neon-green/20 text-neon-green border-neon-green/50"
      : "bg-neon-blue/20 text-neon-blue border-neon-blue/50";
  };

  return (
    <section id="community" className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              SQUAD HUB
            </span>
          </h2>
          <p className="text-xl text-foreground/70 font-cyberpunk max-w-2xl mx-auto">
            Connect with elite players, form unstoppable squads, and dominate together.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Squad Cards */}
          <div className="xl:col-span-2 space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-gaming font-bold text-neon-green mb-4 md:mb-6">Featured Squads</h3>
            {squads.map((squad) => (
              <Card key={squad.id} className="glass-card border-white/10 hover:border-neon-purple/50 transition-all duration-300">
                <CardHeader className="pb-3 md:pb-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg glass-card border border-neon-purple/30 flex items-center justify-center">
                        <Users className="h-5 w-5 md:h-6 md:w-6 text-neon-purple" />
                      </div>
                      <div>
                        <CardTitle className="text-lg md:text-xl font-gaming text-foreground">{squad.name}</CardTitle>
                        <p className="text-xs md:text-sm text-neon-blue font-cyberpunk">{squad.game}</p>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(squad.status)} border font-cyberpunk text-xs`}>
                      {squad.status.toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3 md:space-y-4">
                  <p className="text-xs md:text-sm text-foreground/70 font-cyberpunk">{squad.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 md:gap-4 py-2 md:py-3 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-sm md:text-base font-gaming font-bold text-neon-green">{squad.members}</div>
                      <div className="text-xs text-foreground/60">Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm md:text-base font-gaming font-bold text-neon-blue">{squad.level}</div>
                      <div className="text-xs text-foreground/60">Level</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm md:text-base font-gaming font-bold text-neon-purple">{squad.wins}</div>
                      <div className="text-xs text-foreground/60">Wins</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <Button variant="tournament" size="sm" className="flex-1 text-xs md:text-sm">
                      <UserPlus className="h-3 w-3 md:h-4 md:w-4" />
                      Join Squad
                    </Button>
                    <Button variant="hero" size="sm" className="text-xs md:text-sm">
                      <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                      Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Live Channels */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-xl md:text-2xl font-gaming font-bold text-neon-cyan mb-4 md:mb-6">Live Channels</h3>
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-lg font-gaming text-foreground flex items-center">
                  <Hash className="h-5 w-5 text-neon-cyan mr-2" />
                  Community Channels
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {liveChannels.map((channel) => (
                  <div key={channel.name} className="flex items-center justify-between p-3 rounded-lg glass-button hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${channel.active ? 'bg-neon-green animate-pulse' : 'bg-gray-500'}`} />
                      <span className="text-sm font-cyberpunk font-medium text-foreground">#{channel.name}</span>
                    </div>
                    <span className="text-xs text-foreground/60">{channel.members}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Voice Chat Controls */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-lg font-gaming text-foreground">Voice Chat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Button variant="hero" size="sm" className="flex-1">
                    <Mic className="h-4 w-4" />
                    Join Voice
                  </Button>
                  <Button variant="tournament" size="sm" className="flex-1">
                    <Video className="h-4 w-4" />
                    Video
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/70 font-cyberpunk">🎮 Gaming Lounge</span>
                    <span className="text-neon-green">12 active</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/70 font-cyberpunk">🏆 Tournament Prep</span>
                    <span className="text-neon-blue">8 active</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/70 font-cyberpunk">💬 General Chat</span>
                    <span className="text-neon-purple">24 active</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Button variant="gaming" size="lg">
            Create Your Squad
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityHub;