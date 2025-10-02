import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wifi, Code, Award } from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";
import Logo from "@/components/Logo";
import { useNavigate } from "react-router-dom";

const UserApp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundEffects />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
        {/* Logo animé */}
        <div className="mb-12 animate-fade-slide-up">
          <Logo animated size="lg" />
        </div>

        {/* Message d'accueil */}
        <div className="text-center mb-12 space-y-3 animate-fade-slide-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Bienvenue sur MonWiFi
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-medium">
            Connectez-vous en 1 clic
          </p>
        </div>

        {/* Boutons principaux */}
        <div className="w-full max-w-md space-y-4 mb-8 animate-fade-slide-up" style={{ animationDelay: "0.2s" }}>
          {/* Bouton principal XXL */}
          <Button
            onClick={() => navigate("/packages")}
            className="w-full h-20 text-2xl font-bold bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg glow-gold"
          >
            <Wifi className="mr-3" size={32} />
            Acheter WiFi
          </Button>

          {/* Bouton secondaire */}
          <Button
            onClick={() => navigate("/redeem-code")}
            variant="outline"
            className="w-full h-16 text-xl font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 glass"
          >
            <Code className="mr-2" size={24} />
            J'ai un code
          </Button>
        </div>

        {/* Message de réassurance */}
        <div className="text-center mb-6 animate-fade-slide-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-white/80 text-sm flex items-center justify-center gap-2">
            <span className="text-lg">🔒</span>
            Paiement sécurisé • 100% Cameroun 🇨🇲
          </p>
        </div>

        {/* Lien ambassadeur discret */}
        <button
          onClick={() => navigate("/ambassador")}
          className="text-gold-light hover:text-gold-warm transition-smooth flex items-center gap-2 font-medium animate-fade-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Award size={20} />
          💎 Devenir Ambassadeur
        </button>
      </main>
    </div>
  );
};

export default UserApp;
