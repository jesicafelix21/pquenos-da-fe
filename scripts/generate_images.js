import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDirs = ['./public/images', './images', './public'];
outDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

async function saveSvgAsPng(svgContent, filenames, width, height) {
  const buffer = Buffer.from(svgContent);
  for (const fn of filenames) {
    await sharp(buffer)
      .resize(width, height)
      .png({ quality: 100 })
      .toFile(fn);
    console.log(`Generated ${fn} (${width}x${height})`);
  }
}

// 1. Favicon (Wine/burgundy rounded box with white shining star)
const faviconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="favGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#831843" />
      <stop offset="100%" stop-color="#500724" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="110" fill="url(#favGrad)" />
  <g transform="translate(256, 256)">
    <!-- 4-point sparkle star -->
    <path d="M 0,-180 Q 0,-30 180,0 Q 0,30 0,180 Q 0,30 -180,0 Q 0,-30 0,-180 Z" fill="#FFFFFF" />
    <circle cx="0" cy="0" r="28" fill="#FDF2F8" />
  </g>
</svg>`;

// 2. Logo (Pequenos da Fé colorful logo)
const logoSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7" />
      <stop offset="100%" stop-color="#0369A1" />
    </linearGradient>
    <linearGradient id="rainbow1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#EF4444" />
      <stop offset="33%" stop-color="#F59E0B" />
      <stop offset="66%" stop-color="#10B981" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>
    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="512" height="512" rx="120" fill="url(#logoBg)"/>
  
  <!-- Cloud & Rainbow -->
  <path d="M 120,240 A 136,136 0 0,1 392,240" fill="none" stroke="#FDE047" stroke-width="24" stroke-linecap="round"/>
  <path d="M 144,240 A 112,112 0 0,1 368,240" fill="none" stroke="#38BDF8" stroke-width="20" stroke-linecap="round"/>
  <path d="M 166,240 A 90,90 0 0,1 346,240" fill="none" stroke="#F472B6" stroke-width="18" stroke-linecap="round"/>

  <!-- Bible Book Open Base -->
  <g transform="translate(106, 220)" filter="url(#dropShadow)">
    <path d="M 150,130 Q 80,105 0,115 L 0,35 Q 80,25 150,55 Z" fill="#F8FAFC"/>
    <path d="M 150,130 Q 220,105 300,115 L 300,35 Q 220,25 150,55 Z" fill="#FFFFFF"/>
    <!-- Bookmark ribbon -->
    <path d="M 150,55 L 150,150 L 138,138 L 126,150 L 126,55 Z" fill="#EF4444"/>
    <!-- Cross on Bible -->
    <rect x="210" y="55" width="16" height="50" rx="8" fill="#F59E0B"/>
    <rect x="193" y="68" width="50" height="16" rx="8" fill="#F59E0B"/>
  </g>

  <!-- Cheerful glowing star -->
  <g transform="translate(256, 120)">
    <polygon points="0,-48 14,-15 48,-15 21,5 31,38 0,19 -31,38 -21,5 -48,-15 -14,-15" fill="#FACC15" filter="url(#dropShadow)"/>
    <circle cx="-6" cy="-5" r="3" fill="#854D0E"/>
    <circle cx="6" cy="-5" r="3" fill="#854D0E"/>
    <path d="M -6,5 Q 0,10 6,5" stroke="#854D0E" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>

  <!-- Sparkles -->
  <circle cx="100" cy="120" r="10" fill="#FEF08A"/>
  <circle cx="410" cy="140" r="12" fill="#FEF08A"/>
  <circle cx="390" cy="380" r="8" fill="#BAE6FD"/>
</svg>`;

