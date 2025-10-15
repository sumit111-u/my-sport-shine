import { Calendar, MapPin, Users, Trophy, Clock, Search, Filter, Star, Flame, TrendingUp, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Sports = () => {
  const [selectedSport, setSelectedSport] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const sportCategories = [
    {
      id: 1,
      name: "Cricket",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop",
      events: 12,
      trending: true
    },
    {
      id: 2,
      name: "Football",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
      events: 8,
      trending: true
    },
    {
      id: 3,
      name: "Basketball",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
      events: 6,
      trending: false
    },
    {
      id: 4,
      name: "Tennis",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&h=600&fit=crop",
      events: 10,
      trending: false
    },
    {
      id: 5,
      name: "Badminton",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&h=600&fit=crop",
      events: 7,
      trending: false
    },
    {
      id: 6,
      name: "Swimming",
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&h=600&fit=crop",
      events: 5,
      trending: false
    },
    {
      id: 7,
      name: "Kabaddi",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
      events: 4,
      trending: true
    },
    {
      id: 8,
      name: "Hockey",
      image: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&h=600&fit=crop",
      events: 6,
      trending: false
    },
    {
      id: 9,
      name: "Volleyball",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop",
      events: 3,
      trending: false
    },
    {
      id: 10,
      name: "Boxing",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop",
      events: 5,
      trending: false
    },
    {
      id: 11,
      name: "Athletics",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop",
      events: 8,
      trending: false
    },
    {
      id: 12,
      name: "Wrestling",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop",
      events: 4,
      trending: false
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "IPL 2025 - Mumbai vs Chennai",
      sport: "Cricket",
      venue: "Wankhede Stadium",
      location: "Mumbai",
      date: "March 25, 2025",
      time: "7:30 PM",
      price: "₹1,500",
      maxPrice: "₹5,000",
      available: 250,
      total: 300,
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=400&fit=crop",
      featured: true,
      status: "selling-fast",
      rating: 4.8
    },
    {
      id: 2,
      title: "ISL Final - Bengaluru FC vs ATK",
      sport: "Football",
      venue: "Kanteerava Stadium",
      location: "Bengaluru",
      date: "March 28, 2025",
      time: "8:00 PM",
      price: "₹800",
      maxPrice: "₹3,000",
      available: 180,
      total: 500,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop",
      featured: true,
      status: "available",
      rating: 4.9
    },
    {
      id: 3,
      title: "NBA Preseason - Lakers Exhibition",
      sport: "Basketball",
      venue: "Nesco Center",
      location: "Mumbai",
      date: "March 30, 2025",
      time: "6:00 PM",
      price: "₹2,000",
      maxPrice: "₹8,000",
      available: 120,
      total: 400,
      image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&h=400&fit=crop",
      featured: false,
      status: "available",
      rating: 4.7
    },
    {
      id: 4,
      title: "India Open Tennis Championship",
      sport: "Tennis",
      venue: "RK Khanna Stadium",
      location: "Delhi",
      date: "April 2, 2025",
      time: "5:00 PM",
      price: "₹1,200",
      maxPrice: "₹4,500",
      available: 200,
      total: 600,
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=400&fit=crop",
      featured: false,
      status: "available",
      rating: 4.6
    },
    {
      id: 5,
      title: "Pro Kabaddi League - Bengal vs Patna",
      sport: "Kabaddi",
      venue: "Netaji Indoor Stadium",
      location: "Kolkata",
      date: "April 5, 2025",
      time: "7:00 PM",
      price: "₹600",
      maxPrice: "₹2,500",
      available: 45,
      total: 400,
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=400&fit=crop",
      featured: true,
      status: "few-left",
      rating: 4.5
    },
    {
      id: 6,
      title: "Hockey India League - Delhi vs Mumbai",
      sport: "Hockey",
      venue: "Major Dhyan Chand Stadium",
      location: "Delhi",
      date: "April 8, 2025",
      time: "6:30 PM",
      price: "₹500",
      maxPrice: "₹2,000",
      available: 320,
      total: 500,
      image: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&h=400&fit=crop",
      featured: false,
      status: "available",
      rating: 4.3
    },
    {
      id: 7,
      title: "Premier Badminton League Finals",
      sport: "Badminton",
      venue: "Siri Fort Sports Complex",
      location: "Delhi",
      date: "April 10, 2025",
      time: "5:30 PM",
      price: "₹900",
      maxPrice: "₹3,500",
      available: 150,
      total: 300,
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&h=400&fit=crop",
      featured: false,
      status: "available",
      rating: 4.7
    },
    {
      id: 8,
      title: "Boxing Night Championship",
      sport: "Boxing",
      venue: "NSCI Dome",
      location: "Mumbai",
      date: "April 12, 2025",
      time: "8:00 PM",
      price: "₹1,800",
      maxPrice: "₹6,000",
      available: 25,
      total: 200,
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=400&fit=crop",
      featured: false,
      status: "few-left",
      rating: 4.8
    },
    {
      id: 9,
      title: "National Athletics Championship",
      sport: "Athletics",
      venue: "Jawaharlal Nehru Stadium",
      location: "Delhi",
      date: "April 15, 2025",
      time: "4:00 PM",
      price: "₹400",
      maxPrice: "₹1,500",
      available: 500,
      total: 1000,
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=400&fit=crop",
      featured: false,
      status: "available",
      rating: 4.4
    }
  ];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSport = selectedSport === "all" || event.sport.toLowerCase() === selectedSport.toLowerCase();
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSport && matchesSearch;
  });

  const featuredEvents = upcomingEvents.filter(event => event.featured);

  const getStatusBadge = (status: string, available: number, total: number) => {
    if (status === "few-left" || (available / total) < 0.2) {
      return <Badge className="bg-destructive text-destructive-foreground border-0"><Flame className="w-3 h-3 mr-1" />Few Left</Badge>;
    }
    if (status === "selling-fast" || (available / total) < 0.5) {
      return <Badge className="bg-primary text-primary-foreground border-0"><TrendingUp className="w-3 h-3 mr-1" />Selling Fast</Badge>;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-primary text-primary-foreground border-0">
            <Trophy className="w-4 h-4 mr-2" />
            Live Sports Experience
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Experience Sports Live
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book tickets for the biggest sporting events. From cricket to football, witness the action live!
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary">
            Browse Events
          </Button>
        </div>
      </section>

      {/* Sport Categories */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Popular Sports</h2>
          <p className="text-muted-foreground">Choose your favorite sport and explore upcoming events</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {sportCategories.map((category, index) => (
            <Card
              key={category.id}
              className="group relative overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedSport(category.name)}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                {category.trending && (
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground border-0">
                    <Star className="w-3 h-3 mr-1" />Hot
                  </Badge>
                )}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-lg font-bold mb-0.5">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.events} events</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3">
              <Star className="w-8 h-8 text-primary" />
              Featured Events
            </h2>
            <p className="text-muted-foreground">Don't miss these top picks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <Card
                key={event.id}
                className="group overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-primary animate-fade-in"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent"></div>
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                    <Badge className="bg-card/80 text-foreground border-border backdrop-blur-sm">
                      {event.sport}
                    </Badge>
                    {getStatusBadge(event.status, event.available, event.total)}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold">{event.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      <span className="line-clamp-1">{event.venue}, {event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      {event.date} • {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Ticket className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      {event.available} / {event.total} tickets left
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">From</p>
                      <p className="text-xl font-bold text-primary">{event.price}</p>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* All Events with Filters */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">All Events</h2>
          <p className="text-muted-foreground">Browse through all available sporting events</p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search events, venues, or locations..."
                className="pl-10 bg-secondary border-border focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          <Tabs value={selectedSport} onValueChange={setSelectedSport} className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto bg-secondary/50">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                All Sports
              </TabsTrigger>
              {sportCategories.slice(0, 8).map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.name}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEvents.map((event, index) => (
              <Card
                key={event.id}
                className="group overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative sm:w-2/5 h-56 sm:h-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent sm:bg-gradient-to-r"></div>
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                      <Badge className="bg-card/80 text-foreground border-border backdrop-blur-sm">
                        {event.sport}
                      </Badge>
                      {getStatusBadge(event.status, event.available, event.total)}
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center gap-1 bg-card/80 backdrop-blur-sm px-2 py-1 rounded">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-semibold">{event.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5 sm:w-3/5 flex flex-col">
                    <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4 flex-grow">
                      <div className="flex items-start text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{event.venue}, {event.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Ticket className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                        {event.available} / {event.total} tickets left
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="text-xs text-muted-foreground">From</p>
                        <p className="text-xl font-bold text-primary">{event.price}</p>
                        {event.maxPrice && (
                          <p className="text-xs text-muted-foreground">up to {event.maxPrice}</p>
                        )}
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center border-border bg-card">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-bold mb-2">No events found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedSport("all");
                setSearchQuery("");
              }}
            >
              Clear Filters
            </Button>
          </Card>
        )}
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8">
        <Card className="max-w-5xl mx-auto border-primary/20 bg-gradient-to-br from-card to-card/50 overflow-hidden">
          <div className="relative p-12 text-center">
            <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
            <Trophy className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss a Game</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get notified about the latest sports events, exclusive offers, and early bird discounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Sports;
