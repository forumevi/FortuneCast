import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  function toggle() {
    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en')
  }
  return (
    <button onClick={toggle} className="px-3 py-1 bg-white/6 rounded">{i18n.language === 'en' ? 'TR' : 'EN'}</button>
  )
}