// 3. App Mockup (Front hero phone showcasing Pequenos da Fé UI)
const appMockupSvg = `
<svg width="700" height="1100" viewBox="0 0 700 1100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="phoneBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="screenBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E0F2FE"/>
      <stop offset="60%" stop-color="#F0F9FF"/>
      <stop offset="100%" stop-color="#FFFFFF"/>
    </linearGradient>
    <filter id="phoneShadow" x="-20%" y="-10%" width="140%" height="130%">
      <feDropShadow dx="0" dy="25" stdDeviation="30" flood-opacity="0.35" flood-color="#0369A1"/>
    </filter>
  </defs>

  <!-- Phone Bezel -->
  <rect x="60" y="40" width="580" height="1020" rx="64" fill="url(#phoneBody)" filter="url(#phoneShadow)"/>
  <rect x="72" y="52" width="556" height="996" rx="52" fill="#334155"/>
  <!-- Phone Screen -->
  <rect x="80" y="60" width="540" height="980" rx="44" fill="url(#screenBg)"/>

  <!-- Dynamic Island Notch -->
  <rect x="250" y="75" width="200" height="32" rx="16" fill="#0F172A"/>
  <circle cx="420" cy="91" r="5" fill="#1E293B"/>

  <!-- App Header inside Phone -->
  <g transform="translate(110, 130)">
    <!-- Avatar & Greetings -->
    <rect x="0" y="0" width="60" height="60" rx="30" fill="#38BDF8"/>
    <text x="30" y="38" font-family="sans-serif" font-size="28" text-anchor="middle">🦁</text>
    <text x="75" y="26" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0369A1">Olá, Pequeno!</text>
    <text x="75" y="48" font-family="sans-serif" font-size="20" font-weight="900" fill="#0C4A6E">Pequenos da Fé ✨</text>
    <!-- Star Points Pill -->
    <rect x="360" y="8" width="120" height="44" rx="22" fill="#FEF08A"/>
    <text x="382" y="36" font-family="sans-serif" font-size="22">⭐</text>
    <text x="415" y="37" font-family="sans-serif" font-size="18" font-weight="900" fill="#854D0E">240</text>
  </g>

  <!-- Featured Banner -->
  <g transform="translate(110, 215)">
    <rect x="0" y="0" width="480" height="150" rx="28" fill="#0284C7"/>
    <!-- Decorative rainbow arc in banner -->
    <path d="M 280,150 A 100,100 0 0,1 480,150" fill="none" stroke="#38BDF8" stroke-width="16" opacity="0.5"/>
    <text x="24" y="42" font-family="sans-serif" font-size="14" font-weight="bold" fill="#BAE6FD">HISTÓRIA DO DIA</text>
    <text x="24" y="78" font-family="sans-serif" font-size="24" font-weight="900" fill="#FFFFFF">A Arca de Noé ⛵</text>
    <text x="24" y="105" font-family="sans-serif" font-size="14" fill="#E0F2FE">Embarque nessa grande aventura!</text>
    <rect x="24" y="115" width="110" height="24" rx="12" fill="#22C55E"/>
    <text x="79" y="132" font-family="sans-serif" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">JOGAR AGORA</text>
    <!-- Character in banner -->
    <text x="400" y="105" font-family="sans-serif" font-size="70" text-anchor="middle">🌈</text>
  </g>

  <!-- Game Cards Grid inside Phone -->
  <!-- Card 1: Sons de Animais -->
  <g transform="translate(110, 390)">
    <rect x="0" y="0" width="225" height="170" rx="24" fill="#3B82F6"/>
    <rect x="18" y="18" width="56" height="56" rx="18" fill="#FFFFFF" opacity="0.25"/>
    <text x="46" y="56" font-family="sans-serif" font-size="32" text-anchor="middle">🦁</text>
    <text x="18" y="115" font-family="sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">Sons de</text>
    <text x="18" y="138" font-family="sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">Animais</text>
    <text x="18" y="156" font-family="sans-serif" font-size="12" fill="#DBEAFE">Descubra a Arca</text>
    <circle cx="195" cy="140" r="16" fill="#FFFFFF"/>
    <text x="195" y="146" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#1D4ED8">▶</text>
  </g>

  <!-- Card 2: Pintando a Bíblia -->
  <g transform="translate(365, 390)">
    <rect x="0" y="0" width="225" height="170" rx="24" fill="#EC4899"/>
    <rect x="18" y="18" width="56" height="56" rx="18" fill="#FFFFFF" opacity="0.25"/>
    <text x="46" y="56" font-family="sans-serif" font-size="32" text-anchor="middle">🎨</text>
    <text x="18" y="115" font-family="sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">Pintando</text>
    <text x="18" y="138" font-family="sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">a Bíblia</text>
    <text x="18" y="156" font-family="sans-serif" font-size="12" fill="#FCE7F3">Colorir e criar</text>
    <circle cx="195" cy="140" r="16" fill="#FFFFFF"/>
    <text x="195" y="146" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#BE185D">▶</text>
  </g>

  <!-- Card 3: Onde Está? -->
  <g transform="translate(110, 580)">
    <rect x="0" y="0" width="225" height="170" rx="24" fill="#F97316"/>
    <rect x="18" y="18" width="56" height="56" rx="18" fill="#FFFFFF" opacity="0.25"/>
    <text x="46" y="56" font-family="sans-serif" font-size="32" text-anchor="middle">🔎</text>
    <text x="18" y="115" font-family="sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">Onde</text>
    <text x="18" y="138" font-family="sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">Está?</text>
    <text x="18" y="156" font-family="sans-serif" font-size="12" fill="#FFEDD5">Encontre objetos</text>
    <circle cx="195" cy="140" r="16" fill="#FFFFFF"/>
    <text x="195" y="146" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#C2410C">▶</text>
  </g>

  <!-- Card 4: Jogo da Memória -->
  <g transform="translate(365, 580)">
    <rect x="0" y="0" width="225" height="170" rx="24" fill="#8B5CF6"/>
    <rect x="18" y="18" width="56" height="56" rx="18" fill="#FFFFFF" opacity="0.25"/>
    <text x="46" y="56" font-family="sans-serif" font-size="32" text-anchor="middle">🧠</text>
    <text x="18" y="115" font-family="sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">Jogo da</text>
    <text x="18" y="138" font-family="sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">Memória</text>
    <text x="18" y="156" font-family="sans-serif" font-size="12" fill="#EDE9FE">Pares bíblicos</text>
    <circle cx="195" cy="140" r="16" fill="#FFFFFF"/>
    <text x="195" y="146" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#6D28D9">▶</text>
  </g>

  <!-- Card 5: Historinhas Bíblicas -->
  <g transform="translate(110, 770)">
    <rect x="0" y="0" width="225" height="170" rx="24" fill="#22C55E"/>
    <rect x="18" y="18" width="56" height="56" rx="18" fill="#FFFFFF" opacity="0.25"/>
    <text x="46" y="56" font-family="sans-serif" font-size="32" text-anchor="middle">📖</text>
    <text x="18" y="115" font-family="sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">Historinhas</text>
    <text x="18" y="138" font-family="sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">Bíblicas</text>
    <text x="18" y="156" font-family="sans-serif" font-size="12" fill="#DCFCE7">Leituras de fé</text>
    <circle cx="195" cy="140" r="16" fill="#FFFFFF"/>
    <text x="195" y="146" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#15803D">▶</text>
  </g>

  <!-- Card 6: Missões da Fé -->
  <g transform="translate(365, 770)">
    <rect x="0" y="0" width="225" height="170" rx="24" fill="#06B6D4"/>
    <rect x="18" y="18" width="56" height="56" rx="18" fill="#FFFFFF" opacity="0.25"/>
    <text x="46" y="56" font-family="sans-serif" font-size="32" text-anchor="middle">🏆</text>
    <text x="18" y="115" font-family="sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">Missões</text>
    <text x="18" y="138" font-family="sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">da Fé</text>
    <text x="18" y="156" font-family="sans-serif" font-size="12" fill="#CFFAFE">Grandes lições</text>
    <circle cx="195" cy="140" r="16" fill="#FFFFFF"/>
    <text x="195" y="146" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#0E7490">▶</text>
  </g>

  <!-- Bottom Navigation Bar inside Phone -->
  <g transform="translate(110, 960)">
    <rect x="0" y="0" width="480" height="60" rx="20" fill="#FFFFFF" opacity="0.95"/>
    <text x="60" y="38" font-family="sans-serif" font-size="24" text-anchor="middle">🏠</text>
    <text x="180" y="38" font-family="sans-serif" font-size="24" text-anchor="middle">🎮</text>
    <text x="300" y="38" font-family="sans-serif" font-size="24" text-anchor="middle">⭐</text>
    <text x="420" y="38" font-family="sans-serif" font-size="24" text-anchor="middle">⚙️</text>
  </g>
</svg>`;

