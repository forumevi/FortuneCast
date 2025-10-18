import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="text-xl font-bold">FortuneCast</div>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <div className="px-3 py-1 rounded bg-white/10">Sign in (Farcaster)</div>
      </div>
    </nav>
  )
}
