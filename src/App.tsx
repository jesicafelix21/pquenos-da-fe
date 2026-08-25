import React, { useState } from 'react';
import { Music, Palette, Search, Hash, Copy, Trophy, ChevronRight, ChevronDown, Check, Star } from 'lucide-react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: 'Para qual idade é indicado?',
      a: 'O Pequenos da Fé é ideal para crianças de 3 a 12 anos, com interface intuitiva que dispensa leitura avançada.',
    },
    {
      q: 'O que vem no pacote?',
      a: 'Acesso completo a todos os jogos, histórias interativas e sistema de conquistas.',
    },
    {
      q: 'Preciso pagar todo mês?',
      a: 'Não! O pagamento é único. Você paga uma vez e tem acesso vitalício.',
    },
    {
      q: 'Funciona em quais aparelhos?',
      a: 'Funciona perfeitamente em celulares e tablets (Android e iOS).',
    },
    {
      q: 'É seguro para crianças?',
      a: 'Totalmente. O conteúdo é 100% cristão e educativo, sem anúncios ou links externos.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Navigation */}
      <nav className="py-6 px-6 flex items-center justify-between container mx-auto" id="nav-header">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm bg-white p-1 flex items-center justify-center border border-sky-100">
            <img
              src="./images/logo.png"
              alt="Pequenos da Fé Logo"
              className="w-full h-full object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="font-bold text-xl text-blue-900 leading-tight">Pequenos da Fé</h1>
            <p className="text-xs text-blue-500 font-medium">Brincando e aprendendo sobre o amor de Deus!</p>
          </div>
        </div>

        <div className="hidden md:flex gap-6 font-medium text-slate-700 items-center">
          <a href="#jogos" onClick={(e) => { e.preventDefault(); scrollToSection('jogos'); }} className="hover:text-blue-500 transition-colors">
            Jogos
          </a>
          <a href="#como-funciona" onClick={(e) => { e.preventDefault(); scrollToSection('como-funciona'); }} className="hover:text-blue-500 transition-colors">
            Como funciona
          </a>
          <a href="#famílias" onClick={(e) => { e.preventDefault(); scrollToSection('famílias'); }} className="hover:text-blue-500 transition-colors">
            Famílias
          </a>
          <a
            href="#oferta"
            onClick={(e) => { e.preventDefault(); scrollToSection('oferta'); }}
            className="bg-sky-400 text-white px-5 py-2 rounded-full font-bold hover:bg-sky-500 transition shadow-sm cursor-pointer"
          >
            Começar agora
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-8 pb-4 px-6 text-center relative overflow-hidden" style={{ backgroundColor: '#F0F9FF' }} id="hero-section">
        <div className="container mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full text-sky-500 font-bold mb-4 shadow-sm border border-sky-100 uppercase tracking-wider text-[10px] md:text-xs">
            <span>🎮</span> APP EDUCATIVO CRISTÃO
          </div>

          <h1 className="text-3xl md:text-5xl font-black mb-3 leading-tight max-w-2xl text-blue-900 px-4">
            “Um jeito divertido de conhecer a Palavra de Deus.”
          </h1>

          <p className="text-sm md:text-base mb-6 text-slate-600 max-w-xl mx-auto font-medium px-6 leading-relaxed">
            Jogos, histórias e atividades pensadas para aproximar as crianças da Bíblia com alegria e leveza.
          </p>

          <div className="relative w-full max-w-[280px] md:max-w-[320px] mb-6 flex justify-center items-center">
            <div className="absolute inset-0 bg-sky-200/40 rounded-full blur-3xl -z-10 scale-125 transform translate-y-10"></div>
            <div className="relative z-10 w-full">
              <img
                src="./images/app-mockup.png"
                alt="Pequenos da Fé App Mockup"
                className="w-full h-auto object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-[20%] -left-8 md:-left-12 text-3xl md:text-4xl pointer-events-none select-none z-20 drop-shadow-md animate-bounce" style={{ animationDuration: '3s' }}>
              ⭐
            </div>
            <div className="absolute top-[30%] -right-8 md:-right-12 text-3xl md:text-4xl pointer-events-none select-none z-20 drop-shadow-md">
              📚
            </div>
            <div className="absolute bottom-[10%] -left-4 md:-left-8 text-3xl md:text-4xl pointer-events-none select-none z-20 drop-shadow-md">
              ✏️
            </div>
          </div>

          <button
            onClick={() => scrollToSection('oferta')}
            id="btn-hero-cta"
            className="w-[85%] md:w-auto md:px-8 py-3.5 bg-[#22C55E] text-white rounded-2xl font-black text-base md:text-lg hover:bg-green-600 transition shadow-[0_4px_0_rgb(21,128,61)] mb-3 active:shadow-none active:translate-y-[2px] uppercase tracking-wide cursor-pointer"
          >
            QUERO AGORA POR R$27,90 🚀
          </button>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] md:text-xs text-blue-800/60 font-bold mb-6">
            <div className="flex items-center gap-1">✓ Pagamento único</div>
            <div className="flex items-center gap-1">✓ Acesso vitalício</div>
            <div className="flex items-center gap-1">✓ Acesso imediato</div>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2.5 max-w-[340px] md:max-w-none mx-auto">
            <div className="bg-[#BAE6FD]/30 border border-sky-200/50 px-3 py-2 rounded-xl flex items-center gap-2 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
              <span className="text-sm">⭐</span>
              <span className="text-[10px] md:text-xs text-blue-900 font-bold whitespace-nowrap">Jogos educativos</span>
            </div>
            <div className="bg-[#BAE6FD]/30 border border-sky-200/50 px-3 py-2 rounded-xl flex items-center gap-2 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
              <span className="text-sm">📖</span>
              <span className="text-[10px] md:text-xs text-blue-900 font-bold whitespace-nowrap">Histórias bíblicas</span>
            </div>
            <div className="bg-[#BAE6FD]/30 border border-sky-200/50 px-3 py-2 rounded-xl flex items-center gap-2 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
              <span className="text-sm">🏆</span>
              <span className="text-[10px] md:text-xs text-blue-900 font-bold whitespace-nowrap">Conquistas e desafios</span>
            </div>
            <div className="bg-[#BAE6FD]/30 border border-sky-200/50 px-3 py-2 rounded-xl flex items-center gap-2 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
              <span className="text-sm">❤️</span>
              <span className="text-[10px] md:text-xs text-blue-900 font-bold whitespace-nowrap">Conteúdo 100% cristão</span>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Wave Transition */}
      <div className="w-full h-10 md:h-12 overflow-hidden relative" style={{ backgroundColor: '#F0F9FF' }}>
        <div className="absolute w-full h-full bg-white rounded-t-[40px] md:rounded-t-[80px] border-t-2 md:border-t-4 border-white"></div>
      </div>

      {/* Games Catalog Section */}
      <section id="jogos" className="pt-10 pb-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-blue-900">Aprender a Bíblia é uma aventura! 🌈</h2>
        <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">Transformamos ensinamentos em experiências mágicas para as crianças.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
          {/* Card 1: Sons de Animais */}
          <div
            className="relative overflow-hidden h-24 px-5 rounded-[1.5rem] flex items-center shadow-md group cursor-pointer hover:shadow-lg transition-all"
            style={{ background: 'linear-gradient(135deg, #3B82F6EE, #3B82F6)' }}
            onClick={() => scrollToSection('jogos-acao')}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl select-none group-hover:opacity-20 transition-opacity pointer-events-none">
              🌊
            </div>
            <div className="absolute -bottom-4 -left-4 opacity-5 text-9xl select-none rotate-12 pointer-events-none">⭐</div>
            <div className="flex items-center gap-4 z-10 w-full text-left">
              <div className="shrink-0 w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center shadow-inner relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-12 h-12 rounded-full bg-white animate-pulse"></div>
                </div>
                <div className="relative z-10">
                  <div className="relative scale-110">
                    <Music className="w-9 h-9 text-white" />
                    <span className="absolute -top-1 -right-2 text-lg">🦁</span>
                    <span className="absolute -bottom-1 -left-1 text-xs">⛵</span>
                  </div>
                </div>
              </div>
              <div className="grow min-w-0 py-1">
                <h3 className="font-bold text-xl text-white mb-0 leading-tight tracking-tight drop-shadow-sm">Sons de Animais</h3>
                <p className="text-white/90 font-medium text-[12px] leading-tight line-clamp-2 opacity-90">Ouça e descubra os animais da Arca</p>
              </div>
              <div className="shrink-0">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all transform group-hover:scale-105">
                  <ChevronRight className="w-4 h-4 text-slate-800" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Pintando a Bíblia */}
          <div
            className="relative overflow-hidden h-24 px-5 rounded-[1.5rem] flex items-center shadow-md group cursor-pointer hover:shadow-lg transition-all"
            style={{ background: 'linear-gradient(135deg, #EC4899EE, #EC4899)' }}
            onClick={() => scrollToSection('jogos-acao')}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl select-none group-hover:opacity-20 transition-opacity pointer-events-none">
              🎨
            </div>
            <div className="absolute -bottom-4 -left-4 opacity-5 text-9xl select-none rotate-12 pointer-events-none">☁️</div>
            <div className="flex items-center gap-4 z-10 w-full text-left">
              <div className="shrink-0 w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center shadow-inner relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-12 h-12 rounded-full bg-white animate-pulse"></div>
                </div>
                <div className="relative z-10">
                  <div className="relative scale-110">
                    <Palette className="w-9 h-9 text-white" />
                    <span className="absolute -top-1 -right-2 text-lg">✏️</span>
                  </div>
                </div>
              </div>
              <div className="grow min-w-0 py-1">
                <h3 className="font-bold text-xl text-white mb-0 leading-tight tracking-tight drop-shadow-sm">Pintando a Bíblia</h3>
                <p className="text-white/90 font-medium text-[12px] leading-tight line-clamp-2 opacity-90">Desenhos cristãos para colorir</p>
              </div>
              <div className="shrink-0">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all transform group-hover:scale-105">
                  <ChevronRight className="w-4 h-4 text-slate-800" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Onde Está? */}
          <div
            className="relative overflow-hidden h-24 px-5 rounded-[1.5rem] flex items-center shadow-md group cursor-pointer hover:shadow-lg transition-all"
            style={{ background: 'linear-gradient(135deg, #F97316EE, #F97316)' }}
            onClick={() => scrollToSection('jogos-acao')}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl select-none group-hover:opacity-20 transition-opacity pointer-events-none">
              ⭐
            </div>
            <div className="absolute -bottom-4 -left-4 opacity-5 text-9xl select-none rotate-12 pointer-events-none">⭐</div>
            <div className="flex items-center gap-4 z-10 w-full text-left">
              <div className="shrink-0 w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center shadow-inner relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-12 h-12 rounded-full bg-white animate-pulse"></div>
                </div>
                <div className="relative z-10">
                  <div className="relative scale-110">
                    <Search className="w-9 h-9 text-white" />
                    <span className="absolute -top-2 -right-2 text-lg">✨</span>
                  </div>
                </div>
              </div>
              <div className="grow min-w-0 py-1">
                <h3 className="font-bold text-xl text-white mb-0 leading-tight tracking-tight drop-shadow-sm">Onde Está?</h3>
                <p className="text-white/90 font-medium text-[12px] leading-tight line-clamp-2 opacity-90">Encontre a imagem correta</p>
              </div>
              <div className="shrink-0">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all transform group-hover:scale-105">
                  <ChevronRight className="w-4 h-4 text-slate-800" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Conte e Toque */}
          <div
            className="relative overflow-hidden h-24 px-5 rounded-[1.5rem] flex items-center shadow-md group cursor-pointer hover:shadow-lg transition-all"
            style={{ background: 'linear-gradient(135deg, #22C55EEE, #22C55E)' }}
            onClick={() => scrollToSection('jogos-acao')}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl select-none group-hover:opacity-20 transition-opacity pointer-events-none">
              123
            </div>
            <div className="absolute -bottom-4 -left-4 opacity-5 text-9xl select-none rotate-12 pointer-events-none">☁️</div>
            <div className="flex items-center gap-4 z-10 w-full text-left">
              <div className="shrink-0 w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center shadow-inner relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-12 h-12 rounded-full bg-white animate-pulse"></div>
                </div>
                <div className="relative z-10">
                  <div className="relative scale-110">
                    <Hash className="w-9 h-9 text-white" />
                    <span className="absolute -top-2 -right-2 text-lg">🐑</span>
                  </div>
                </div>
              </div>
              <div className="grow min-w-0 py-1">
                <h3 className="font-bold text-xl text-white mb-0 leading-tight tracking-tight drop-shadow-sm">Conte e Toque</h3>
                <p className="text-white/90 font-medium text-[12px] leading-tight line-clamp-2 opacity-90">Aprenda os números brincando</p>
              </div>
              <div className="shrink-0">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all transform group-hover:scale-105">
                  <ChevronRight className="w-4 h-4 text-slate-800" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Jogo da Memória */}
          <div
            className="relative overflow-hidden h-24 px-5 rounded-[1.5rem] flex items-center shadow-md group cursor-pointer hover:shadow-lg transition-all"
            style={{ background: 'linear-gradient(135deg, #8B5CF6EE, #8B5CF6)' }}
            onClick={() => scrollToSection('jogos-acao')}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl select-none group-hover:opacity-20 transition-opacity pointer-events-none">
              🌟
            </div>
            <div className="absolute -bottom-4 -left-4 opacity-5 text-9xl select-none rotate-12 pointer-events-none">⭐</div>
            <div className="flex items-center gap-4 z-10 w-full text-left">
              <div className="shrink-0 w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center shadow-inner relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-12 h-12 rounded-full bg-white animate-pulse"></div>
                </div>
                <div className="relative z-10">
                  <div className="relative scale-110">
                    <Copy className="w-9 h-9 text-white" />
                    <span className="absolute -top-1 -right-2 text-lg">🧩</span>
                  </div>
                </div>
              </div>
              <div className="grow min-w-0 py-1">
                <h3 className="font-bold text-xl text-white mb-0 leading-tight tracking-tight drop-shadow-sm">Jogo da Memória</h3>
                <p className="text-white/90 font-medium text-[12px] leading-tight line-clamp-2 opacity-90">Encontre os pares bíblicos</p>
              </div>
              <div className="shrink-0">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all transform group-hover:scale-105">
                  <ChevronRight className="w-4 h-4 text-slate-800" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Missões da Fé */}
          <div
            className="relative overflow-hidden h-24 px-5 rounded-[1.5rem] flex items-center shadow-md group cursor-pointer hover:shadow-lg transition-all"
            style={{ background: 'linear-gradient(135deg, #06B6D4EE, #06B6D4)' }}
            onClick={() => scrollToSection('jogos-acao')}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl select-none group-hover:opacity-20 transition-opacity pointer-events-none">
              🛡️
            </div>
            <div className="absolute -bottom-4 -left-4 opacity-5 text-9xl select-none rotate-12 pointer-events-none">☁️</div>
            <div className="flex items-center gap-4 z-10 w-full text-left">
              <div className="shrink-0 w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center shadow-inner relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-12 h-12 rounded-full bg-white animate-pulse"></div>
                </div>
                <div className="relative z-10">
                  <div className="relative scale-110">
                    <Trophy className="w-9 h-9 text-white" />
                    <span className="absolute -top-2 -right-2 text-lg">⭐</span>
                  </div>
                </div>
              </div>
              <div className="grow min-w-0 py-1">
                <h3 className="font-bold text-xl text-white mb-0 leading-tight tracking-tight drop-shadow-sm">Missões da Fé</h3>
                <p className="text-white/90 font-medium text-[12px] leading-tight line-clamp-2 opacity-90">Pequenos desafios, grandes lições</p>
              </div>
              <div className="shrink-0">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all transform group-hover:scale-105">
                  <ChevronRight className="w-4 h-4 text-slate-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veja os jogos em ação Section */}
      <section id="jogos-acao" className="py-20 bg-white px-6 text-center relative overflow-hidden">
        <div className="absolute top-10 right-[10%] text-2xl opacity-20 pointer-events-none">⭐</div>
        <div className="absolute bottom-10 left-[10%] text-2xl opacity-20 pointer-events-none">✨</div>
        <div className="absolute top-1/2 left-5 text-2xl opacity-10 pointer-events-none">🌈</div>

        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-blue-900">Veja os jogos em ação 📸</h2>
          <p className="text-lg text-slate-500 mb-12 font-medium">Veja por dentro como é a experiência do Pequenos da Fé.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Screenshot 1: Sons de Animais */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col hover:shadow-xl transition-all">
              <div className="bg-slate-50 aspect-[9/16] flex items-center justify-center border-b border-slate-50 relative overflow-hidden mx-auto w-full md:max-w-md">
                <img
                  src="./images/sons-animais-screenshot.png"
                  alt="Sons de Animais"
                  className="w-full h-full object-contain object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="py-4 px-6 text-white font-bold text-lg flex items-center justify-center gap-2" style={{ backgroundColor: '#0EA5E9' }}>
                <span>🎮</span>
                <span>Sons de Animais</span>
              </div>
            </div>

            {/* Screenshot 2: Pintando a Bíblia */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col hover:shadow-xl transition-all">
              <div className="bg-slate-50 aspect-[9/16] flex items-center justify-center border-b border-slate-50 relative overflow-hidden mx-auto w-full md:max-w-md">
                <img
                  src="./images/pintando-biblia-screenshot.png"
                  alt="Pintando a Bíblia"
                  className="w-full h-full object-contain object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="py-4 px-6 text-white font-bold text-lg flex items-center justify-center gap-2" style={{ backgroundColor: '#EC4899' }}>
                <span>🎨</span>
                <span>Pintando a Bíblia</span>
              </div>
            </div>

            {/* Screenshot 3: Onde Está? */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col hover:shadow-xl transition-all">
              <div className="bg-slate-50 aspect-[9/16] flex items-center justify-center border-b border-slate-50 relative overflow-hidden mx-auto w-full md:max-w-md">
                <img
                  src="./images/onde-esta-screenshot.png"
                  alt="Onde Está?"
                  className="w-full h-full object-contain object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="py-4 px-6 text-white font-bold text-lg flex items-center justify-center gap-2" style={{ backgroundColor: '#F97316' }}>
                <span>🔎</span>
                <span>Onde Está?</span>
              </div>
            </div>

            {/* Screenshot 4: Jogo da Memória */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col hover:shadow-xl transition-all">
              <div className="bg-slate-50 aspect-[9/16] flex items-center justify-center border-b border-slate-50 relative overflow-hidden mx-auto w-full md:max-w-md">
                <img
                  src="./images/memory-game-screenshot.png"
                  alt="Jogo da Memória"
                  className="w-full h-full object-contain object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="py-4 px-6 text-white font-bold text-lg flex items-center justify-center gap-2" style={{ backgroundColor: '#8B5CF6' }}>
                <span>🧠</span>
                <span>Jogo da Memória</span>
              </div>
            </div>

            {/* Screenshot 5: Historinhas Bíblicas */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col hover:shadow-xl transition-all md:col-span-2 md:max-w-md md:mx-auto w-full">
              <div className="bg-slate-50 aspect-[9/16] flex items-center justify-center border-b border-slate-50 relative overflow-hidden mx-auto w-full">
                <img
                  src="./images/historinhas-screenshot.png"
                  alt="Historinhas Bíblicas"
                  className="w-full h-full object-contain object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="py-4 px-6 text-white font-bold text-lg flex items-center justify-center gap-2" style={{ backgroundColor: '#22C55E' }}>
                <span>📖</span>
                <span>Historinhas Bíblicas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid: Muito mais do que apenas jogos */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#F0F9FF' }}>
        <div className="absolute top-10 left-10 text-4xl opacity-20">☁️</div>
        <div className="absolute bottom-10 right-10 text-4xl opacity-20">☁️</div>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-blue-900">Muito mais do que apenas jogos.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition border-4 border-white">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="font-bold text-lg mb-2 text-blue-900">Histórias Bíblicas</h3>
              <p className="text-sm text-slate-500 font-medium">Conteúdos para aprender e conhecer histórias da Bíblia.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition border-4 border-white">
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="font-bold text-lg mb-2 text-blue-900">Meu Álbum</h3>
              <p className="text-sm text-slate-500 font-medium">A criança acompanha suas conquistas.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition border-4 border-white">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-bold text-lg mb-2 text-blue-900">Conquistas</h3>
              <p className="text-sm text-slate-500 font-medium">Estrelas, níveis e progresso tornam a experiência envolvente.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition border-4 border-white">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="font-bold text-lg mb-2 text-blue-900">Para as Famílias</h3>
              <p className="text-sm text-slate-500 font-medium">Conteúdos pensados para aproximar aprendizado e família.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Banner */}
      <section className="py-24 bg-sky-400 text-white px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Diversão que ensina valores para a vida toda.</h2>
          <p className="text-xl opacity-90 mb-12 font-medium">
            Aqui a criança participa, descobre e aprende enquanto se diverte em um ambiente seguro e cristão.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 shadow-inner">✨</div>
              <p className="font-bold">Estimula a curiosidade</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 shadow-inner">🎮</div>
              <p className="font-bold">Aprendizado interativo</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 shadow-inner">📖</div>
              <p className="font-bold text-sm leading-snug">Valores e histórias cristãs</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-black mb-16 text-blue-900">Simples de começar, impossível de parar!</h2>
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 border-t-2 border-dashed border-sky-200 -z-10"></div>
          <div className="flex-1 flex flex-col items-center bg-white p-6 rounded-3xl md:bg-transparent border md:border-0 border-sky-100">
            <div className="w-16 h-16 bg-sky-400 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 border-8 border-white shadow-lg">
              1
            </div>
            <h3 className="font-bold text-xl mb-2 text-blue-900">Acesse</h3>
            <p className="text-slate-500 font-medium">Abra o Pequenos da Fé no tablet ou celular.</p>
          </div>
          <div className="flex-1 flex flex-col items-center bg-white p-6 rounded-3xl md:bg-transparent border md:border-0 border-sky-100">
            <div className="w-16 h-16 bg-sky-400 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 border-8 border-white shadow-lg">
              2
            </div>
            <h3 className="font-bold text-xl mb-2 text-blue-900">Escolha</h3>
            <p className="text-slate-500 font-medium">A criança escolhe entre jogos ou histórias bíblicas.</p>
          </div>
          <div className="flex-1 flex flex-col items-center bg-white p-6 rounded-3xl md:bg-transparent border md:border-0 border-sky-100">
            <div className="w-16 h-16 bg-sky-400 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 border-8 border-white shadow-lg">
              3
            </div>
            <h3 className="font-bold text-xl mb-2 text-blue-900">Brinque</h3>
            <p className="text-slate-500 font-medium">Ganhe estrelas, complete desafios e aprenda sobre Deus.</p>
          </div>
        </div>
      </section>

      {/* Families / Testimonials Highlights */}
      <section id="famílias" className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-black mb-12 text-center text-blue-900">O que os pais mais amam ❤️</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-6 bg-sky-50 rounded-2xl border-4 border-white shadow-sm">
              <div className="text-sky-500 text-2xl">⭐</div>
              <p className="font-bold text-blue-900">Aprendizado leve e divertido</p>
            </div>
            <div className="flex items-center gap-4 p-6 bg-sky-50 rounded-2xl border-4 border-white shadow-sm">
              <div className="text-sky-500 text-2xl">⭐</div>
              <p className="font-bold text-blue-900">Interface segura e colorida</p>
            </div>
            <div className="flex items-center gap-4 p-6 bg-sky-50 rounded-2xl border-4 border-white shadow-sm">
              <div className="text-sky-500 text-2xl">⭐</div>
              <p className="font-bold text-blue-900">Histórias bíblicas interativas</p>
            </div>
            <div className="flex items-center gap-4 p-6 bg-sky-50 rounded-2xl border-4 border-white shadow-sm">
              <div className="text-sky-500 text-2xl">⭐</div>
              <p className="font-bold text-blue-900">Sistema de recompensas (estrelas)</p>
            </div>
            <div className="flex items-center gap-4 p-6 bg-sky-50 rounded-2xl border-4 border-white shadow-sm">
              <div className="text-sky-500 text-2xl">⭐</div>
              <p className="font-bold text-blue-900">Ambiente livre de anúncios</p>
            </div>
            <div className="flex items-center gap-4 p-6 bg-sky-50 rounded-2xl border-4 border-white shadow-sm">
              <div className="text-sky-500 text-2xl">⭐</div>
              <p className="font-bold text-blue-900">Experiência educativa e cristã</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer / Checkout Section */}
      <section id="oferta" className="py-20 px-6 text-center" style={{ backgroundColor: '#F0F9FF' }}>
        <div className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-2 border-sky-200 ring-4 ring-sky-100/30 transition-all hover:shadow-[0_20px_60px_rgba(56,189,248,0.2)]">
          <div className="mb-4 md:mb-6 flex justify-center">
            <img
              src="./images/checkout-mockup.png"
              alt="Pequenos da Fé Mockup"
              className="w-full h-auto max-w-[280px] md:max-w-[380px] object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-black mb-1 text-blue-900 leading-tight">Dê este presente para o seu pequeno! ⭐</h2>
          <p className="text-xs md:text-sm text-slate-500 mb-4 font-medium leading-tight">
            Acesso imediato a todos os jogos e histórias do Pequenos da Fé.
          </p>

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="line-through text-slate-400 text-base font-bold">R$ 97,00</span>
            <span className="text-3xl md:text-4xl font-black text-sky-500">R$ 27,90</span>
          </div>

          <div className="flex gap-1.5 justify-center mb-6 flex-wrap">
            <div className="px-2.5 py-1 bg-yellow-100 text-yellow-800 rounded-full font-bold text-[9px] uppercase tracking-wider">
              PAGAMENTO ÚNICO
            </div>
            <div className="px-2.5 py-1 bg-sky-100 text-sky-800 rounded-full font-bold text-[9px] uppercase tracking-wider">
              SEM MENSALIDADES
            </div>
            <div className="px-2.5 py-1 bg-purple-100 text-purple-800 rounded-full font-bold text-[9px] uppercase tracking-wider">
              ACESSO VITALÍCIO
            </div>
          </div>

          <button
            id="btn-checkout-submit"
            className="w-full max-w-xs mx-auto bg-[#22C55E] text-white px-6 py-3.5 rounded-2xl font-black text-base md:text-lg hover:bg-green-600 transition shadow-[0_4px_0_rgb(21,128,61)] transform hover:scale-[1.02] active:scale-95 active:shadow-none active:translate-y-[2px] block uppercase tracking-wide cursor-pointer"
          >
            QUERO O PEQUENOS DA FÉ
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 container mx-auto px-6 max-w-4xl text-blue-900">
        <h2 className="text-4xl font-black mb-16 text-center">Dúvidas comuns ❓</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-sky-50 p-6 md:p-8 rounded-3xl border-4 border-white shadow-sm cursor-pointer transition hover:bg-sky-100/60"
              onClick={() => toggleFaq(idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-sky-600 mb-0">{faq.q}</h3>
                <ChevronDown className={`w-5 h-5 text-sky-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </div>
              {(openFaq === idx || openFaq === null) && (
                <p className="text-blue-900/70 font-medium mt-3 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-center text-slate-400 border-t border-sky-100">
        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-sky-100 overflow-hidden">
          <img
            src="./images/logo.png"
            alt="Logo"
            className="w-full h-full object-contain p-1"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="font-bold text-blue-900 mb-1 text-lg">Pequenos da Fé</p>
        <p className="text-sm font-medium text-sky-500">Brincando e aprendendo sobre o amor de Deus.</p>
        <p className="text-xs mt-8 opacity-50">© 2026 Pequenos da Fé. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