// 4. Screenshot 1: Sons de Animais (9:16 aspect ratio, e.g. 540x960)
const sonsAnimaisSvg = `
<svg width="540" height="960" viewBox="0 0 540 960" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="skyBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="60%" stop-color="#BAE6FD"/>
      <stop offset="100%" stop-color="#E0F2FE"/>
    </linearGradient>
  </defs>
  <rect width="540" height="960" fill="url(#skyBg)"/>

  <!-- Top bar -->
  <rect x="20" y="30" width="500" height="70" rx="20" fill="#FFFFFF" opacity="0.9"/>
  <text x="50" y="74" font-family="sans-serif" font-size="28" font-weight="900" fill="#0284C7">🔊 Sons de Animais</text>
  <rect x="420" y="42" width="80" height="46" rx="23" fill="#FEF08A"/>
  <text x="460" y="72" font-family="sans-serif" font-size="18" font-weight="bold" fill="#854D0E" text-anchor="middle">⭐ 15</text>

  <!-- Big Interactive Ark & Animals Area -->
  <g transform="translate(40, 130)">
    <rect width="460" height="460" rx="36" fill="#FFFFFF" filter="drop-shadow(0 15px 30px rgba(0,0,0,0.1))"/>
    
    <!-- Sun & Clouds -->
    <circle cx="400" cy="70" r="35" fill="#FACC15"/>
    <text x="80" y="80" font-family="sans-serif" font-size="48">☁️</text>
    
    <!-- Noah's Ark Floating -->
    <path d="M 80,340 C 120,400 340,400 380,340 L 390,260 L 70,260 Z" fill="#92400E"/>
    <rect x="160" y="190" width="140" height="80" rx="12" fill="#B45309"/>
    <polygon points="140,195 230,130 320,195" fill="#DC2626"/>

    <!-- Animal Characters inside Ark -->
    <text x="190" y="245" font-family="sans-serif" font-size="44" text-anchor="middle">🦁</text>
    <text x="270" y="245" font-family="sans-serif" font-size="44" text-anchor="middle">🐑</text>
    <text x="130" y="280" font-family="sans-serif" font-size="40" text-anchor="middle">🐘</text>
    <text x="330" y="280" font-family="sans-serif" font-size="40" text-anchor="middle">🦒</text>
    <text x="230" y="125" font-family="sans-serif" font-size="34" text-anchor="middle">🕊️</text>

    <!-- Water Waves -->
    <path d="M 20,370 Q 75,340 130,370 T 240,370 T 350,370 T 440,370 L 440,440 L 20,440 Z" fill="#0284C7" opacity="0.8"/>
    <path d="M 20,390 Q 80,365 140,390 T 260,390 T 380,390 T 440,390 L 440,440 L 20,440 Z" fill="#0369A1"/>
  </g>

  <!-- Audio Prompt Box -->
  <g transform="translate(40, 620)">
    <rect width="460" height="120" rx="28" fill="#3B82F6"/>
    <circle cx="70" cy="60" r="32" fill="#FFFFFF"/>
    <text x="70" y="70" font-family="sans-serif" font-size="28" text-anchor="middle" fill="#3B82F6">🔊</text>
    <text x="120" y="50" font-family="sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">Quem faz "ROAAAR"?</text>
    <text x="120" y="80" font-family="sans-serif" font-size="16" fill="#DBEAFE">Toque no animal que fez o som</text>
  </g>

  <!-- Animal Choice Buttons -->
  <g transform="translate(40, 765)">
    <rect x="0" y="0" width="100" height="100" rx="24" fill="#FFFFFF"/>
    <text x="50" y="65" font-family="sans-serif" font-size="48" text-anchor="middle">🦁</text>

    <rect x="120" y="0" width="100" height="100" rx="24" fill="#FFFFFF"/>
    <text x="170" y="65" font-family="sans-serif" font-size="48" text-anchor="middle">🐑</text>

    <rect x="240" y="0" width="100" height="100" rx="24" fill="#FFFFFF"/>
    <text x="290" y="65" font-family="sans-serif" font-size="48" text-anchor="middle">🐸</text>

    <rect x="360" y="0" width="100" height="100" rx="24" fill="#FFFFFF"/>
    <text x="410" y="65" font-family="sans-serif" font-size="48" text-anchor="middle">🐮</text>
  </g>

  <!-- Progress bar -->
  <rect x="40" y="890" width="460" height="18" rx="9" fill="#FFFFFF" opacity="0.5"/>
  <rect x="40" y="890" width="300" height="18" rx="9" fill="#22C55E"/>
</svg>`;

