import React from 'react'

export default function FortuneCard({ text }: { text: string | null }) {
  return (
    <div className="mt-4">
      {text ? (
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">Your Fortune</h2>
          <p className="text-lg">{text}</p>
        </div>
      ) : (
        <div className="p-6 rounded-2xl bg-white/3 border border-white/5 text-center opacity-80">
          Çekiliş yapılmadı.
        </div>
      )}
    </div>
  )
}
