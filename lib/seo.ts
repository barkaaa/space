export const seo = {
  title: 'Bark | 开发者、设计师、细节控、创新者',
  description:
    '我叫 Bark，一名开发者。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://space-mu-woad.vercel.app/'
      : 'http://localhost:3000'
  ),
} as const