// 5. Screenshot 2: Pintando a Bíblia (540x960)
const pintandoBibliaSvg = `
<svg width="540" height="960" viewBox="0 0 540 960" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pinkBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FDF2F8"/>
      <stop offset="100%" stop-color="#FCE7F3"/>
    </linearGradient>
  </defs>
  <rect width="540" height="960" fill="url(#pinkBg)"/>

  <!-- Top bar -->
  <rect x="20" y="30" width="500" height="70" rx="20" fill="#FFFFFF" opacity="0.9"/>
  <text x="50" y="74" font-family="sans-serif" font-size="28" font-weight="900" fill="#DB2777">🎨 Pintando a Bíblia</text>
  <rect x="420" y="42" width="80" height="46" rx="23" fill="#F472B6"/>
  <text x="460" y="72" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Salvar</text>

  <!-- Canvas Area -->
  <g transform="translate(40, 130)">
    <rect width="460" height="520" rx="36" fill="#FFFFFF" stroke="#FBCFE8" stroke-width="4" filter="drop-shadow(0 15px 30px rgba(0,0,0,0.06))"/>
    
    <!-- Rainbow Line Art Colored -->
    <path d="M 60,320 A 170,170 0 0,1 400,320" fill="none" stroke="#EF4444" stroke-width="20" stroke-linecap="round"/>
    <path d="M 80,320 A 150,150 0 0,1 380,320" fill="none" stroke="#F59E0B" stroke-width="20" stroke-linecap="round"/>
    <path d="M 100,320 A 130,130 0 0,1 360,320" fill="none" stroke="#10B981" stroke-width="20" stroke-linecap="round"/>
    <path d="M 120,320 A 110,110 0 0,1 340,320" fill="none" stroke="#3B82F6" stroke-width="20" stroke-linecap="round"/>
    <path d="M 140,320 A 90,90 0 0,1 320,320" fill="none" stroke="#8B5CF6" stroke-width="20" stroke-linecap="round"/>

    <!-- Cloud and dove -->
    <text x="80" y="340" font-family="sans-serif" font-size="64">☁️</text>
    <text x="320" y="340" font-family="sans-serif" font-size="64">☁️</text>
    <text x="230" y="160" font-family="sans-serif" font-size="52" text-anchor="middle">🕊️</text>
    <text x="230" y="440" font-family="sans-serif" font-size="80" text-anchor="middle">⛵</text>
  </g>

  <!-- Color Palette Wheel -->
  <g transform="translate(40, 680)">
    <rect width="460" height="90" rx="28" fill="#FFFFFF" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.05))"/>
    
    <circle cx="55" cy="45" r="22" fill="#EF4444" stroke="#FFFFFF" stroke-width="4"/>
    <circle cx="115" cy="45" r="22" fill="#F97316" stroke="#FFFFFF" stroke-width="4"/>
    <circle cx="175" cy="45" r="22" fill="#FACC15" stroke="#FFFFFF" stroke-width="4"/>
    <circle cx="235" cy="45" r="28" fill="#10B981" stroke="#334155" stroke-width="4"/> <!-- Selected -->
    <circle cx="295" cy="45" r="22" fill="#06B6D4" stroke="#FFFFFF" stroke-width="4"/>
    <circle cx="355" cy="45" r="22" fill="#3B82F6" stroke="#FFFFFF" stroke-width="4"/>
    <circle cx="415" cy="45" r="22" fill="#8B5CF6" stroke="#FFFFFF" stroke-width="4"/>
  </g>

  <!-- Tools Row (Brush, Bucket, Eraser, Undo) -->
  <g transform="translate(40, 795)">
    <rect x="0" y="0" width="100" height="75" rx="20" fill="#EC4899"/>
    <text x="50" y="48" font-family="sans-serif" font-size="30" text-anchor="middle">🖌️</text>

    <rect x="120" y="0" width="100" height="75" rx="20" fill="#FFFFFF"/>
    <text x="170" y="48" font-family="sans-serif" font-size="30" text-anchor="middle">🪣</text>

    <rect x="240" y="0" width="100" height="75" rx="20" fill="#FFFFFF"/>
    <text x="290" y="48" font-family="sans-serif" font-size="30" text-anchor="middle">✨</text>

    <rect x="360" y="0" width="100" height="75" rx="20" fill="#FFFFFF"/>
    <text x="410" y="48" font-family="sans-serif" font-size="30" text-anchor="middle">↩️</text>
  </g>

  <rect x="40" y="895" width="460" height="40" rx="20" fill="#EC4899"/>
  <text x="270" y="922" font-family="sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">PARABÉNS! DESENHO SALVO NO ÁLBUM 🏆</text>
</svg>`;

