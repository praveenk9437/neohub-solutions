import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neo-black flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-[120px] font-black text-neo-orange/20 leading-none mb-4">404</div>
        <h1 className="text-neo-text text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-neo-muted text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button href="/" variant="primary">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </div>
    </div>
  );
}
