export function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-8 px-6 text-center">
      <p className="text-xs text-zinc-300">
        © {new Date().getFullYear()} Susana Perez · Built with Next.js &amp; Claude Code
      </p>
    </footer>
  )
}