// 6. Screenshot 3: Onde Está? (540x960)
const ondeEstaSvg = `
<svg width="540" height="960" viewBox="0 0 540 960" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="orangeBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFF7ED"/>
      <stop offset="100%" stop-color="#FFEDD5"/>
    </linearGradient>
  </defs>
  <rect width="540" height="960" fill="url(#orangeBg)"/>

  <!-- Top bar -->
  <rect x="20" y="30" width="500" height="70" rx="20" fill="#FFFFFF" opacity="0.9"/>
  <text x="50" y="74" font-family="sans-serif" font-size="28" font-weight="900" fill="#EA580C">🔎 Onde Está?</text>
  <rect x="400" y="42" width="100" height="46" rx="23" fill="#F97316"/>
  <text x="450" y="72" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Nível 3</text>

  <!-- Objective Target Pill -->
  <g transform="translate(40, 120)">
    <rect width="460" height="90" rx="28" fill="#F97316"/>
    <circle cx="65" cy="45" r="30" fill="#FFFFFF"/>
    <text x="65" y="56" font-family="sans-serif" font-size="34" text-anchor="middle">🐑</text>
    <text x="115" y="40" font-family="sans-serif" font-size="20" font-weight="900" fill="#FFFFFF">Encontre as 3 Ovelhinhas!</text>
    <text x="115" y="66" font-family="sans-serif" font-size="15" fill="#FFEDD5">Você já encontrou: 2 de 3</text>
  </g>

  <!-- Main Biblical Game Scene -->
  <g transform="translate(40, 230)">
    <rect width="460" height="580" rx="36" fill="#86EFAC" stroke="#4ADE80" stroke-width="4"/>
    
    <!-- Background Mountains & Hills -->
    <path d="M 0,200 Q 120,80 240,200 T 460,200 L 460,580 L 0,580 Z" fill="#4ADE80"/>
    <circle cx="390" cy="80" r="40" fill="#FEF08A"/>

    <!-- Shepherd Character (David) -->
    <g transform="translate(180, 260)">
      <circle cx="50" cy="40" r="30" fill="#FDBA74"/>
      <rect x="25" y="70" width="50" height="90" rx="15" fill="#3B82F6"/>
      <line x1="85" y1="50" x2="85" y2="180" stroke="#78350F" stroke-width="8" stroke-linecap="round"/>
      <text x="50" y="48" font-family="sans-serif" font-size="24" text-anchor="middle">😊</text>
    </g>

    <!-- Hidden sheep 1 (Found - glowing ring) -->
    <circle cx="90" cy="380" r="45" fill="none" stroke="#FACC15" stroke-width="6" stroke-dasharray="8 6"/>
    <text x="90" y="395" font-family="sans-serif" font-size="52" text-anchor="middle">🐑</text>
    <text x="120" y="360" font-family="sans-serif" font-size="28">✓</text>

    <!-- Hidden sheep 2 (Found - glowing ring) -->
    <circle cx="370" cy="320" r="45" fill="none" stroke="#FACC15" stroke-width="6" stroke-dasharray="8 6"/>
    <text x="370" y="335" font-family="sans-serif" font-size="52" text-anchor="middle">🐑</text>
    <text x="400" y="300" font-family="sans-serif" font-size="28">✓</text>

    <!-- Hidden sheep 3 (Hiding behind a tree bush) -->
    <text x="280" y="480" font-family="sans-serif" font-size="70">🌳</text>
    <text x="260" y="490" font-family="sans-serif" font-size="38">🐑</text>

    <!-- Scenery elements -->
    <text x="60" y="240" font-family="sans-serif" font-size="44">🌸</text>
    <text x="380" y="480" font-family="sans-serif" font-size="44">🌺</text>
    <text x="40" y="520" font-family="sans-serif" font-size="54">🌿</text>
  </g>

  <!-- Bottom Magnifier Action button -->
  <g transform="translate(40, 835)">
    <rect width="460" height="85" rx="26" fill="#FFFFFF" filter="drop-shadow(0 6px 16px rgba(0,0,0,0.08))"/>
    <text x="70" y="54" font-family="sans-serif" font-size="34">🔍</text>
    <text x="120" y="42" font-family="sans-serif" font-size="18" font-weight="900" fill="#EA580C">Dica Mágica Disponível!</text>
    <text x="120" y="65" font-family="sans-serif" font-size="14" fill="#64748B">Toque para destacar o local</text>
    <rect x="360" y="18" width="80" height="48" rx="16" fill="#F97316"/>
    <text x="400" y="48" font-family="sans-serif" font-size="15" font-weight="bold" fill="#FFFFFF" text-anchor="middle">USAR</text>
  </g>
</svg>`;

