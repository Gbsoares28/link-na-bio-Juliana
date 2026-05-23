/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, MapPin, MessageCircle, Sparkles, ChevronRight, ExternalLink } from 'lucide-react';

const profile = {
  name: "Juliana Virla",
  image: "https://maapp.com.br/_next/image?url=https%3A%2F%2Fd118if3nwdjtgn.cloudfront.net%2F287637%2FPAGE_BIO_IMAGE%2F-1286223354&w=384&q=75",
  whatsapp: "https://api.whatsapp.com/send/?phone=5521994297998&text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20um%20hor%C3%A1rio",
  instagram: "https://www.instagram.com/studiojulianavirla",
  addressTitle: "Dom Condominium Club",
  addressFull: "R. José Bonifácio, 1050 - Todos os Santos, Rio de Janeiro - RJ, 20770-240, Bloco 2 - Sala 1203"
};

const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Dom Condominium Club " + profile.addressFull)}`;

const links = [
  {
    id: 'whatsapp',
    title: "Agende seu Horário",
    subtitle: "Atendimento e orçamentos pelo WhatsApp",
    description: "Reserve seu momento de autocuidado comigo. Agende seu horário para realizar procedimentos de cílios, sobrancelhas e lábios.",
    icon: MessageCircle,
    actionUrl: "https://api.whatsapp.com/send/?phone=5521994297998&text=Ol%C3%A1%20Juliana%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20e%20saber%20mais%20sobre%20os%20procedimentos.",
    actionLabel: "Falar no WhatsApp",
    highlight: true,
  },
  {
    id: 'cursos',
    title: "Cursos Profissionalizantes",
    subtitle: "Aprenda comigo e decole sua carreira 🚀",
    description: "Dê o próximo passo na sua carreira no mundo da beleza. Escolha entre cursos VIPs e turmas focadas em técnicas avançadas.",
    icon: Sparkles,
    actionUrl: "https://api.whatsapp.com/send/?phone=5521994297998&text=Ol%C3%A1%20Juliana%21%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20cursos%20profissionalizantes.",
    actionLabel: "Informações sobre Cursos",
    highlight: false,
  },
  {
    id: 'instagram',
    title: "Acompanhe meu Trabalho",
    subtitle: "@studiojulianavirla",
    description: "Confira meu portfólio completo, dicas diárias de beleza, resultados de alunas e os bastidores do nosso studio.",
    icon: Instagram,
    actionUrl: profile.instagram,
    actionLabel: "Acessar Instagram",
    highlight: false,
  },
  {
    id: 'location',
    title: "Como Chegar",
    subtitle: profile.addressTitle,
    description: "Estamos localizados no Condomínio Dom Offices, em frente ao Norte Shopping, em um ambiente preparado com muito carinho para receber você com total conforto.",
    icon: MapPin,
    actionUrl: googleMapsLink,
    actionLabel: "Abrir no Mapa",
    highlight: false,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function App() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div 
      className="min-h-screen font-sans text-stone-100 selection:bg-white/30 bg-cover bg-center bg-no-repeat bg-fixed relative"
      style={{ backgroundImage: 'url("https://i.ibb.co/DHGDKGbD/Prazer-sou-Juliana-Tenho-34-anos-sou-casada-e-m-e-de-dois-meninos-que-s-o-meu-maior-presente-d.jpg")' }}
    >
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/40 bg-gradient-to-t from-black/60 via-black/20 to-black/40 pointer-events-none" />

      <main className="relative z-10 max-w-lg mx-auto w-full px-5 py-12 flex flex-col items-center">
        {/* Profile Header */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <div className="relative mb-5 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-stone-300 to-stone-100 blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <img
              src={profile.image}
              alt={profile.name}
              className="relative w-28 h-28 object-cover rounded-full border-4 border-white shadow-sm ring-1 ring-stone-900/5"
            />
          </div>

          <h1 className="font-serif text-3xl font-semibold tracking-tight text-center text-white drop-shadow-sm">
            {profile.name}
          </h1>

          <div className="text-center mt-4 space-y-1.5 w-full flex flex-col items-center drop-shadow-sm">
            <p className="text-stone-200 font-medium tracking-widest uppercase text-[10px]">
              Master Lash • Educadora Beauty
            </p>
            <p className="text-stone-100 text-sm font-medium pt-1">
              Especialista em levantar sua autoestima 🌟
            </p>
            <p className="text-stone-100 text-sm font-medium">
              Permanent Makeup 👄
            </p>
            
            <div className="mt-4 pt-1">
              <span className="text-white text-sm font-medium bg-white/10 backdrop-blur-md border border-white/20 py-1.5 px-4 rounded-full inline-block shadow-sm">
                ✨ Cursos profissionalizantes 🚀
              </span>
            </div>
          </div>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full mt-10 space-y-3.5"
        >
          {links.map((link) => (
            <motion.div
              key={link.id}
              variants={itemVariants}
              className={`
                group relative flex flex-col w-full rounded-2xl overflow-hidden
                backdrop-blur-md transition-all duration-300 ease-out shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)] border
                ${
                  link.highlight
                    ? "bg-white/20 text-white border-white/40 hover:bg-white/30"
                    : "bg-black/30 hover:bg-black/40 text-white border-white/10 hover:border-white/20"
                }
              `}
            >
              <button
                onClick={() => setExpandedId(expandedId === link.id ? null : link.id)}
                className="flex items-center w-full p-4 text-left cursor-pointer"
              >
                <div
                  className={`
                    flex items-center justify-center w-12 h-12 rounded-full mr-4 shrink-0 transition-colors
                    ${
                      link.highlight
                        ? "bg-white/25 text-white shadow-sm"
                        : "bg-white/10 text-stone-200 group-hover:bg-white/20 group-hover:text-white"
                    }
                  `}
                >
                  <link.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                
                <div className="flex-1 text-left min-w-0 pr-4">
                  <p className="font-semibold text-[15px] leading-snug truncate text-white">
                    {link.title}
                  </p>
                  <p className="text-xs mt-0.5 truncate text-stone-300">
                    {link.subtitle}
                  </p>
                </div>

                <motion.div
                  animate={{ rotate: expandedId === link.id ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronRight className="w-5 h-5 opacity-50 text-white group-hover:opacity-100 transition-all" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedId === link.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-5 pt-1 border-t border-white/10">
                      <p className="text-sm mb-4 leading-relaxed text-stone-200">
                        {link.description}
                      </p>
                      
                      <a
                        href={link.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          flex items-center justify-center w-full py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200
                          ${
                            link.highlight
                              ? "bg-white text-black hover:bg-stone-100 shadow-sm"
                              : "bg-white/10 text-white hover:bg-white/20 border border-white/20 shadow-sm"
                          }
                        `}
                      >
                        {link.actionLabel}
                        <ExternalLink className="w-4 h-4 ml-2 opacity-80" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Directions Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[10px] font-semibold text-stone-400 uppercase tracking-widest mb-2 drop-shadow-sm">
            Localização
          </p>
          <p className="text-xs text-stone-300 max-w-xs mx-auto leading-relaxed drop-shadow-sm">
            {profile.addressFull}
          </p>
        </motion.div>
      </main>
    </div>
  );
}
