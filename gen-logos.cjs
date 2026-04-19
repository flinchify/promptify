const sharp = require('sharp');
const fs = require('fs');

const svg = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" /><stop offset="100%" style="stop-color:#a855f7;stop-opacity:1" /></linearGradient></defs><rect width="512" height="512" rx="96" ry="96" fill="url(#grad)" /><text x="256" y="340" font-family="Inter, sans-serif" font-weight="700" font-size="260" fill="white" text-anchor="middle">iF</text></svg>');

async function main() {
  await sharp(svg).resize(512, 512).png().toFile('public/logo-512.png');
  await sharp(svg).resize(192, 192).png().toFile('public/logo-192.png');
  await sharp(svg).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  await sharp(svg).resize(32, 32).png().toFile('public/favicon-32.png');
  await sharp(svg).resize(16, 16).png().toFile('public/favicon-16.png');
  const ico = await sharp(svg).resize(32, 32).png().toBuffer();
  fs.writeFileSync('public/favicon.ico', ico);
  console.log('All logos generated');
}
main();