// 7. Screenshot 4: Jogo da Memória (540x960)
const memoryGameSvg = `
<svg width="540" height="960" viewBox="0 0 540 960" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="purpleBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FAF5FF"/>
      <stop offset="100%" stop-color="#F3E8FF"/>
    </linearGradient>
  </defs>
  <rect width="540" height="960" fill="url(#purpleBg)"/>

  <!-- Top bar -->
  <rect x="20" y="30" width="500" height="70" rx="20" fill="#FFFFFF" opacity="0.9"/>
  <text x="50" y="74" font-family="sans-serif" font-size="28" font-weight="900" fill="#7E22CE">🧠 Jogo da Memória</text>
  <rect x="420" y="42" width="80" height="46" rx="23" fill="#8B5CF6"/>
  <text x="460" y="72" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">4/6</text>

  <!-- Score Board -->
  <g transform="translate(40, 120)">
    <rect width="460" height="80" rx="24" fill="#8B5CF6"/>
    <text x="40" y="48" font-family="sans-serif" font-size="16" font-weight="bold" fill="#DDD6FE">Tentativas: 6</text>
    <text x="240" y="48" font-family="sans-serif" font-size="16" font-weight="bold" fill="#DDD6FE">Pares Feitos: 4 de 6</text>
    <text x="410" y="52" font-family="sans-serif" font-size="28">⭐</text>
  </g>

  <!-- 3x4 Cards Grid (12 cards) -->
  <!-- Row 1 -->
  <g transform="translate(40, 230)">
    <!-- Card 1 (Flipped - Dove) -->
    <rect x="0" y="0" width="135" height="135" rx="22" fill="#FFFFFF" stroke="#8B5CF6" stroke-width="4"/>
    <text x="67" y="85" font-family="sans-serif" font-size="55" text-anchor="middle">🕊️</text>

    <!-- Card 2 (Flipped - Dove -> Matched!) -->
    <rect x="162" y="0" width="135" height="135" rx="22" fill="#FFFFFF" stroke="#22C55E" stroke-width="4"/>
    <text x="229" y="85" font-family="sans-serif" font-size="55" text-anchor="middle">🕊️</text>
    <circle cx="270" cy="25" r="14" fill="#22C55E"/>
    <text x="270" y="31" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">✓</text>

    <!-- Card 3 (Face down) -->
    <rect x="325" y="0" width="135" height="135" rx="22" fill="#8B5CF6"/>
    <text x="392" y="85" font-family="sans-serif" font-size="50" text-anchor="middle" fill="#DDD6FE">✨</text>
  </g>

  <!-- Row 2 -->
  <g transform="translate(40, 390)">
    <!-- Card 4 (Face down) -->
    <rect x="0" y="0" width="135" height="135" rx="22" fill="#8B5CF6"/>
    <text x="67" y="85" font-family="sans-serif" font-size="50" text-anchor="middle" fill="#DDD6FE">✨</text>

    <!-- Card 5 (Flipped - Ark) -->
    <rect x="162" y="0" width="135" height="135" rx="22" fill="#FFFFFF" stroke="#8B5CF6" stroke-width="4"/>
    <text x="229" y="85" font-family="sans-serif" font-size="55" text-anchor="middle">⛵</text>

    <!-- Card 6 (Flipped - Ark -> Matched!) -->
    <rect x="325" y="0" width="135" height="135" rx="22" fill="#FFFFFF" stroke="#22C55E" stroke-width="4"/>
    <text x="392" y="85" font-family="sans-serif" font-size="55" text-anchor="middle">⛵</text>
    <circle cx="433" cy="25" r="14" fill="#22C55E"/>
    <text x="433" y="31" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">✓</text>
  </g>

  <!-- Row 3 -->
  <g transform="translate(40, 550)">
    <!-- Card 7 (Flipped - Cross) -->
    <rect x="0" y="0" width="135" height="135" rx="22" fill="#FFFFFF" stroke="#22C55E" stroke-width="4"/>
    <text x="67" y="85" font-family="sans-serif" font-size="55" text-anchor="middle">✝️</text>

    <!-- Card 8 (Face down) -->
    <rect x="162" y="0" width="135" height="135" rx="22" fill="#8B5CF6"/>
    <text x="229" y="85" font-family="sans-serif" font-size="50" text-anchor="middle" fill="#DDD6FE">✨</text>

    <!-- Card 9 (Flipped - Cross) -->
    <rect x="325" y="0" width="135" height="135" rx="22" fill="#FFFFFF" stroke="#22C55E" stroke-width="4"/>
    <text x="392" y="85" font-family="sans-serif" font-size="55" text-anchor="middle">✝️</text>
  </g>

  <!-- Row 4 -->
  <g transform="translate(40, 710)">
    <!-- Card 10 (Flipped - Star) -->
    <rect x="0" y="0" width="135" height="135" rx="22" fill="#FFFFFF" stroke="#22C55E" stroke-width="4"/>
    <text x="67" y="85" font-family="sans-serif" font-size="55" text-anchor="middle">⭐</text>

    <!-- Card 11 (Face down) -->
    <rect x="162" y="0" width="135" height="135" rx="22" fill="#8B5CF6"/>
    <text x="229" y="85" font-family="sans-serif" font-size="50" text-anchor="middle" fill="#DDD6FE">✨</text>

    <!-- Card 12 (Flipped - Star) -->
    <rect x="325" y="0" width="135" height="135" rx="22" fill="#FFFFFF" stroke="#22C55E" stroke-width="4"/>
    <text x="392" y="85" font-family="sans-serif" font-size="55" text-anchor="middle">⭐</text>
  </g>

  <!-- Bottom Message -->
  <rect x="40" y="875" width="460" height="60" rx="20" fill="#22C55E"/>
  <text x="270" y="912" font-family="sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">MUITO BEM! VOCÊ É UMA ESTRELA ⭐</text>
</svg>`;

