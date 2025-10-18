    # FortuneCast (mini) - starter

Bu paket örnek bir FortuneCast mini app projesi içerir.

Önemli adımlar:

1. Node 18+ kurulumu
2. `npm install`
3. `.env` dosyasını `.env.example`'den oluştur
4. `npm run dev` ile Next.js'i çalıştır

Contract deploy için:

- `npx hardhat run scripts/deploy.ts --network sepolia` (env ayarlarını yapın)

Not: `lib/baseClient.ts` içinde gerçek viem/wagmi entegrasyonu henüz mock olarak bırakıldı. Bunu bağlamamı istersen, gerçek kodu ekleyebilirim.
