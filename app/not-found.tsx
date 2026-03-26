import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-lg px-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-plasma-400 to-teal-500 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-plasma-400/30">
          <Zap className="w-8 h-8 text-white fill-white" />
        </div>
        <h1 className="font-display text-6xl font-bold gradient-text mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-white/50 mb-8">
          This page seems to have evaporated, much like the skepticism around
          LENR. Let&apos;s get you back on track.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