// 8. Screenshot 5: Historinhas Bíblicas (540x960)
const historinhasSvg = `
<svg width="540" height="960" viewBox="0 0 540 960" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="greenBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F0FDF4"/>
      <stop offset="100%" stop-color="#DCFCE7"/>
    </linearGradient>
  </defs>
  <rect width="540" height="960" fill="url(#greenBg)"/>

  <!-- Top bar -->
  <rect x="20" y="30" width="500" height="70" rx="20" fill="#FFFFFF" opacity="0.9"/>
  <text x="50" y="74" font-family="sans-serif" font-size="28" font-weight="900" fill="#15803D">📖 Historinhas Bíblicas</text>
  <rect x="420" y="42" width="80" height="46" rx="23" fill="#22C55E"/>
  <text x="460" y="72" font-family="sans-serif" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">🔊</text>

  <!-- Illustrated Book Frame -->
  <g transform="translate(40, 120)">
    <rect width="460" height="520" rx="36" fill="#FFFFFF" stroke="#BBF7D0" stroke-width="4" filter="drop-shadow(0 15px 30px rgba(0,0,0,0.06))"/>
    
    <!-- Story Image Illustration -->
    <rect x="25" y="25" width="410" height="280" rx="24" fill="#BAE6FD"/>
    <circle cx="370" cy="70" r="30" fill="#FACC15"/>
    <path d="M 25,230 Q 120,160 230,230 T 435,230 L 435,305 L 25,305 Z" fill="#86EFAC"/>
    
    <!-- David and Goliath scene -->
    <g transform="translate(110, 140)">
      <circle cx="30" cy="30" r="22" fill="#FDBA74"/>
      <rect x="12" y="52" width="36" height="60" rx="10" fill="#3B82F6"/>
      <text x="30" y="36" font-family="sans-serif" font-size="18" text-anchor="middle">😊</text>
      <!-- Stone sling -->
      <line x1="48" y1="65" x2="70" y2="50" stroke="#78350F" stroke-width="4"/>
    </g>

    <g transform="translate(270, 80)">
      <circle cx="45" cy="40" r="32" fill="#FDBA74"/>
      <rect x="15" y="72" width="60" height="110" rx="15" fill="#64748B"/>
      <!-- Shield & Helmet -->
      <polygon points="15,40 45,10 75,40" fill="#F59E0B"/>
      <text x="45" y="48" font-family="sans-serif" font-size="24" text-anchor="middle">😠</text>
    </g>

    <!-- Story Text -->
    <text x="35" y="345" font-family="sans-serif" font-size="20" font-weight="900" fill="#14532D">Davi e o Gigante Golias</text>
    <text x="35" y="380" font-family="sans-serif" font-size="15" fill="#334155">"O Senhor que me livrou das garras do leão</text>
    <text x="35" y="405" font-family="sans-serif" font-size="15" fill="#334155">e do urso me livrará também deste gigante!"</text>
    <text x="35" y="440" font-family="sans-serif" font-size="14" font-weight="bold" fill="#16A34A">1 Samuel 17:37 ⭐</text>
  </g>

  <!-- Audio Story Narration Player -->
  <g transform="translate(40, 670)">
    <rect width="460" height="110" rx="28" fill="#22C55E"/>
    
    <circle cx="70" cy="55" r="30" fill="#FFFFFF"/>
    <text x="73" y="63" font-family="sans-serif" font-size="24" text-anchor="middle" fill="#22C55E">▶</text>

    <text x="125" y="45" font-family="sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">Ouvir Narração com Música</text>
    
    <!-- Audio Waveform -->
    <rect x="125" y="65" width="280" height="8" rx="4" fill="#15803D"/>
    <rect x="125" y="65" width="140" height="8" rx="4" fill="#FFFFFF"/>
    <circle cx="265" cy="69" r="8" fill="#FFFFFF"/>
    <text x="420" y="73" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF">02:15</text>
  </g>

  <!-- Next / Prev story page buttons -->
  <g transform="translate(40, 810)">
    <rect x="0" y="0" width="215" height="70" rx="22" fill="#FFFFFF" stroke="#BBF7D0" stroke-width="2"/>
    <text x="107" y="43" font-family="sans-serif" font-size="16" font-weight="bold" fill="#15803D" text-anchor="middle">⬅ Anterior</text>

    <rect x="245" y="0" width="215" height="70" rx="22" fill="#22C55E"/>
    <text x="352" y="43" font-family="sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Próxima Página ➡</text>
  </g>
</svg>`;

