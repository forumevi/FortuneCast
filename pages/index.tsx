import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import FortuneCard from '../components/FortuneCard'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  const [fortune, setFortune] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function drawFortune() {
    setLoading(true)
    try {
      await new Promise((r => setTimeout(r, 900)))
      const f = await fetch('/api/sample-fortune').then(r => r.json())
      setFortune(f.text)
    } catch (e) {
      console.error(e)
      setFortune(t('error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">FortuneCast</h1>
        <p className="mb-6">{t('subtitle')}</p>

        <div className="flex gap-4 items-center">
          <button
            onClick={drawFortune}
            disabled={loading}
            className="px-6 py-3 bg-amber-500 rounded-lg font-semibold shadow-lg hover:opacity-95"              >
            {loading ? t('drawing') : t('draw_fortune')}
          </button>

          <div className="text-sm opacity-80">{t('daily_limit')}</div>
        </div>

        <div className="mt-8">
          <FortuneCard text={fortune} />
        </div>
      </main>
    </div>
  )
}
