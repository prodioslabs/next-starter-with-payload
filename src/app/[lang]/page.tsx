import Image from 'next/image'
import { getPayloadClient } from '@/payload/client'
import { getURLFromMedia } from '@/payload/utils'

type HomePageProps = {
  params: {
    lang: 'en' | 'hi'
  }
}

export default async function HomePage({ params }: HomePageProps) {
  const payload = await getPayloadClient()
  const { title, heroImage } = await payload.findGlobal({ slug: 'home', locale: params.lang })

  return (
    <div className="p-4">
      <div className="text-2xl font-semibold">{title}</div>
      <Image src={getURLFromMedia(heroImage)} className="mt-4" alt="Hero Image" height={256} width={256} />
    </div>
  )
}
