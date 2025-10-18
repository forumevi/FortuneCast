import type { NextApiRequest, NextApiResponse } from 'next'

const samples = [
  'A bold move will bring you fortune.',
  'Luck is on your side today.',
  'An unexpected message will brighten your day.',
  'Yeni bir dost seni bekliyor.',
  'Cesur bir adım, seni başarıya götürecek.',
  'Şans, bugün kapını çalacak.'
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pick = samples[Math.floor(Math.random() * samples.length)]
  res.status(200).json({ text: pick })
}
