import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Mail, Check, BookOpen, Rocket, Shield, Smile } from 'lucide-react'

export default function App() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'ok' | 'err'

  function handleSubscribe(e) {
    e.preventDefault()
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('err')
      return
    }
    setStatus('ok')
    setEmail('')
  }

  const features = [
    { icon: <Sparkles className="h-6 w-6" />, title: "Practical prompts", desc: "Copy‑ready prompts that save time at school, work, and home." },
    { icon: <BookOpen className="h-6 w-6" />, title: "Snackable lessons", desc: "Short, illustrated chapters with real examples and screenshots." },
    { icon: <Shield className="h-6 w-6" />, title: "Beginner‑friendly", desc: "No jargon. Clear steps. Results you can feel today." },
  ]

  const books = [
    {
      title: "Everyday AI Wins for Students",
      subtitle: "Study Smarter with AI – Learn Faster, Stress Less, Ace Your Classes (Ethically)",
      tag: "Student Edition",
      cover: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      amazon: "https://www.amazon.com/dp/B0FWTY12Y6?dplnkId=5f2be259-dd17-447a-954b-b48101df90d3"
    },
    {
      title: "Everyday AI Wins for Real Estate",
      subtitle: "Practical Systems to Work Smarter, Build Trust, and Scale with Ease",
      tag: "2025 Pro Edition",
      cover: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
      amazon: "https://www.amazon.com/dp/B0FVV7KY4F?dplnkId=b5776a09-5a29-4311-a19e-6dabb681e04c#immersive-view_1760827704224"
    },
    {
      title: "Everyday AI Made Simple",
      subtitle: "Practical Ways to Save Time, Simplify Work, and Get More Out of Life with ChatGPT",
      tag: "Bestselling Strategies",
      cover: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
      amazon: "https://www.amazon.com/dp/B0FWFZFXS2?dplnkId=1f038680-5e0d-4d65-8095-31cd18dda70e"
    },
    {
      title: "Everyday AI Wins",
      subtitle: "How to Simplify, Create, and Win Daily with ChatGPT",
      tag: "Essential AI Guide",
      cover: "https://images.unsplash.com/photo-1520975922284-4b27e8f744ec?q=80&w=1200&auto=format&fit=crop",
      amazon: "https://www.amazon.com/dp/B0FW8K4SXD?dplnkId=a77b004c-2723-4437-a2fe-c65da545c23b"
    },
  ]

  const faqs = [
    { q: "Do I need any tech background?", a: "Nope. The guides are written for busy people who want results without fluff." },
    { q: "Will this work with free ChatGPT?", a: "Yes. Prompts include tips that work across popular AI tools, including free tiers." },
    { q: "Can I use this at work and school?", a: "Absolutely—there are sections for email, spreadsheets, research, slides, and more." },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-white">AI</span>
            <span className="text-zinc-900">Everyday AI Wins</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
            <a href="#features" className="hover:text-zinc-900">Features</a>
            <a href="#books" className="hover:text-zinc-900">Books</a>
            <a href="#testimonials" className="hover:text-zinc-900">Proof</a>
            <a href="#faq" className="hover:text-zinc-900">FAQ</a>
            <a href="#subscribe" className="px-3 py-1.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800">Get the free pack</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Practical AI, real‑life wins.</h1>
            <p className="mt-5 text-lg text-zinc-700 max-w-prose">
              Learn exactly how to use ChatGPT and today’s AI tools to save hours, simplify work, and get more out of life. No fluff—just clear steps and prompts that actually work.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#subscribe" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-white font-medium hover:bg-zinc-800">
                <Rocket className="h-5 w-5" /> Get the free Prompt Starter Pack
              </a>
              <a href="#books" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-300 px-5 py-3 font-medium hover:bg-zinc-50">
                <BookOpen className="h-5 w-5" /> Browse the books
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-zinc-600">
              <div className="flex items-center gap-2"><Check className="h-4 w-4" /> 10,000+ prompts tested</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4" /> Beginner‑friendly</div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-zinc-200 shadow-sm bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 text-zinc-600 text-sm">
                <Sparkles className="h-5 w-5" />
                <span>Free sample + weekly prompt drops</span>
              </div>
              <h2 className="mt-3 text-2xl font-bold">Start with 25 plug‑and‑play prompts</h2>
              <p className="mt-2 text-zinc-700">Get the Starter Pack and try your first wins in under 10 minutes.</p>
              <form onSubmit={handleSubscribe} className="mt-5 flex flex-col sm:flex-row gap-3">
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com"
                  className="w-full rounded-2xl border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/20" aria-invalid={status==='err'} />
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-white font-medium hover:bg-zinc-800">
                  <Mail className="h-5 w-5" /> Send it to me
                </button>
              </form>
              {status==='ok' && <p className="mt-3 text-sm text-green-600">Success! Check your inbox for the download link.</p>}
              {status==='err' && <p className="mt-3 text-sm text-red-600">Please enter a valid email address.</p>}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-zinc-900 text-white">{f.icon}</div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-zinc-700">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="books" className="py-4 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div><h2 className="text-2xl sm:text-3xl font-bold">Featured books</h2><p className="mt-1 text-zinc-600">Actionable, beautifully designed, and KDP‑ready.</p></div>
            <a href="#subscribe" className="hidden sm:inline-flex text-sm text-zinc-700 hover:text-zinc-900">Get sample →</a>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((b, i) => (
              <motion.article key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.07 }} className="group rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={b.cover} alt={b.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="inline-flex items-center text-xs font-medium rounded-full bg-zinc-100 text-zinc-700 px-2 py-1">{b.tag}</span>
                  <h3 className="mt-3 font-semibold text-lg leading-tight">{b.title}</h3>
                  <p className="mt-1 text-sm text-zinc-700">{b.subtitle}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <a href="#" className="text-sm font-medium text-zinc-900 hover:underline">View details</a>
                    <a href={b.amazon} target="_blank" rel="noopener noreferrer" className="text-sm rounded-xl border border-zinc-300 px-3 py-1.5 hover:bg-zinc-50">Buy on Amazon</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-sm">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1"><h2 className="text-2xl sm:text-3xl font-bold">What readers say</h2><p className="mt-2 text-zinc-700">Real outcomes from real people.</p></div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
                <figure className="rounded-2xl border border-zinc-200 p-5">
                  <blockquote className="text-zinc-800">“I used one prompt to clean up a 1,200‑row spreadsheet in minutes. That alone paid for the book.”</blockquote>
                  <figcaption className="mt-3 flex items-center gap-2 text-sm text-zinc-600"><Smile className="h-4 w-4" /> Jordan M.</figcaption>
                </figure>
                <figure className="rounded-2xl border border-zinc-200 p-5">
                  <blockquote className="text-zinc-800">“The student edition helped my teen plan study schedules and write better without sounding like a robot.”</blockquote>
                  <figcaption className="mt-3 flex items-center gap-2 text-sm text-zinc-600"><Smile className="h-4 w-4" /> A. Rivera</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="subscribe" className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 shadow-sm text-center">
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 text-white px-3 py-1 text-xs font-medium">
              <Sparkles className="h-4 w-4" /> Free download
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold">Get the Prompt Starter Pack</h2>
            <p className="mt-2 text-zinc-700">25 prompts to save your first 5 hours this week—plus weekly prompt drops.</p>
            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <label htmlFor="email2" className="sr-only">Email</label>
              <input id="email2" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com"
                className="w-full sm:w-96 rounded-2xl border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/20" aria-invalid={status==='err'} />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-white font-medium hover:bg-zinc-800">
                <Mail className="h-5 w-5" /> Email it to me
              </button>
            </form>
            {status==='ok' && <p className="mt-3 text-sm text-green-600">Success! Check your inbox for the download link.</p>}
            {status==='err' && <p className="mt-3 text-sm text-red-600">Please enter a valid email address.</p>}
            <p className="mt-4 text-xs text-zinc-500">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">Frequently asked questions</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-5">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-1 text-zinc-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-white">AI</span>
              <span>Everyday AI Wins</span>
            </div>
            <p className="mt-3 text-sm text-zinc-600 max-w-prose">© {new Date().getFullYear()} EverydayAIWins.com · All rights reserved.</p>
          </div>
          <div className="md:justify-self-end text-sm text-zinc-600">
            <div className="flex gap-6 justify-start md:justify-end">
              <a href="#" className="hover:text-zinc-900">Privacy</a>
              <a href="#" className="hover:text-zinc-900">Terms</a>
              <a href="mailto:hello@everydayaiwins.com" className="hover:text-zinc-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
