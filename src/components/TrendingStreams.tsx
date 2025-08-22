import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Heart, Share2, ExternalLink } from "lucide-react";

const TrendingStreams = () => {
  const streams = [
    {
      id: 1,
      title: "INSANE Valorant Ace Clutch! 🔥",
      streamer: "ProGamer_X",
      game: "Valorant",
      viewers: "45.2K",
      likes: "12.4K",
      duration: "0:47",
      thumbnail: "🎯",
      platform: "Twitch",
      live: true
    },
    {
      id: 2,
      title: "Victory Royale with 20 Kills!",
      streamer: "BuildMaster",
      game: "Fortnite",
      viewers: "38.9K",
      likes: "9.8K",
      duration: "2:15",
      thumbnail: "🏆",
      platform: "YouTube",
      live: false
    },
    {
      id: 3,
      title: "Apex Legends Ranked Grind to Predator",
      streamer: "ApexLegend_Pro",
      game: "Apex Legends",
      viewers: "29.1K",
      likes: "7.2K",
      duration: "LIVE",
      thumbnail: "⚡",
      platform: "Twitch",
      live: true
    },
    {
      id: 4,
      title: "PUBG Squad Wipe Compilation",
      streamer: "SnipeKing",
      game: "PUBG",
      viewers: "22.7K",
      likes: "5.9K",
      duration: "1:32",
      thumbnail: "🎖️",
      platform: "YouTube",
      live: false
    }
  ];

  const highlights = [
    {
      title: "Best Plays of the Week",
      views: "156K",
      game: "Multi-Game",
      thumbnail: "🏅"
    },
    {
      title: "Tournament Finals Recap",
      views: "89K",
      game: "Valorant",
      thumbnail: "🏆"
    },
    {
      title: "Epic Comeback Moments",
      views: "67K",
      game: "Fortnite",
      thumbnail: "⭐"
    }
  ];

  return (
    <section id="streams" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-red to-neon-orange bg-clip-text text-transparent">
              TRENDING STREAMS
            </span>
          </h2>
          <p className="text-xl text-foreground/70 font-cyberpunk max-w-2xl mx-auto">
            Watch the hottest clips and live streams from the gaming community's finest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Streams */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {streams.map((stream) => (
                <Card key={stream.id} className="glass-card border-white/10 hover:border-neon-red/50 transition-all duration-300 group overflow-hidden">
                  <div className="relative">
                    {/* Thumbnail */}
                    <div className="aspect-video bg-gradient-to-br from-neon-red/20 to-neon-purple/20 flex items-center justify-center text-6xl border-b border-white/10">
                      {stream.thumbnail}
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="gaming" size="lg">
                        <Play className="h-5 w-5" />
                        Watch Now
                      </Button>
                    </div>

                    {/* Live Badge */}
                    {stream.live && (
                      <Badge className="absolute top-3 left-3 bg-neon-red/90 text-white border-0 font-cyberpunk">
                        <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                        LIVE
                      </Badge>
                    )}

                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-cyberpunk text-white">
                      {stream.duration}
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-gaming line-clamp-2 group-hover:text-neon-red transition-colors">
                      {stream.title}
                    </CardTitle>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neon-blue font-cyberpunk font-medium">{stream.streamer}</span>
                      <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple/50 text-xs">
                        {stream.platform}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-foreground/70">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1 text-neon-cyan" />
                          {stream.viewers}
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1 text-neon-red" />
                          {stream.likes}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Highlights Sidebar */}
          <div className="space-y-6">
            <h3 className="text-2xl font-gaming font-bold text-neon-orange mb-6">Top Highlights</h3>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="glass-card border-white/10 hover:border-neon-orange/50 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{highlight.thumbnail}</div>
                      <div className="flex-1">
                        <h4 className="font-gaming font-bold text-sm text-foreground mb-1 line-clamp-2">
                          {highlight.title}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-foreground/60">
                          <span className="font-cyberpunk">{highlight.game}</span>
                          <span>{highlight.views} views</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stream Categories */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-lg font-gaming text-foreground">Browse by Game</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["Valorant", "Fortnite", "Apex Legends", "PUBG", "Call of Duty"].map((game) => (
                  <div key={game} className="flex items-center justify-between p-2 rounded glass-button hover:bg-white/10 transition-colors cursor-pointer">
                    <span className="text-sm font-cyberpunk text-foreground">{game}</span>
                    <div className="flex items-center text-xs text-neon-green">
                      <span className="w-1.5 h-1.5 bg-neon-green rounded-full mr-2" />
                      Live
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Button variant="hero" className="w-full">
              <ExternalLink className="h-4 w-4" />
              View All Streams
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingStreams;