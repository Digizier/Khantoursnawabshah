import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const refDir = 'D:/APPs/khantoursnawabshah.xyz/Reference Data';
const userUploadedLogo = 'C:/Users/NB LAPTOP/.gemini/antigravity/brain/01e2e90e-f6ad-4f62-9024-668edbc52b09/.user_uploaded/media_1794514944785_f5aeb8f0.png';

const publicDir = 'D:/APPs/khantoursnawabshah.xyz/public';
const dirsToCreate = [
  publicDir,
  path.join(publicDir, 'images'),
  path.join(publicDir, 'images/logo'),
  path.join(publicDir, 'images/destinations'),
  path.join(publicDir, 'images/tours'),
  path.join(publicDir, 'images/founder'),
  path.join(publicDir, 'images/gallery'),
  path.join(publicDir, 'images/hero'),
];

for (const d of dirsToCreate) {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
}

async function processLogo() {
  console.log('Processing official logo...');
  const logoSource = fs.existsSync(userUploadedLogo)
    ? userUploadedLogo
    : path.join(refDir, 'WhatsApp_Image_2026-11-12_at_8.50.31_AM__1_-removebg-preview.png');

  // Master logo PNG
  await sharp(logoSource)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'images/logo/khan-tours-nawabshah-logo.png'));

  // Master logo WebP
  await sharp(logoSource)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'images/logo/khan-tours-nawabshah-logo.webp'));

  // Header/Footer compact logo
  await sharp(logoSource)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'images/logo/khan-tours-header-logo.png'));

  // Favicon PNG (32x32)
  await sharp(logoSource)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));

  // Apple Touch Icon (180x180)
  await sharp(logoSource)
    .resize(180, 180, { fit: 'contain', background: { r: 12, g: 43, b: 29, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // Also write standard favicon.ico
  await sharp(logoSource)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));

  // Create OpenGraph 1200x630 banner
  const ogCanvas = sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 10, g: 35, b: 24, alpha: 1 }, // Deep forest green
    },
  });

  const resizedLogoBuffer = await sharp(logoSource)
    .resize(280, 280, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const ogSvg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#C5A059"/>
          <stop offset="50%" stop-color="#E8D196"/>
          <stop offset="100%" stop-color="#C5A059"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1200" height="630" fill="#0A2318" />
      <circle cx="950" cy="315" r="380" fill="#0E3323" opacity="0.4" />
      <circle cx="950" cy="315" r="260" fill="#13442F" opacity="0.5" />
      <text x="80" y="220" font-family="system-ui, sans-serif" font-weight="900" font-size="56" fill="url(#goldGrad)" letter-spacing="1">
        KHAN TOURS NAWABSHAH
      </text>
      <text x="80" y="285" font-family="system-ui, sans-serif" font-weight="600" font-size="34" fill="#FFFFFF">
        Explore The Nature With Us!
      </text>
      <text x="80" y="360" font-family="system-ui, sans-serif" font-weight="400" font-size="24" fill="#CBD5E1">
        • Family Tours  • Group Departures  • Honeymoon Trips
      </text>
      <text x="80" y="405" font-family="system-ui, sans-serif" font-weight="400" font-size="24" fill="#CBD5E1">
        • Hunza  • Skardu  • Swat  • Naran  • Azad Kashmir
      </text>
      <rect x="80" y="470" width="340" height="60" rx="30" fill="#C5A059" />
      <text x="135" y="508" font-family="system-ui, sans-serif" font-weight="700" font-size="22" fill="#0A2318">
        WhatsApp: 0300-2870384
      </text>
    </svg>
  `;

  await ogCanvas
    .composite([
      { input: Buffer.from(ogSvg), top: 0, left: 0 },
      { input: resizedLogoBuffer, top: 175, left: 810 },
    ])
    .jpeg({ quality: 88 })
    .toFile(path.join(publicDir, 'images/og-image.jpg'));

  console.log('Logo and branding assets created successfully!');
}

async function processPhotos() {
  console.log('Processing destination and tour photos...');
  const mappings = [
    {
      source: 'WhatsApp Image 2026-11-12 at 8.54.24 AM.jpeg',
      dest: 'branding/khan-tours-mountain-badge.webp',
      width: 1000,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.05.02 PM.jpeg',
      dest: 'founder/mohammed-murad-khan-snowfall.webp',
      width: 853,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.09.29 PM.jpeg',
      dest: 'destinations/taobutt-neelum-valley.webp',
      width: 1200,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.09.30 PM.jpeg',
      dest: 'destinations/ratti-gali-lake.webp',
      width: 1200,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.05.03 PM (2).jpeg',
      dest: 'destinations/saif-ul-malook-lulusar-lake.webp',
      width: 960,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.05.04 PM.jpeg',
      dest: 'destinations/babusar-pass-snow.webp',
      width: 720,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.05.04 PM (2).jpeg',
      dest: 'destinations/mountain-waterfall-bridge.webp',
      width: 853,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.09.23 PM.jpeg',
      dest: 'destinations/kaghan-river-stream.webp',
      width: 780,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.14.41 PM.jpeg',
      dest: 'founder/mohammed-murad-khan-founder.webp',
      width: 791,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.05.05 PM.jpeg',
      dest: 'gallery/waterfall-lush-valley.webp',
      width: 853,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.05.03 PM.jpeg',
      dest: 'gallery/snow-adventure-walk.webp',
      width: 853,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.05.03 PM (1).jpeg',
      dest: 'gallery/alpine-forest-valley.webp',
      width: 987,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.05.04 PM (1).jpeg',
      dest: 'gallery/mountain-pass-overlook.webp',
      width: 720,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.09.25 PM.jpeg',
      dest: 'gallery/river-valley-pine.webp',
      width: 780,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.09.27 PM.jpeg',
      dest: 'gallery/kashmir-wooden-bridge.webp',
      width: 780,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.09.29 PM (1).jpeg',
      dest: 'gallery/taobutt-valley-view.webp',
      width: 780,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.09.30 PM (1).jpeg',
      dest: 'gallery/ratti-gali-stream.webp',
      width: 780,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.14.44 PM.jpeg',
      dest: 'gallery/tour-rest-stop.webp',
      width: 720,
    },
    {
      source: 'WhatsApp Image 2026-11-12 at 12.14.45 PM.jpeg',
      dest: 'gallery/mountain-tea-moment.webp',
      width: 720,
    },
  ];

  for (const item of mappings) {
    const srcPath = path.join(refDir, item.source);
    const outPath = path.join(publicDir, 'images', item.dest);
    const outDir = path.dirname(outPath);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    if (fs.existsSync(srcPath)) {
      await sharp(srcPath)
        .resize(item.width, null, { withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(outPath);
      const stat = fs.statSync(outPath);
      console.log(`Saved ${item.dest} (${(stat.size / 1024).toFixed(1)} KB)`);
    } else {
      console.warn(`File not found: ${srcPath}`);
    }
  }

  // Also create hero banner image using high-quality composite or optimized Ratti Gali landscape
  const rattiGaliSrc = path.join(publicDir, 'images/destinations/ratti-gali-lake.webp');
  if (fs.existsSync(rattiGaliSrc)) {
    await sharp(rattiGaliSrc)
      .resize(1920, 1080, { fit: 'cover', position: 'top' })
      .webp({ quality: 84 })
      .toFile(path.join(publicDir, 'images/hero/hero-pakistan-mountains.webp'));
    console.log('Hero mountain banner created!');
  }
}

async function main() {
  await processLogo();
  await processPhotos();
  console.log('ALL ASSET PROCESSING COMPLETE!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
