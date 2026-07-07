import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, '../public');

// Lucide "droplet" path on a 24×24 grid, scaled to fill a 512×512 canvas
// We embed it in an SVG with the Mizu blue + a radial glow behind it.
function makeSvg(size) {
  const pad = size * 0.12;
  const inner = size - pad * 2;
  // The droplet path is defined on a 24×24 grid; scale it to `inner` px
  const scale = inner / 24;
  const tx = pad;
  const ty = pad;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="60%" r="50%">
      <stop offset="0%" stop-color="#7dd3fc" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#0EA5E9" stop-opacity="0"/>
    </radialGradient>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="${size * 0.06}"/>
    </filter>
  </defs>
  <!-- Soft glow halo -->
  <ellipse cx="${size / 2}" cy="${size * 0.58}" rx="${size * 0.38}" ry="${size * 0.35}"
    fill="url(#glow)" filter="url(#blur)"/>
  <!-- Droplet shape -->
  <g transform="translate(${tx},${ty}) scale(${scale})">
    <path
      d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
      fill="none"
      stroke="#0EA5E9"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
</svg>`;
}

async function svgToPng(svgString, outputPath) {
  const buf = Buffer.from(svgString);
  await sharp(buf, { density: 300 }).png({ compressionLevel: 9 }).toFile(outputPath);
  console.log('✓', outputPath);
}

// Generate PNG sizes
await svgToPng(makeSvg(16),  resolve(publicDir, 'favicon-16x16.png'));
await svgToPng(makeSvg(32),  resolve(publicDir, 'favicon-32x32.png'));
await svgToPng(makeSvg(180), resolve(publicDir, 'apple-touch-icon.png'));
await svgToPng(makeSvg(192), resolve(publicDir, 'favicon-192x192.png'));

// Build favicon.ico = a real ICO containing 16×16 and 32×32 PNGs
// ICO format: ICONDIR + ICONDIRENTRYs + image data
async function pngToIco(sizes, outputPath) {
  const images = await Promise.all(
    sizes.map(async (s) => {
      const buf = await sharp(Buffer.from(makeSvg(s)), { density: 300 })
        .png({ compressionLevel: 9 })
        .toBuffer();
      return { size: s, buf };
    })
  );

  const headerSize = 6;                        // ICONDIR
  const entrySize  = 16;                       // ICONDIR ENTRY per image
  const dataOffset = headerSize + entrySize * images.length;

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0,              0);     // reserved
  header.writeUInt16LE(1,              2);     // type = ICO
  header.writeUInt16LE(images.length,  4);

  const entries = [];
  let currentOffset = dataOffset;
  for (const { size, buf } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);  // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1);  // height
    entry.writeUInt8(0, 2);                        // color count
    entry.writeUInt8(0, 3);                        // reserved
    entry.writeUInt16LE(1,           4);           // planes
    entry.writeUInt16LE(32,          6);           // bit count
    entry.writeUInt32LE(buf.length,  8);           // size of image data
    entry.writeUInt32LE(currentOffset, 12);        // offset
    entries.push(entry);
    currentOffset += buf.length;
  }

  const ico = Buffer.concat([header, ...entries, ...images.map(i => i.buf)]);
  writeFileSync(outputPath, ico);
  console.log('✓', outputPath);
}

await pngToIco([16, 32, 48], resolve(publicDir, 'favicon.ico'));

// Replace the old SVG favicon with the new one too
const svgOut = resolve(publicDir, 'favicon.svg');
import { writeFileSync as wf } from 'fs';
wf(svgOut, makeSvg(512));
console.log('✓', svgOut, '(updated)');
