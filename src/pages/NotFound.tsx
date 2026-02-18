import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <section className="section-spacing">
      <div className="container-academy text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Page not found
        </p>
        <Button asChild variant="hero">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
