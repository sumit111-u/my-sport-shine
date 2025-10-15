import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <Trophy className="w-16 h-16 mx-auto mb-6 text-primary" />
        <h1 className="mb-4 text-4xl md:text-6xl font-bold">Sports Booking Platform</h1>
        <p className="text-xl text-muted-foreground mb-8">Book tickets for the biggest sporting events</p>
        <Link to="/sports">
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary">
            Explore Sports Events
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
