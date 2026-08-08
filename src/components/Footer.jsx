function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--panel-2)] px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[color:var(--accent)] md:flex-row md:items-center md:justify-between">
        <div>
          <p>© 2026 SKP & Associates. Crafted for strong homes, smart planning, and happy living.</p>
          <p className="mt-1">GSTIN: 09DNNPK3009N1ZI</p>
        </div>
        <div className="flex gap-4">
          <a href="#top" className="transition hover:text-[color:var(--accent)]">Back to top</a>
          <a href="#contact" className="transition hover:text-[color:var(--accent)]">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
