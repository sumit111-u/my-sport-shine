import { Calendar, MapPin, Users, Trophy, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Sports = () => {
  const sportCategories = [
    {
      id: 1,
      name: "Cricket",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop",
      events: 12,
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      name: "Football",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
      events: 8,
      color: "from-green-600 to-green-800"
    },
    {
      id: 3,
      name: "Basketball",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
      events: 6,
      color: "from-orange-600 to-orange-800"
    },
    {
      id: 4,
      name: "Tennis",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&h=600&fit=crop",
      events: 10,
      color: "from-yellow-600 to-yellow-800"
    },
    {
      id: 5,
      name: "Badminton",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&h=600&fit=crop",
      events: 7,
      color: "from-purple-600 to-purple-800"
    },
    {
      id: 6,
      name: "Swimming",
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&h=600&fit=crop",
      events: 5,
      color: "from-cyan-600 to-cyan-800"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "IPL 2025 - Mumbai vs Chennai",
      sport: "Cricket",
      venue: "Wankhede Stadium",
      date: "March 25, 2025",
      time: "7:30 PM",
      price: "₹1,500",
      available: 250,
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "ISL Final - Bengaluru FC vs ATK",
      sport: "Football",
      venue: "Kanteerava Stadium",
      date: "March 28, 2025",
      time: "8:00 PM",
      price: "₹800",
      available: 180,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "NBA Preseason - Lakers Exhibition",
      sport: "Basketball",
      venue: "Nesco Center",
      date: "March 30, 2025",
      time: "6:00 PM",
      price: "₹2,000",
      available: 120,
      image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "India Open Tennis Championship",
      sport: "Tennis",
      venue: "RK Khanna Stadium",
      date: "April 2, 2025",
      time: "5:00 PM",
      price: "₹1,200",
      available: 200,
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=400&fit=crop"
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportCategories.map((category) => (
            <Card
              key={category.id}
              className="group relative overflow-hidden border-border bg-card hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.events} upcoming events</p>
                </div>
              </div>
              <div className="p-4">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                  View Events
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Upcoming Events</h2>
          <p className="text-muted-foreground">Don't miss out on the most anticipated sporting events</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="group overflow-hidden border-border bg-card hover:border-primary transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground border-0">
                    {event.sport}
                  </Badge>
                </div>
                
                <div className="p-6 md:w-3/5 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 flex-grow">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {event.venue}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      {event.available} tickets available
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-primary">{event.price}</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
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