// 9. Checkout Mockup (800x600 tablet + phone combo with package)
const checkoutMockupSvg = `
<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="chkBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E0F2FE"/>
      <stop offset="100%" stop-color="#BAE6FD"/>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="24" flood-opacity="0.22" flood-color="#0284C7"/>
    </filter>
  </defs>

  <!-- Background glow -->
  <circle cx="400" cy="300" r="280" fill="#38BDF8" opacity="0.2"/>

  <!-- Tablet Mockup on the Left -->
  <g transform="translate(100, 60)" filter="url(#softShadow)">
    <rect width="440" height="340" rx="28" fill="#1E293B"/>
    <rect x="12" y="12" width="416" height="316" rx="20" fill="#0284C7"/>
    
    <!-- Tablet Screen Content -->
    <text x="35" y="55" font-family="sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">Pequenos da Fé ✨</text>
    <text x="35" y="80" font-family="sans-serif" font-size="13" fill="#BAE6FD">Todos os Jogos &amp; Atividades Bíblicas</text>
    
    <!-- 4 mini cards on tablet -->
    <rect x="35" y="105" width="85" height="85" rx="14" fill="#3B82F6"/>
    <text x="77" y="158" font-family="sans-serif" font-size="34" text-anchor="middle">🦁</text>

    <rect x="135" y="105" width="85" height="85" rx="14" fill="#EC4899"/>
    <text x="177" y="158" font-family="sans-serif" font-size="34" text-anchor="middle">🎨</text>

    <rect x="235" y="105" width="85" height="85" rx="14" fill="#F97316"/>
    <text x="277" y="158" font-family="sans-serif" font-size="34" text-anchor="middle">🔎</text>

    <rect x="335" y="105" width="85" height="85" rx="14" fill="#8B5CF6"/>
    <text x="377" y="158" font-family="sans-serif" font-size="34" text-anchor="middle">🧠</text>

    <!-- Bottom Tablet Banner -->
    <rect x="35" y="210" width="385" height="90" rx="16" fill="#FFFFFF"/>
    <text x="55" y="245" font-family="sans-serif" font-size="16" font-weight="900" fill="#0369A1">Acesso Completo e Ilimitado</text>
    <text x="55" y="270" font-family="sans-serif" font-size="12" fill="#64748B">Sem mensalidades • Atualizações gratuitas</text>
    <rect x="320" y="235" width="85" height="40" rx="20" fill="#22C55E"/>
    <text x="362" y="260" font-family="sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">LIBERADO</text>
  </g>

  <!-- Smartphone Mockup in Front Right -->
  <g transform="translate(420, 160)" filter="url(#softShadow)">
    <rect width="240" height="380" rx="36" fill="#0F172A"/>
    <rect x="8" y="8" width="224" height="364" rx="28" fill="#F0F9FF"/>
    
    <!-- Phone Screen Header -->
    <rect x="18" y="25" width="204" height="60" rx="16" fill="#0284C7"/>
    <text x="35" y="55" font-family="sans-serif" font-size="14" font-weight="900" fill="#FFFFFF">Pequenos da Fé</text>
    <text x="35" y="72" font-family="sans-serif" font-size="10" fill="#BAE6FD">Modo Infantil Ativado</text>
    <text x="195" y="60" font-family="sans-serif" font-size="20">⭐</text>

    <!-- Mini Phone game icons -->
    <rect x="18" y="98" width="95" height="95" rx="14" fill="#22C55E"/>
    <text x="65" y="155" font-family="sans-serif" font-size="36" text-anchor="middle">📖</text>
    <text x="65" y="180" font-family="sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Historinhas</text>

    <rect x="127" y="98" width="95" height="95" rx="14" fill="#06B6D4"/>
    <text x="174" y="155" font-family="sans-serif" font-size="36" text-anchor="middle">🏆</text>
    <text x="174" y="180" font-family="sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Missões</text>

    <!-- Phone Bottom Card -->
    <rect x="18" y="210" width="204" height="130" rx="16" fill="#FFFFFF" stroke="#BAE6FD" stroke-width="2"/>
    <text x="35" y="240" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369A1">Meu Álbum de Fé</text>
    <text x="35" y="260" font-family="sans-serif" font-size="10" fill="#64748B">36 Conquistas alcançadas</text>
    <text x="35" y="305" font-family="sans-serif" font-size="28">🏅 🏆 🌟 ⭐</text>
  </g>

  <!-- Golden Guarantee & Vitalício Badges -->
  <g transform="translate(100, 430)" filter="url(#softShadow)">
    <rect width="280" height="70" rx="35" fill="#FEF08A" stroke="#EAB308" stroke-width="3"/>
    <text x="35" y="45" font-family="sans-serif" font-size="28">🔒</text>
    <text x="75" y="36" font-family="sans-serif" font-size="15" font-weight="900" fill="#854D0E">ACESSO VITALÍCIO</text>
    <text x="75" y="55" font-family="sans-serif" font-size="12" font-weight="bold" fill="#A16207">PAGUE UMA ÚNICA VEZ</text>
  </g>

  <!-- Floating Star & Emojis -->
  <text x="70" y="140" font-family="sans-serif" font-size="45">⭐</text>
  <text x="710" y="220" font-family="sans-serif" font-size="45">🌈</text>
  <text x="690" y="480" font-family="sans-serif" font-size="45">✨</text>
</svg>`;

async function main() {
  console.log('Generating assets for Pequenos da Fé...');

  await saveSvgAsPng(faviconSvg, ['./public/favicon.png', './favicon.png'], 512, 512);
  await saveSvgAsPng(logoSvg, ['./public/images/logo.png', './images/logo.png'], 512, 512);
  await saveSvgAsPng(appMockupSvg, ['./public/images/app-mockup.png', './images/app-mockup.png'], 700, 1100);
  await saveSvgAsPng(sonsAnimaisSvg, ['./public/images/sons-animais-screenshot.png', './images/sons-animais-screenshot.png'], 540, 960);
  await saveSvgAsPng(pintandoBibliaSvg, ['./public/images/pintando-biblia-screenshot.png', './images/pintando-biblia-screenshot.png'], 540, 960);
  await saveSvgAsPng(ondeEstaSvg, ['./public/images/onde-esta-screenshot.png', './images/onde-esta-screenshot.png'], 540, 960);
  await saveSvgAsPng(memoryGameSvg, ['./public/images/memory-game-screenshot.png', './images/memory-game-screenshot.png'], 540, 960);
  await saveSvgAsPng(historinhasSvg, ['./public/images/historinhas-screenshot.png', './images/historinhas-screenshot.png'], 540, 960);
  await saveSvgAsPng(checkoutMockupSvg, ['./public/images/checkout-mockup.png', './images/checkout-mockup.png'], 800, 600);

  console.log('All image assets created successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
