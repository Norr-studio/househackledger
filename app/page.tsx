export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* NAV */}
      <nav className="px-6 py-5 flex items-center justify-between max-w-5xl mx-auto">
        <span className="font-semibold text-lg tracking-tight">HouseHackLedger</span>
        <a href="#early-access" className="bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition">
          Get early access
        </a>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full mb-6">
          Beta launching June 2025
        </div>
        <h1 className="text-5xl font-bold leading-tight tracking-tight mb-6">
          House hacking accounting,<br />actually built for house hackers.
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Set your rental percentage once. Every shared expense splits automatically.
          Export a clean Schedule E for your CPA. No $0.01 workarounds.
        </p>
        <a href="#early-access" className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition">
          Get early access
        </a>
        <p className="text-sm text-gray-400 mt-4">Free during beta. No credit card required.</p>
      </section>

      {/* PROBLEM VS SOLUTION */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Problem */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
            <p className="text-sm font-semibold text-red-500 mb-4 uppercase tracking-wide">What Stessa makes you do</p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Set your owner-occupied rent to $0.01 to avoid vacancy warnings",
                "Manually add a credit every month to zero out the phantom charge",
                "Open every shared expense on desktop and split it by hand",
                "Remember your rental % yourself — nothing stores it",
                "Mobile app can't split transactions at all",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
            <p className="text-sm font-semibold text-green-600 mb-4 uppercase tracking-wide">What HouseHackLedger does</p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Set your rental percentage once during setup — never again",
                "Every shared expense auto-splits based on your occupancy %",
                "Clearly shows the deductible portion of every transaction",
                "Exports a clean Schedule E report your CPA can use directly",
                "No workarounds. No phantom charges. No manual math.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              step: "1",
              title: "Set up your property",
              desc: "Enter your total rooms and rented rooms. Your rental percentage is calculated automatically and stored.",
            },
            {
              step: "2",
              title: "Log your expenses",
              desc: "Mark each expense as rental-only, personal, or shared. Shared expenses split instantly — no manual math.",
            },
            {
              step: "3",
              title: "Export for your CPA",
              desc: "Generate a clean Schedule E report with every deductible expense pre-calculated. Hand it straight to your CPA.",
            },
          ].map((item) => (
            <div key={item.step}>
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section id="early-access" className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-3">Be first in.</h2>
        <p className="text-gray-500 mb-10">
          Early access opens June 2025. Beta users get 60 days free.
        </p>

        {/* TALLY EMBED */}
        <div className="text-left">
          <iframe
            data-tally-src="https://tally.so/embed/1Abg6g?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="214"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Get early access to HouseHackLedger"
          />
        </div>

        <p className="text-xs text-gray-400 mt-8">
          This tool helps you organize records per IRS Publication 527 methodology.
          It does not constitute tax advice. Consult a CPA for your specific situation.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        © 2025 HouseHackLedger. Built for house hackers.
      </footer>

    </main>
  );
}