'use client'

const content =
  'AS SEEN IN: VOGUE AFRICA · GLAM AFRICA · BELLA NAIJA STYLE · ACCRA FASHION WEEK · GENEVIEVE'

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee">
        <span className="font-cormorant italic text-3xl text-gray-300 font-light px-8">
          {content}
        </span>
        <span className="font-cormorant italic text-3xl text-gray-300 font-light px-8">
          {content}
        </span>
      </div>
    </div>
  )
}
