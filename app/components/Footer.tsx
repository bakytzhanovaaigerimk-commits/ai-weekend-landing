export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-white/10 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-[#fe2c55]/10 to-transparent blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Brand Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] bg-clip-text text-transparent">
            AI WEEKEND 2025
          </h3>
          <p className="text-gray-400 leading-relaxed flex items-center justify-center gap-2">
            <span className="text-[#fe2c55]">📍</span>
            г. Астана
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Воркшоп по созданию AI-контента
          </p>
        </div>

        {/* Social Links - Centered */}
        <div className="mb-12">
          <h4 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-[#fe2c55] via-white to-[#25f4ee] bg-clip-text text-transparent">
            Мы в соцсетях
          </h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/code_on_vibe/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 bg-gradient-to-br from-[#fe2c55]/20 to-transparent hover:from-[#fe2c55]/40 border-2 border-white/10 hover:border-[#fe2c55] rounded-2xl flex items-center justify-center transition-all hover:scale-110 hover:rotate-6 hover:shadow-[0_0_30px_rgba(254,44,85,0.6)]"
              aria-label="Instagram"
            >
              <svg className="w-7 h-7 text-gray-300 group-hover:text-[#fe2c55] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://t.me/ai_corgi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 bg-gradient-to-br from-[#25f4ee]/20 to-transparent hover:from-[#25f4ee]/40 border-2 border-white/10 hover:border-[#25f4ee] rounded-2xl flex items-center justify-center transition-all hover:scale-110 hover:rotate-6 hover:shadow-[0_0_30px_rgba(37,244,238,0.6)]"
              aria-label="Telegram"
            >
              <svg className="w-7 h-7 text-gray-300 group-hover:text-[#25f4ee] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@noaicancode"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 bg-gradient-to-br from-[#fe2c55]/20 to-transparent hover:from-[#fe2c55]/40 border-2 border-white/10 hover:border-[#fe2c55] rounded-2xl flex items-center justify-center transition-all hover:scale-110 hover:rotate-6 hover:shadow-[0_0_30px_rgba(254,44,85,0.6)]"
              aria-label="YouTube"
            >
              <svg className="w-7 h-7 text-gray-300 group-hover:text-[#fe2c55] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 AI WEEKEND. Made with <span className="text-[#fe2c55]">♥</span> for AI Creators
          </p>
        </div>
      </div>
    </footer>
  );
}
