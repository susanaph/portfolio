import sharp from "../node_modules/sharp/lib/index.js"
import { writeFileSync, readFileSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, "../public")
const appDir = join(__dirname, "../app")

// Embed Geist font as base64 so sharp's SVG renderer can use it
const fontPath = join(__dirname, "../node_modules/next/dist/esm/next-devtools/server/font/geist-latin.woff2")
const fontBase64 = readFileSync(fontPath).toString("base64")

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <defs>
    <style>
      @font-face {
        font-family: 'Geist';
        src: url('data:font/woff2;base64,${fontBase64}') format('woff2');
        font-weight: 700;
      }
    </style>
  </defs>
  <rect width="32" height="32" rx="7" fill="#09090b"/>
  <text
    x="16"
    y="22"
    font-family="Geist, system-ui, -apple-system, sans-serif"
    font-size="15"
    font-weight="700"
    fill="#a78bfa"
    text-anchor="middle"
    letter-spacing="-0.5"
  >SP</text>
</svg>`

const svgBuffer = Buffer.from(svg)

const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer()
writeFileSync(join(appDir, "icon.png"), png32)
console.log("app/icon.png written")

const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer()
writeFileSync(join(appDir, "apple-icon.png"), png192)
console.log("app/apple-icon.png written")

writeFileSync(join(publicDir, "favicon-32x32.png"), png32)
const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer()
writeFileSync(join(publicDir, "favicon-16x16.png"), png16)
console.log("public PNGs written")

console.log("Done.")
